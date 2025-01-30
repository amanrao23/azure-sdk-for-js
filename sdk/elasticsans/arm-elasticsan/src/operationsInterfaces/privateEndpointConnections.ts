/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsCreateResponse,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * List all Private Endpoint Connections associated with the Elastic San.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    elasticSanName: string,
    options?: PrivateEndpointConnectionsListOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Update the state of specified private endpoint connection associated with the Elastic San
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param privateEndpointConnectionName The name of the Private Endpoint connection.
   * @param parameters Private Endpoint Connection Approval object.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    elasticSanName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointConnectionsCreateResponse>,
      PrivateEndpointConnectionsCreateResponse
    >
  >;
  /**
   * Update the state of specified private endpoint connection associated with the Elastic San
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param privateEndpointConnectionName The name of the Private Endpoint connection.
   * @param parameters Private Endpoint Connection Approval object.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams,
  ): Promise<PrivateEndpointConnectionsCreateResponse>;
  /**
   * Gets the specified private endpoint connection associated with the Elastic San
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param privateEndpointConnectionName The name of the Private Endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    elasticSanName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Deletes the specified private endpoint connection associated with the Elastic San
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param privateEndpointConnectionName The name of the Private Endpoint connection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    elasticSanName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified private endpoint connection associated with the Elastic San
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param privateEndpointConnectionName The name of the Private Endpoint connection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<void>;
}
