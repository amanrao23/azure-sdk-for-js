/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ConfigurationAssignment,
  ConfigurationAssignmentsWithinSubscriptionListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConfigurationAssignmentsWithinSubscription. */
export interface ConfigurationAssignmentsWithinSubscription {
  /**
   * Get configuration assignment within a subscription
   * @param options The options parameters.
   */
  list(
    options?: ConfigurationAssignmentsWithinSubscriptionListOptionalParams,
  ): PagedAsyncIterableIterator<ConfigurationAssignment>;
}
