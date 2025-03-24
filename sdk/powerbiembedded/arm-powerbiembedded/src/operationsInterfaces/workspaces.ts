/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Workspace, WorkspacesListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Retrieves all existing Power BI workspaces in the specified workspace collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspacesListOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
}
