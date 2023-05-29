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
  Vault,
  VaultsListByResourceGroupOptionalParams,
  VaultsListBySubscriptionOptionalParams,
  DeletedVault,
  VaultsListDeletedOptionalParams,
  Resource,
  VaultsListOptionalParams,
  VaultCreateOrUpdateParameters,
  VaultsCreateOrUpdateOptionalParams,
  VaultsCreateOrUpdateResponse,
  VaultPatchParameters,
  VaultsUpdateOptionalParams,
  VaultsUpdateResponse,
  VaultsDeleteOptionalParams,
  VaultsGetOptionalParams,
  VaultsGetResponse,
  VaultAccessPolicyParameters,
  AccessPolicyUpdateKind,
  VaultsUpdateAccessPolicyOptionalParams,
  VaultsUpdateAccessPolicyResponse,
  VaultsGetDeletedOptionalParams,
  VaultsGetDeletedResponse,
  VaultsPurgeDeletedOptionalParams,
  VaultCheckNameAvailabilityParameters,
  VaultsCheckNameAvailabilityOptionalParams,
  VaultsCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Vaults. */
export interface Vaults {
  /**
   * The List operation gets information about the vaults associated with the subscription and within the
   * specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Vault>;
  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: VaultsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Vault>;
  /**
   * Gets information about the deleted vaults in a subscription.
   * @param options The options parameters.
   */
  listDeleted(
    options?: VaultsListDeletedOptionalParams
  ): PagedAsyncIterableIterator<DeletedVault>;
  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  list(
    options?: VaultsListOptionalParams
  ): PagedAsyncIterableIterator<Resource>;
  /**
   * Create or update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to create or update the vault
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultCreateOrUpdateParameters,
    options?: VaultsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VaultsCreateOrUpdateResponse>,
      VaultsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to create or update the vault
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultCreateOrUpdateParameters,
    options?: VaultsCreateOrUpdateOptionalParams
  ): Promise<VaultsCreateOrUpdateResponse>;
  /**
   * Update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to patch the vault
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultPatchParameters,
    options?: VaultsUpdateOptionalParams
  ): Promise<VaultsUpdateResponse>;
  /**
   * Deletes the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault to delete
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultsGetOptionalParams
  ): Promise<VaultsGetResponse>;
  /**
   * Update access policies in a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param operationKind Name of the operation
   * @param parameters Access policy to merge into the vault
   * @param options The options parameters.
   */
  updateAccessPolicy(
    resourceGroupName: string,
    vaultName: string,
    operationKind: AccessPolicyUpdateKind,
    parameters: VaultAccessPolicyParameters,
    options?: VaultsUpdateAccessPolicyOptionalParams
  ): Promise<VaultsUpdateAccessPolicyResponse>;
  /**
   * Gets the deleted Azure key vault.
   * @param vaultName The name of the vault.
   * @param location The location of the deleted vault.
   * @param options The options parameters.
   */
  getDeleted(
    vaultName: string,
    location: string,
    options?: VaultsGetDeletedOptionalParams
  ): Promise<VaultsGetDeletedResponse>;
  /**
   * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
   * @param vaultName The name of the soft-deleted vault.
   * @param location The location of the soft-deleted vault.
   * @param options The options parameters.
   */
  beginPurgeDeleted(
    vaultName: string,
    location: string,
    options?: VaultsPurgeDeletedOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
   * @param vaultName The name of the soft-deleted vault.
   * @param location The location of the soft-deleted vault.
   * @param options The options parameters.
   */
  beginPurgeDeletedAndWait(
    vaultName: string,
    location: string,
    options?: VaultsPurgeDeletedOptionalParams
  ): Promise<void>;
  /**
   * Checks that the vault name is valid and is not already in use.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  checkNameAvailability(
    vaultName: VaultCheckNameAvailabilityParameters,
    options?: VaultsCheckNameAvailabilityOptionalParams
  ): Promise<VaultsCheckNameAvailabilityResponse>;
}
