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
  ServerInstance,
  ServerInstancesListBySapInstanceOptionalParams,
  ServerInstancesGetOptionalParams,
  ServerInstancesGetResponse,
  ServerInstancesCreateOptionalParams,
  ServerInstancesCreateResponse,
  UpdateServerInstanceRequest,
  ServerInstancesUpdateOptionalParams,
  ServerInstancesUpdateResponse,
  ServerInstancesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerInstances. */
export interface ServerInstances {
  /**
   * Lists the Server Instance resources for the given SAP Instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param options The options parameters.
   */
  listBySapInstance(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: ServerInstancesListBySapInstanceOptionalParams,
  ): PagedAsyncIterableIterator<ServerInstance>;
  /**
   * Gets the Server Instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param serverInstanceName The name of the Server instance resource for SAP Migration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesGetOptionalParams,
  ): Promise<ServerInstancesGetResponse>;
  /**
   * Creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on
   * this resource by end user will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param serverInstanceName The name of the Server instance resource for SAP Migration.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    resource: ServerInstance,
    options?: ServerInstancesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerInstancesCreateResponse>,
      ServerInstancesCreateResponse
    >
  >;
  /**
   * Creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on
   * this resource by end user will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param serverInstanceName The name of the Server instance resource for SAP Migration.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    resource: ServerInstance,
    options?: ServerInstancesCreateOptionalParams,
  ): Promise<ServerInstancesCreateResponse>;
  /**
   * Updates the Server Instance resource. This operation on a resource by end user will return a Bad
   * Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param serverInstanceName The name of the Server instance resource for SAP Migration.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    properties: UpdateServerInstanceRequest,
    options?: ServerInstancesUpdateOptionalParams,
  ): Promise<ServerInstancesUpdateResponse>;
  /**
   * Deletes the Server Instance resource. <br><br>;This will be used by service only. Delete operation
   * on this resource by end user will return a Bad Request error. You can delete the parent resource,
   * which is the SAP Migration discovery site resource, using the delete operation on it.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param serverInstanceName The name of the Server instance resource for SAP Migration.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the Server Instance resource. <br><br>;This will be used by service only. Delete operation
   * on this resource by end user will return a Bad Request error. You can delete the parent resource,
   * which is the SAP Migration discovery site resource, using the delete operation on it.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapDiscoverySiteName The name of the discovery site resource for SAP Migration.
   * @param sapInstanceName The name of SAP Instance resource for SAP Migration.
   * @param serverInstanceName The name of the Server instance resource for SAP Migration.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    serverInstanceName: string,
    options?: ServerInstancesDeleteOptionalParams,
  ): Promise<void>;
}
