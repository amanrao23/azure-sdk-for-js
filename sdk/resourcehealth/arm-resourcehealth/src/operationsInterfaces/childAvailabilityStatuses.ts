/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AvailabilityStatus,
  ChildAvailabilityStatusesListOptionalParams,
  ChildAvailabilityStatusesGetByResourceOptionalParams,
  ChildAvailabilityStatusesGetByResourceResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ChildAvailabilityStatuses. */
export interface ChildAvailabilityStatuses {
  /**
   * Lists the historical availability statuses for a single child resource. Use the nextLink property in
   * the response to get the next page of availability status
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: ChildAvailabilityStatusesListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus>;
  /**
   * Gets current availability status for a single resource
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  getByResource(
    resourceUri: string,
    options?: ChildAvailabilityStatusesGetByResourceOptionalParams
  ): Promise<ChildAvailabilityStatusesGetByResourceResponse>;
}
