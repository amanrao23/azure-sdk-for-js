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
  ModelContainer,
  RegistryModelContainersListOptionalParams,
  RegistryModelContainersDeleteOptionalParams,
  RegistryModelContainersGetOptionalParams,
  RegistryModelContainersGetResponse,
  RegistryModelContainersCreateOrUpdateOptionalParams,
  RegistryModelContainersCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RegistryModelContainers. */
export interface RegistryModelContainers {
  /**
   * List model containers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: RegistryModelContainersListOptionalParams,
  ): PagedAsyncIterableIterator<ModelContainer>;
  /**
   * Delete container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    options?: RegistryModelContainersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    options?: RegistryModelContainersDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    options?: RegistryModelContainersGetOptionalParams,
  ): Promise<RegistryModelContainersGetResponse>;
  /**
   * Create or update model container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param body Container entity to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    body: ModelContainer,
    options?: RegistryModelContainersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<RegistryModelContainersCreateOrUpdateResponse>,
      RegistryModelContainersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update model container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param body Container entity to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    body: ModelContainer,
    options?: RegistryModelContainersCreateOrUpdateOptionalParams,
  ): Promise<RegistryModelContainersCreateOrUpdateResponse>;
}
