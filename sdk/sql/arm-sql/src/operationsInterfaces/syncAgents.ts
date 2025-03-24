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
  SyncAgent,
  SyncAgentsListByServerOptionalParams,
  SyncAgentLinkedDatabase,
  SyncAgentsListLinkedDatabasesOptionalParams,
  SyncAgentsGetOptionalParams,
  SyncAgentsGetResponse,
  SyncAgentsCreateOrUpdateOptionalParams,
  SyncAgentsCreateOrUpdateResponse,
  SyncAgentsDeleteOptionalParams,
  SyncAgentsGenerateKeyOptionalParams,
  SyncAgentsGenerateKeyResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SyncAgents. */
export interface SyncAgents {
  /**
   * Lists sync agents in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: SyncAgentsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<SyncAgent>;
  /**
   * Lists databases linked to a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  listLinkedDatabases(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsListLinkedDatabasesOptionalParams,
  ): PagedAsyncIterableIterator<SyncAgentLinkedDatabase>;
  /**
   * Gets a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsGetOptionalParams,
  ): Promise<SyncAgentsGetResponse>;
  /**
   * Creates or updates a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param parameters The requested sync agent resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    parameters: SyncAgent,
    options?: SyncAgentsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SyncAgentsCreateOrUpdateResponse>,
      SyncAgentsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param parameters The requested sync agent resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    parameters: SyncAgent,
    options?: SyncAgentsCreateOrUpdateOptionalParams,
  ): Promise<SyncAgentsCreateOrUpdateResponse>;
  /**
   * Deletes a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Generates a sync agent key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  generateKey(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsGenerateKeyOptionalParams,
  ): Promise<SyncAgentsGenerateKeyResponse>;
}
