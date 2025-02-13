/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Key,
  KeysListOptionalParams,
  KeysListVersionsOptionalParams,
  KeyCreateParameters,
  KeysCreateIfNotExistOptionalParams,
  KeysCreateIfNotExistResponse,
  KeysGetOptionalParams,
  KeysGetResponse,
  KeysGetVersionOptionalParams,
  KeysGetVersionResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Keys. */
export interface Keys {
  /**
   * Lists the keys in the specified key vault.
   * @param resourceGroupName The name of the resource group which contains the specified key vault.
   * @param vaultName The name of the vault which contains the keys to be retrieved.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    options?: KeysListOptionalParams
  ): PagedAsyncIterableIterator<Key>;
  /**
   * Lists the versions of the specified key in the specified key vault.
   * @param resourceGroupName The name of the resource group which contains the specified key vault.
   * @param vaultName The name of the vault which contains the key versions to be retrieved.
   * @param keyName The name of the key versions to be retrieved.
   * @param options The options parameters.
   */
  listVersions(
    resourceGroupName: string,
    vaultName: string,
    keyName: string,
    options?: KeysListVersionsOptionalParams
  ): PagedAsyncIterableIterator<Key>;
  /**
   * Creates the first version of a new key if it does not exist. If it already exists, then the existing
   * key is returned without any write operations being performed. This API does not create subsequent
   * versions, and does not update existing keys.
   * @param resourceGroupName The name of the resource group which contains the specified key vault.
   * @param vaultName The name of the key vault which contains the key to be created.
   * @param keyName The name of the key to be created. The value you provide may be copied globally for
   *                the purpose of running the service. The value provided should not include personally identifiable or
   *                sensitive information.
   * @param parameters The parameters used to create the specified key.
   * @param options The options parameters.
   */
  createIfNotExist(
    resourceGroupName: string,
    vaultName: string,
    keyName: string,
    parameters: KeyCreateParameters,
    options?: KeysCreateIfNotExistOptionalParams
  ): Promise<KeysCreateIfNotExistResponse>;
  /**
   * Gets the current version of the specified key from the specified key vault.
   * @param resourceGroupName The name of the resource group which contains the specified key vault.
   * @param vaultName The name of the vault which contains the key to be retrieved.
   * @param keyName The name of the key to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    keyName: string,
    options?: KeysGetOptionalParams
  ): Promise<KeysGetResponse>;
  /**
   * Gets the specified version of the specified key in the specified key vault.
   * @param resourceGroupName The name of the resource group which contains the specified key vault.
   * @param vaultName The name of the vault which contains the key version to be retrieved.
   * @param keyName The name of the key version to be retrieved.
   * @param keyVersion The version of the key to be retrieved.
   * @param options The options parameters.
   */
  getVersion(
    resourceGroupName: string,
    vaultName: string,
    keyName: string,
    keyVersion: string,
    options?: KeysGetVersionOptionalParams
  ): Promise<KeysGetVersionResponse>;
}
