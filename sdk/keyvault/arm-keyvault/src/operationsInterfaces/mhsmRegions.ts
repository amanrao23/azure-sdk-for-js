/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MhsmGeoReplicatedRegion,
  MhsmRegionsListByResourceOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MhsmRegions. */
export interface MhsmRegions {
  /**
   * The List operation gets information about the regions associated with the managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param options The options parameters.
   */
  listByResource(
    resourceGroupName: string,
    name: string,
    options?: MhsmRegionsListByResourceOptionalParams
  ): PagedAsyncIterableIterator<MhsmGeoReplicatedRegion>;
}
