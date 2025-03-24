/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  BackupPolicy,
  BackupPoliciesListByDeviceOptionalParams,
  BackupPoliciesGetOptionalParams,
  BackupPoliciesGetResponse,
  BackupPoliciesCreateOrUpdateOptionalParams,
  BackupPoliciesCreateOrUpdateResponse,
  BackupPoliciesDeleteOptionalParams,
  BackupPoliciesBackupNowOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupPolicies. */
export interface BackupPolicies {
  /**
   * Gets all the backup policies in a device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: BackupPoliciesListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<BackupPolicy>;
  /**
   * Gets the properties of the specified backup policy name.
   * @param deviceName The device name
   * @param backupPolicyName The name of backup policy to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    backupPolicyName: string,
    resourceGroupName: string,
    managerName: string,
    options?: BackupPoliciesGetOptionalParams
  ): Promise<BackupPoliciesGetResponse>;
  /**
   * Creates or updates the backup policy.
   * @param deviceName The device name
   * @param backupPolicyName The name of the backup policy to be created/updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The backup policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    backupPolicyName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: BackupPolicy,
    options?: BackupPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupPoliciesCreateOrUpdateResponse>,
      BackupPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the backup policy.
   * @param deviceName The device name
   * @param backupPolicyName The name of the backup policy to be created/updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The backup policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    backupPolicyName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: BackupPolicy,
    options?: BackupPoliciesCreateOrUpdateOptionalParams
  ): Promise<BackupPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes the backup policy.
   * @param deviceName The device name
   * @param backupPolicyName The name of the backup policy.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    backupPolicyName: string,
    resourceGroupName: string,
    managerName: string,
    options?: BackupPoliciesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the backup policy.
   * @param deviceName The device name
   * @param backupPolicyName The name of the backup policy.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    backupPolicyName: string,
    resourceGroupName: string,
    managerName: string,
    options?: BackupPoliciesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Backup the backup policy now.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupType The backup Type. This can be cloudSnapshot or localSnapshot.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginBackupNow(
    deviceName: string,
    backupPolicyName: string,
    backupType: string,
    resourceGroupName: string,
    managerName: string,
    options?: BackupPoliciesBackupNowOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Backup the backup policy now.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupType The backup Type. This can be cloudSnapshot or localSnapshot.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginBackupNowAndWait(
    deviceName: string,
    backupPolicyName: string,
    backupType: string,
    resourceGroupName: string,
    managerName: string,
    options?: BackupPoliciesBackupNowOptionalParams
  ): Promise<void>;
}
