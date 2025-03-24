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
  AzureDevOpsProject,
  AzureDevOpsProjectListOptionalParams,
  AzureDevOpsProjectGetOptionalParams,
  AzureDevOpsProjectGetResponse,
  AzureDevOpsProjectCreateOrUpdateOptionalParams,
  AzureDevOpsProjectCreateOrUpdateResponse,
  AzureDevOpsProjectUpdateOptionalParams,
  AzureDevOpsProjectUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureDevOpsProjectOperations. */
export interface AzureDevOpsProjectOperations {
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsProjectListOptionalParams
  ): PagedAsyncIterableIterator<AzureDevOpsProject>;
  /**
   * Returns a monitored AzureDevOps Project resource for a given ID.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    options?: AzureDevOpsProjectGetOptionalParams
  ): Promise<AzureDevOpsProjectGetResponse>;
  /**
   * Creates or updates an Azure DevOps Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param azureDevOpsProject Azure DevOps Org resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    azureDevOpsProject: AzureDevOpsProject,
    options?: AzureDevOpsProjectCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsProjectCreateOrUpdateResponse>,
      AzureDevOpsProjectCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an Azure DevOps Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param azureDevOpsProject Azure DevOps Org resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    azureDevOpsProject: AzureDevOpsProject,
    options?: AzureDevOpsProjectCreateOrUpdateOptionalParams
  ): Promise<AzureDevOpsProjectCreateOrUpdateResponse>;
  /**
   * Update monitored AzureDevOps Project details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    options?: AzureDevOpsProjectUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsProjectUpdateResponse>,
      AzureDevOpsProjectUpdateResponse
    >
  >;
  /**
   * Update monitored AzureDevOps Project details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    options?: AzureDevOpsProjectUpdateOptionalParams
  ): Promise<AzureDevOpsProjectUpdateResponse>;
}
