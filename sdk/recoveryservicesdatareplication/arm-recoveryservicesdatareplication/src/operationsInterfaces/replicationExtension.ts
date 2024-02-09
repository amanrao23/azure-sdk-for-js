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
  ReplicationExtensionModel,
  ReplicationExtensionListOptionalParams,
  ReplicationExtensionGetOptionalParams,
  ReplicationExtensionGetResponse,
  ReplicationExtensionCreateOptionalParams,
  ReplicationExtensionCreateResponse,
  ReplicationExtensionDeleteOptionalParams,
  ReplicationExtensionDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationExtension. */
export interface ReplicationExtension {
  /**
   * Gets the list of replication extensions in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    options?: ReplicationExtensionListOptionalParams
  ): PagedAsyncIterableIterator<ReplicationExtensionModel>;
  /**
   * Gets the details of the replication extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param replicationExtensionName The replication extension name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    replicationExtensionName: string,
    options?: ReplicationExtensionGetOptionalParams
  ): Promise<ReplicationExtensionGetResponse>;
  /**
   * Creates the replication extension in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param replicationExtensionName The replication extension name.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    vaultName: string,
    replicationExtensionName: string,
    options?: ReplicationExtensionCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationExtensionCreateResponse>,
      ReplicationExtensionCreateResponse
    >
  >;
  /**
   * Creates the replication extension in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param replicationExtensionName The replication extension name.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    vaultName: string,
    replicationExtensionName: string,
    options?: ReplicationExtensionCreateOptionalParams
  ): Promise<ReplicationExtensionCreateResponse>;
  /**
   * Deletes the replication extension in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param replicationExtensionName The replication extension name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vaultName: string,
    replicationExtensionName: string,
    options?: ReplicationExtensionDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationExtensionDeleteResponse>,
      ReplicationExtensionDeleteResponse
    >
  >;
  /**
   * Deletes the replication extension in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param replicationExtensionName The replication extension name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    replicationExtensionName: string,
    options?: ReplicationExtensionDeleteOptionalParams
  ): Promise<ReplicationExtensionDeleteResponse>;
}
