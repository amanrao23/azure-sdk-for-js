// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Constants } from "../common";
import type { BulkPartitionMetric } from "./BulkPartitionMetric";
import type { Limiter } from "./Limiter";
/**
 * This class implements a congestion control algorithm which dynamically adjusts the degree
 * of concurrency based on the throttling and number of processed items.
 * It uses the @see {@link BulkPartitionMetric} to capture the metrics.
 * @hidden
 */

export class BulkCongestionAlgorithm {
  // The semaphore to control the degree of concurrency.
  private limiter: Limiter;
  // captures metrics upto previous requests for a partition.
  private oldPartitionMetric: BulkPartitionMetric;
  // captures metrics upto current request for a partition.
  private partitionMetric: BulkPartitionMetric;
  // time to wait before adjusting the degree of concurrency.
  private congestionWaitTimeInMs: number = 1000;
  private congestionIncreaseFactor: number = 1;
  private congestionDecreaseFactor: number = 5;
  private currentDegreeOfConcurrency: number;

  constructor(
    limiter: Limiter,
    partitionMetric: BulkPartitionMetric,
    oldPartitionMetric: BulkPartitionMetric,
  ) {
    this.limiter = limiter;
    this.oldPartitionMetric = oldPartitionMetric;
    this.partitionMetric = partitionMetric;
    this.currentDegreeOfConcurrency = 1;
  }

  run(): void {
    const elapsedTimeInMs =
      this.partitionMetric.timeTakenInMs - this.oldPartitionMetric.timeTakenInMs;
    if (elapsedTimeInMs >= this.congestionWaitTimeInMs) {
      const diffThrottle =
        this.partitionMetric.numberOfThrottles - this.oldPartitionMetric.numberOfThrottles;
      const changeItemsCount =
        this.partitionMetric.numberOfItemsOperatedOn -
        this.oldPartitionMetric.numberOfItemsOperatedOn;

      this.oldPartitionMetric.add(changeItemsCount, elapsedTimeInMs, diffThrottle);
      // if the number of throttles increased, decrease the degree of concurrency.
      if (diffThrottle > 0) {
        this.decreaseConcurrency();
      }
      // if there's no throttling and the number of items processed increased, increase the degree of concurrency.
      if (changeItemsCount > 0 && diffThrottle === 0) {
        this.increaseConcurrency();
      }
    }
  }

  private decreaseConcurrency(): void {
    // decrease should not lead the degree of concurrency as 0.
    const decreaseCount = Math.min(
      this.congestionDecreaseFactor,
      Math.floor(this.currentDegreeOfConcurrency / 2),
    );
    // block permits
    for (let i = 0; i < decreaseCount; i++) {
      this.limiter.take(() => {});
    }

    this.currentDegreeOfConcurrency -= decreaseCount;
    // In case of throttling increase the wait time to adjust the degree of concurrency.
    this.congestionWaitTimeInMs += 1000;
  }

  private increaseConcurrency(): void {
    if (
      this.currentDegreeOfConcurrency + this.congestionIncreaseFactor <=
      Constants.BulkMaxDegreeOfConcurrency
    ) {
      if (this.limiter.current() > 0) {
        this.limiter.leave(this.congestionIncreaseFactor);
      }
      this.currentDegreeOfConcurrency += this.congestionIncreaseFactor;
    }
  }
}
