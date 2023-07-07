// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { Resource } from "../Resource";
import { ChangeFeedIteratorResponse } from "./ChangeFeedIteratorResponse";
import { PartitionKeyRange } from "../../client";
export abstract class ChangeFeedIteratorV2<T> {
  abstract get hasMoreResults(): boolean;

  abstract ReadNextAsync(): Promise<ChangeFeedIteratorResponse<Array<T & Resource>>>;

  abstract fetchAllFeedRanges(): Promise<void>;

  abstract fetchOverLappingFeedRanges(epkRange: PartitionKeyRange): Promise<void>;

  abstract fetchContinuationTokenFeedRanges(continuationToken: string): Promise<boolean>;
}
