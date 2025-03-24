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
  AzureDevOpsOrg,
  AzureDevOpsOrgListOptionalParams,
  AzureDevOpsOrgGetOptionalParams,
  AzureDevOpsOrgGetResponse,
  AzureDevOpsOrgCreateOrUpdateOptionalParams,
  AzureDevOpsOrgCreateOrUpdateResponse,
  AzureDevOpsOrgUpdateOptionalParams,
  AzureDevOpsOrgUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureDevOpsOrgOperations. */
export interface AzureDevOpsOrgOperations {
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsOrgListOptionalParams
  ): PagedAsyncIterableIterator<AzureDevOpsOrg>;
  /**
   * Returns a monitored AzureDevOps Org resource for a given ID.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsOrgGetOptionalParams
  ): Promise<AzureDevOpsOrgGetResponse>;
  /**
   * Creates or updates an Azure DevOps Org.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsOrg Azure DevOps Org resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsOrg: AzureDevOpsOrg,
    options?: AzureDevOpsOrgCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsOrgCreateOrUpdateResponse>,
      AzureDevOpsOrgCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an Azure DevOps Org.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsOrg Azure DevOps Org resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsOrg: AzureDevOpsOrg,
    options?: AzureDevOpsOrgCreateOrUpdateOptionalParams
  ): Promise<AzureDevOpsOrgCreateOrUpdateResponse>;
  /**
   * Update monitored AzureDevOps Org details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsOrgUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsOrgUpdateResponse>,
      AzureDevOpsOrgUpdateResponse
    >
  >;
  /**
   * Update monitored AzureDevOps Org details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsOrgUpdateOptionalParams
  ): Promise<AzureDevOpsOrgUpdateResponse>;
}
