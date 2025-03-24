/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RestorableDroppedManagedDatabase,
  RestorableDroppedManagedDatabasesListByInstanceOptionalParams,
  RestorableDroppedManagedDatabasesGetOptionalParams,
  RestorableDroppedManagedDatabasesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorableDroppedManagedDatabases. */
export interface RestorableDroppedManagedDatabases {
  /**
   * Gets a list of restorable dropped managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: RestorableDroppedManagedDatabasesListByInstanceOptionalParams,
  ): PagedAsyncIterableIterator<RestorableDroppedManagedDatabase>;
  /**
   * Gets a restorable dropped managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    options?: RestorableDroppedManagedDatabasesGetOptionalParams,
  ): Promise<RestorableDroppedManagedDatabasesGetResponse>;
}
