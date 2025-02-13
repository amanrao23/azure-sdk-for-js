/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Workspace,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesListOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspaceUpdateParameters,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse,
  WorkspacesResyncStorageKeysOptionalParams,
  WorkspacesListWorkspaceKeysOptionalParams,
  WorkspacesListWorkspaceKeysResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Lists all the available machine learning workspaces under the specified resource group.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Lists all the available machine learning workspaces under the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: WorkspacesListOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets the properties of the specified machine learning workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param workspaceName The name of the machine learning workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams
  ): Promise<WorkspacesGetResponse>;
  /**
   * Creates or updates a workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param workspaceName The name of the machine learning workspace.
   * @param parameters The parameters for creating or updating a machine learning workspace.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Deletes a machine learning workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param workspaceName The name of the machine learning workspace.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a machine learning workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param workspaceName The name of the machine learning workspace.
   * @param parameters The parameters for updating a machine learning workspace.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    parameters: WorkspaceUpdateParameters,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<WorkspacesUpdateResponse>;
  /**
   * Resync storage keys associated with this workspace.
   * @param workspaceName The name of the machine learning workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param options The options parameters.
   */
  resyncStorageKeys(
    workspaceName: string,
    resourceGroupName: string,
    options?: WorkspacesResyncStorageKeysOptionalParams
  ): Promise<void>;
  /**
   * List the authorization keys associated with this workspace.
   * @param workspaceName The name of the machine learning workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning workspace
   *                          belongs.
   * @param options The options parameters.
   */
  listWorkspaceKeys(
    workspaceName: string,
    resourceGroupName: string,
    options?: WorkspacesListWorkspaceKeysOptionalParams
  ): Promise<WorkspacesListWorkspaceKeysResponse>;
}
