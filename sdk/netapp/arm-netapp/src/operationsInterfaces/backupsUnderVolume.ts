/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  BackupsMigrationRequest,
  BackupsUnderVolumeMigrateBackupsOptionalParams,
  BackupsUnderVolumeMigrateBackupsResponse,
} from "../models/index.js";

/** Interface representing a BackupsUnderVolume. */
export interface BackupsUnderVolume {
  /**
   * Migrate the backups under volume to backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Migrate backups under volume payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginMigrateBackups(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: BackupsMigrationRequest,
    options?: BackupsUnderVolumeMigrateBackupsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupsUnderVolumeMigrateBackupsResponse>,
      BackupsUnderVolumeMigrateBackupsResponse
    >
  >;
  /**
   * Migrate the backups under volume to backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Migrate backups under volume payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginMigrateBackupsAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: BackupsMigrationRequest,
    options?: BackupsUnderVolumeMigrateBackupsOptionalParams,
  ): Promise<BackupsUnderVolumeMigrateBackupsResponse>;
}
