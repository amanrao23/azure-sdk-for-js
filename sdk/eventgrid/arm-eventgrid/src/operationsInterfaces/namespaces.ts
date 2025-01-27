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
  Namespace,
  NamespacesListBySubscriptionOptionalParams,
  NamespacesListByResourceGroupOptionalParams,
  NamespacesGetOptionalParams,
  NamespacesGetResponse,
  NamespacesCreateOrUpdateOptionalParams,
  NamespacesCreateOrUpdateResponse,
  NamespacesDeleteOptionalParams,
  NamespaceUpdateParameters,
  NamespacesUpdateOptionalParams,
  NamespacesUpdateResponse,
  NamespacesListSharedAccessKeysOptionalParams,
  NamespacesListSharedAccessKeysResponse,
  NamespaceRegenerateKeyRequest,
  NamespacesRegenerateKeyOptionalParams,
  NamespacesRegenerateKeyResponse,
  NamespacesValidateCustomDomainOwnershipOptionalParams,
  NamespacesValidateCustomDomainOwnershipResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Namespaces. */
export interface Namespaces {
  /**
   * List all the namespaces under an Azure subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: NamespacesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Namespace>;
  /**
   * List all the namespaces under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: NamespacesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Namespace>;
  /**
   * Get properties of a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesGetOptionalParams,
  ): Promise<NamespacesGetResponse>;
  /**
   * Asynchronously creates or updates a new namespace with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param namespaceInfo Namespace information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    namespaceInfo: Namespace,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesCreateOrUpdateResponse>,
      NamespacesCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates or updates a new namespace with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param namespaceInfo Namespace information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    namespaceInfo: Namespace,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ): Promise<NamespacesCreateOrUpdateResponse>;
  /**
   * Delete existing namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete existing namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Asynchronously updates a namespace with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param namespaceUpdateParameters Namespace update information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    namespaceName: string,
    namespaceUpdateParameters: NamespaceUpdateParameters,
    options?: NamespacesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesUpdateResponse>,
      NamespacesUpdateResponse
    >
  >;
  /**
   * Asynchronously updates a namespace with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param namespaceUpdateParameters Namespace update information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    namespaceUpdateParameters: NamespaceUpdateParameters,
    options?: NamespacesUpdateOptionalParams,
  ): Promise<NamespacesUpdateResponse>;
  /**
   * List the two keys used to publish to a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  listSharedAccessKeys(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListSharedAccessKeysOptionalParams,
  ): Promise<NamespacesListSharedAccessKeysResponse>;
  /**
   * Regenerate a shared access key for a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the Namespace.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param options The options parameters.
   */
  beginRegenerateKey(
    resourceGroupName: string,
    namespaceName: string,
    regenerateKeyRequest: NamespaceRegenerateKeyRequest,
    options?: NamespacesRegenerateKeyOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesRegenerateKeyResponse>,
      NamespacesRegenerateKeyResponse
    >
  >;
  /**
   * Regenerate a shared access key for a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the Namespace.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param options The options parameters.
   */
  beginRegenerateKeyAndWait(
    resourceGroupName: string,
    namespaceName: string,
    regenerateKeyRequest: NamespaceRegenerateKeyRequest,
    options?: NamespacesRegenerateKeyOptionalParams,
  ): Promise<NamespacesRegenerateKeyResponse>;
  /**
   * Performs ownership validation via checking TXT records for all custom domains in a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the Namespace.
   * @param options The options parameters.
   */
  beginValidateCustomDomainOwnership(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesValidateCustomDomainOwnershipOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesValidateCustomDomainOwnershipResponse>,
      NamespacesValidateCustomDomainOwnershipResponse
    >
  >;
  /**
   * Performs ownership validation via checking TXT records for all custom domains in a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the Namespace.
   * @param options The options parameters.
   */
  beginValidateCustomDomainOwnershipAndWait(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesValidateCustomDomainOwnershipOptionalParams,
  ): Promise<NamespacesValidateCustomDomainOwnershipResponse>;
}
