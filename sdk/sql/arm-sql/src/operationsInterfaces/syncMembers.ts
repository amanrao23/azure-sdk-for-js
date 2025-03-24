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
  SyncMember,
  SyncMembersListBySyncGroupOptionalParams,
  SyncFullSchemaProperties,
  SyncMembersListMemberSchemasOptionalParams,
  SyncMembersGetOptionalParams,
  SyncMembersGetResponse,
  SyncMembersCreateOrUpdateOptionalParams,
  SyncMembersCreateOrUpdateResponse,
  SyncMembersDeleteOptionalParams,
  SyncMembersUpdateOptionalParams,
  SyncMembersUpdateResponse,
  SyncMembersRefreshMemberSchemaOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SyncMembers. */
export interface SyncMembers {
  /**
   * Lists sync members in the given sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  listBySyncGroup(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncMembersListBySyncGroupOptionalParams,
  ): PagedAsyncIterableIterator<SyncMember>;
  /**
   * Gets a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  listMemberSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersListMemberSchemasOptionalParams,
  ): PagedAsyncIterableIterator<SyncFullSchemaProperties>;
  /**
   * Gets a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersGetOptionalParams,
  ): Promise<SyncMembersGetResponse>;
  /**
   * Creates or updates a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    parameters: SyncMember,
    options?: SyncMembersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SyncMembersCreateOrUpdateResponse>,
      SyncMembersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    parameters: SyncMember,
    options?: SyncMembersCreateOrUpdateOptionalParams,
  ): Promise<SyncMembersCreateOrUpdateResponse>;
  /**
   * Deletes a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates an existing sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    parameters: SyncMember,
    options?: SyncMembersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SyncMembersUpdateResponse>,
      SyncMembersUpdateResponse
    >
  >;
  /**
   * Updates an existing sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    parameters: SyncMember,
    options?: SyncMembersUpdateOptionalParams,
  ): Promise<SyncMembersUpdateResponse>;
  /**
   * Refreshes a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  beginRefreshMemberSchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersRefreshMemberSchemaOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Refreshes a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  beginRefreshMemberSchemaAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersRefreshMemberSchemaOptionalParams,
  ): Promise<void>;
}
