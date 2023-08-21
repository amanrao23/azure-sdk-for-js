// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PartitionKey } from "../../documents";
import { FeedRange } from "./FeedRange";
/**
 * @hidden
 * Class which specifies the ChangeFeedIterator to start reading changes from this moment in time.
 */
export class ChangeFeedStartFromNow {
  public cfResource?: PartitionKey | FeedRange;

  constructor(cfResource?: PartitionKey | FeedRange) {
    this.cfResource = cfResource;
  }

  public getCfResource(): PartitionKey | FeedRange {
    return this.cfResource;
  }
}
