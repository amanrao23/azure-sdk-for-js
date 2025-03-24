/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  HealthReport,
  HealthReportsListOptionalParams,
  HealthReportsGetOptionalParams,
  HealthReportsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a HealthReports. */
export interface HealthReports {
  /**
   * Get a list of all health reports inside a scope. Valid scopes are: subscription (format:
   * 'subscriptions/{subscriptionId}'), or security connector (format:
   * 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param scope The scope at which the operation is performed.
   * @param options The options parameters.
   */
  list(
    scope: string,
    options?: HealthReportsListOptionalParams,
  ): PagedAsyncIterableIterator<HealthReport>;
  /**
   * Get health report of resource
   * @param resourceId The identifier of the resource.
   * @param healthReportName The health report Key - Unique key for the health report type
   * @param options The options parameters.
   */
  get(
    resourceId: string,
    healthReportName: string,
    options?: HealthReportsGetOptionalParams,
  ): Promise<HealthReportsGetResponse>;
}
