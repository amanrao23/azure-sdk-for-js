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
  Domain,
  DomainsListBySubscriptionOptionalParams,
  DomainsListByResourceGroupOptionalParams,
  DomainsGetOptionalParams,
  DomainsGetResponse,
  DomainsCreateOrUpdateOptionalParams,
  DomainsCreateOrUpdateResponse,
  DomainsDeleteOptionalParams,
  DomainUpdateParameters,
  DomainsUpdateOptionalParams,
  DomainsListSharedAccessKeysOptionalParams,
  DomainsListSharedAccessKeysResponse,
  DomainRegenerateKeyRequest,
  DomainsRegenerateKeyOptionalParams,
  DomainsRegenerateKeyResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Domains. */
export interface Domains {
  /**
   * List all the domains under an Azure subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: DomainsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Domain>;
  /**
   * List all the domains under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Domain>;
  /**
   * Get properties of a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsGetOptionalParams,
  ): Promise<DomainsGetResponse>;
  /**
   * Asynchronously creates or updates a new domain with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainInfo Domain information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    domainName: string,
    domainInfo: Domain,
    options?: DomainsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DomainsCreateOrUpdateResponse>,
      DomainsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates or updates a new domain with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainInfo Domain information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    domainInfo: Domain,
    options?: DomainsCreateOrUpdateOptionalParams,
  ): Promise<DomainsCreateOrUpdateResponse>;
  /**
   * Delete existing domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete existing domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Asynchronously updates a domain with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainUpdateParameters Domain update information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    domainName: string,
    domainUpdateParameters: DomainUpdateParameters,
    options?: DomainsUpdateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Asynchronously updates a domain with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param domainUpdateParameters Domain update information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    domainUpdateParameters: DomainUpdateParameters,
    options?: DomainsUpdateOptionalParams,
  ): Promise<void>;
  /**
   * List the two keys used to publish to a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  listSharedAccessKeys(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListSharedAccessKeysOptionalParams,
  ): Promise<DomainsListSharedAccessKeysResponse>;
  /**
   * Regenerate a shared access key for a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    domainName: string,
    regenerateKeyRequest: DomainRegenerateKeyRequest,
    options?: DomainsRegenerateKeyOptionalParams,
  ): Promise<DomainsRegenerateKeyResponse>;
}
