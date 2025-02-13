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
  FileSystemResource,
  FileSystemsListBySubscriptionOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsGetOptionalParams,
  FileSystemsGetResponse,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsCreateOrUpdateResponse,
  FileSystemResourceUpdate,
  FileSystemsUpdateOptionalParams,
  FileSystemsUpdateResponse,
  FileSystemsDeleteOptionalParams,
  FileSystemsDeleteResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FileSystems. */
export interface FileSystems {
  /**
   * List FileSystemResource resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: FileSystemsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<FileSystemResource>;
  /**
   * List FileSystemResource resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: FileSystemsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<FileSystemResource>;
  /**
   * Get a FileSystemResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fileSystemName Name of the File System resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsGetOptionalParams,
  ): Promise<FileSystemsGetResponse>;
  /**
   * Create a FileSystemResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fileSystemName Name of the File System resource
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    fileSystemName: string,
    resource: FileSystemResource,
    options?: FileSystemsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FileSystemsCreateOrUpdateResponse>,
      FileSystemsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a FileSystemResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fileSystemName Name of the File System resource
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fileSystemName: string,
    resource: FileSystemResource,
    options?: FileSystemsCreateOrUpdateOptionalParams,
  ): Promise<FileSystemsCreateOrUpdateResponse>;
  /**
   * Update a FileSystemResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fileSystemName Name of the File System resource
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    fileSystemName: string,
    properties: FileSystemResourceUpdate,
    options?: FileSystemsUpdateOptionalParams,
  ): Promise<FileSystemsUpdateResponse>;
  /**
   * Delete a FileSystemResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fileSystemName Name of the File System resource
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FileSystemsDeleteResponse>,
      FileSystemsDeleteResponse
    >
  >;
  /**
   * Delete a FileSystemResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fileSystemName Name of the File System resource
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsDeleteOptionalParams,
  ): Promise<FileSystemsDeleteResponse>;
}
