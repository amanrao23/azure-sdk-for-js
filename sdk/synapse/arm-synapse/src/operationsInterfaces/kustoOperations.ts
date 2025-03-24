/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operation, KustoOperationsListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KustoOperations. */
export interface KustoOperations {
  /**
   * Lists available operations for the Kusto sub-resources inside Microsoft.Synapse provider.
   * @param options The options parameters.
   */
  list(
    options?: KustoOperationsListOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
}
