// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @internal
 * Internal Change Feed Iterator Options used only by ChangeFeedForEpkRange and ChangeFeedForPartitionKey.
 */
export interface InternalChangeFeedIteratorOptions {
  maxItemCount?: number;

  sessionToken?: string;

  continuationToken?: string;

  startTime?: Date;
}
