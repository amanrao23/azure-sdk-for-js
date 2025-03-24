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
  BackupPolicy,
  BackupPoliciesListOptionalParams,
  BackupPoliciesGetOptionalParams,
  BackupPoliciesGetResponse,
  BackupPoliciesCreateOptionalParams,
  BackupPoliciesCreateResponse,
  BackupPolicyPatch,
  BackupPoliciesUpdateOptionalParams,
  BackupPoliciesUpdateResponse,
  BackupPoliciesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupPolicies. */
export interface BackupPolicies {
  /**
   * List backup policies for Netapp Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: BackupPoliciesListOptionalParams,
  ): PagedAsyncIterableIterator<BackupPolicy>;
  /**
   * Get a particular backup Policy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    options?: BackupPoliciesGetOptionalParams,
  ): Promise<BackupPoliciesGetResponse>;
  /**
   * Create a backup policy for Netapp Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    body: BackupPolicy,
    options?: BackupPoliciesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupPoliciesCreateResponse>,
      BackupPoliciesCreateResponse
    >
  >;
  /**
   * Create a backup policy for Netapp Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    body: BackupPolicy,
    options?: BackupPoliciesCreateOptionalParams,
  ): Promise<BackupPoliciesCreateResponse>;
  /**
   * Patch a backup policy for Netapp Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    body: BackupPolicyPatch,
    options?: BackupPoliciesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupPoliciesUpdateResponse>,
      BackupPoliciesUpdateResponse
    >
  >;
  /**
   * Patch a backup policy for Netapp Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    body: BackupPolicyPatch,
    options?: BackupPoliciesUpdateOptionalParams,
  ): Promise<BackupPoliciesUpdateResponse>;
  /**
   * Delete backup policy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    options?: BackupPoliciesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete backup policy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    backupPolicyName: string,
    options?: BackupPoliciesDeleteOptionalParams,
  ): Promise<void>;
}
