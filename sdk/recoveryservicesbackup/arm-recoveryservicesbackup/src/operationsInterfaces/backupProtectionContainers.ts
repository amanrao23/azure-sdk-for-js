/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ProtectionContainerResource,
  BackupProtectionContainersListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupProtectionContainers. */
export interface BackupProtectionContainers {
  /**
   * Lists the containers registered to Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupProtectionContainersListOptionalParams,
  ): PagedAsyncIterableIterator<ProtectionContainerResource>;
}
