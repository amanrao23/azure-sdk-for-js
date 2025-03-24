/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsCreateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * Get a PrivateEndpointConnection List.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets the specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Update the state of specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PrivateEndpointConnectionsCreateResponse>,
      PrivateEndpointConnectionsCreateResponse
    >
  >;
  /**
   * Update the state of specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateResponse>;
  /**
   * Deletes the specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void>;
}
