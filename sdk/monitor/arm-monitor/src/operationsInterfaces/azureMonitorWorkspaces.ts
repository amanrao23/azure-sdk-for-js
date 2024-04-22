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
  AzureMonitorWorkspaceResource,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  AzureMonitorWorkspacesGetOptionalParams,
  AzureMonitorWorkspacesGetResponse,
  AzureMonitorWorkspacesCreateOptionalParams,
  AzureMonitorWorkspacesCreateResponse,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesUpdateResponse,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureMonitorWorkspaces. */
export interface AzureMonitorWorkspaces {
  /**
   * Lists all Azure Monitor Workspaces in the specified resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AzureMonitorWorkspaceResource>;
  /**
   * Lists all Azure Monitor Workspaces in the specified subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AzureMonitorWorkspaceResource>;
  /**
   * Returns the specified Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesGetOptionalParams,
  ): Promise<AzureMonitorWorkspacesGetResponse>;
  /**
   * Creates or updates an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param azureMonitorWorkspaceProperties Properties that need to be specified to create a new Azure
   *                                        Monitor Workspace
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    azureMonitorWorkspaceProperties: AzureMonitorWorkspaceResource,
    options?: AzureMonitorWorkspacesCreateOptionalParams,
  ): Promise<AzureMonitorWorkspacesCreateResponse>;
  /**
   * Updates part of an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesUpdateOptionalParams,
  ): Promise<AzureMonitorWorkspacesUpdateResponse>;
  /**
   * Deletes an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureMonitorWorkspacesDeleteResponse>,
      AzureMonitorWorkspacesDeleteResponse
    >
  >;
  /**
   * Deletes an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesDeleteOptionalParams,
  ): Promise<AzureMonitorWorkspacesDeleteResponse>;
}
