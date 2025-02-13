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
  Workspace,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesListBySubscriptionOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspaceUpdateParameters,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse,
  WorkspacesDiagnoseOptionalParams,
  WorkspacesDiagnoseResponse,
  WorkspacesListKeysOptionalParams,
  WorkspacesListKeysResponse,
  WorkspacesResyncKeysOptionalParams,
  WorkspacesListNotebookAccessTokenOptionalParams,
  WorkspacesListNotebookAccessTokenResponse,
  WorkspacesPrepareNotebookOptionalParams,
  WorkspacesPrepareNotebookResponse,
  WorkspacesListStorageAccountKeysOptionalParams,
  WorkspacesListStorageAccountKeysResponse,
  WorkspacesListNotebookKeysOptionalParams,
  WorkspacesListNotebookKeysResponse,
  WorkspacesListOutboundNetworkDependenciesEndpointsOptionalParams,
  WorkspacesListOutboundNetworkDependenciesEndpointsResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Lists all the available machine learning workspaces under the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Lists all the available machine learning workspaces under the specified subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: WorkspacesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets the properties of the specified machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams,
  ): Promise<WorkspacesGetResponse>;
  /**
   * Creates or updates a workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param parameters The parameters for creating or updating a machine learning workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesCreateOrUpdateResponse>,
      WorkspacesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param parameters The parameters for creating or updating a machine learning workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Deletes a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates a machine learning workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param parameters The parameters for updating a machine learning workspace.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    parameters: WorkspaceUpdateParameters,
    options?: WorkspacesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesUpdateResponse>,
      WorkspacesUpdateResponse
    >
  >;
  /**
   * Updates a machine learning workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param parameters The parameters for updating a machine learning workspace.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    parameters: WorkspaceUpdateParameters,
    options?: WorkspacesUpdateOptionalParams,
  ): Promise<WorkspacesUpdateResponse>;
  /**
   * Diagnose workspace setup issue.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginDiagnose(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDiagnoseOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesDiagnoseResponse>,
      WorkspacesDiagnoseResponse
    >
  >;
  /**
   * Diagnose workspace setup issue.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginDiagnoseAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDiagnoseOptionalParams,
  ): Promise<WorkspacesDiagnoseResponse>;
  /**
   * Lists all the keys associated with this workspace. This includes keys for the storage account, app
   * insights and password for container registry
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesListKeysOptionalParams,
  ): Promise<WorkspacesListKeysResponse>;
  /**
   * Resync all the keys associated with this workspace. This includes keys for the storage account, app
   * insights and password for container registry
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginResyncKeys(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesResyncKeysOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Resync all the keys associated with this workspace. This includes keys for the storage account, app
   * insights and password for container registry
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginResyncKeysAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesResyncKeysOptionalParams,
  ): Promise<void>;
  /**
   * return notebook access token and refresh token
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  listNotebookAccessToken(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesListNotebookAccessTokenOptionalParams,
  ): Promise<WorkspacesListNotebookAccessTokenResponse>;
  /**
   * Prepare a notebook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginPrepareNotebook(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesPrepareNotebookOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesPrepareNotebookResponse>,
      WorkspacesPrepareNotebookResponse
    >
  >;
  /**
   * Prepare a notebook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  beginPrepareNotebookAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesPrepareNotebookOptionalParams,
  ): Promise<WorkspacesPrepareNotebookResponse>;
  /**
   * List storage account keys of a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  listStorageAccountKeys(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesListStorageAccountKeysOptionalParams,
  ): Promise<WorkspacesListStorageAccountKeysResponse>;
  /**
   * List keys of a notebook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  listNotebookKeys(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesListNotebookKeysOptionalParams,
  ): Promise<WorkspacesListNotebookKeysResponse>;
  /**
   * Called by Client (Portal, CLI, etc) to get a list of all external outbound dependencies (FQDNs)
   * programmatically.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): Promise<WorkspacesListOutboundNetworkDependenciesEndpointsResponse>;
}
