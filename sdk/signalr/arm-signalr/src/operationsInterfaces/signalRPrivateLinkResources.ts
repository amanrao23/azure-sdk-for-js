/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateLinkResource,
  SignalRPrivateLinkResourcesListOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SignalRPrivateLinkResources. */
export interface SignalRPrivateLinkResources {
  /**
   * Get the private link resources that need to be created for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
}
