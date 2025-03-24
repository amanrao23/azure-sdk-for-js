/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DatabaseTable,
  DatabaseTablesListBySchemaOptionalParams,
  DatabaseTablesGetOptionalParams,
  DatabaseTablesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DatabaseTables. */
export interface DatabaseTables {
  /**
   * List database tables
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  listBySchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    options?: DatabaseTablesListBySchemaOptionalParams,
  ): PagedAsyncIterableIterator<DatabaseTable>;
  /**
   * Get database table
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: DatabaseTablesGetOptionalParams,
  ): Promise<DatabaseTablesGetResponse>;
}
