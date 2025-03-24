/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SqlPoolSecurityAlertPolicy,
  SqlPoolSecurityAlertPoliciesListOptionalParams,
  SecurityAlertPolicyName,
  SqlPoolSecurityAlertPoliciesGetOptionalParams,
  SqlPoolSecurityAlertPoliciesGetResponse,
  SqlPoolSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  SqlPoolSecurityAlertPoliciesCreateOrUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlPoolSecurityAlertPolicies. */
export interface SqlPoolSecurityAlertPolicies {
  /**
   * Get a list of Sql pool's security alert policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSecurityAlertPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<SqlPoolSecurityAlertPolicy>;
  /**
   * Get a Sql pool's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: SqlPoolSecurityAlertPoliciesGetOptionalParams
  ): Promise<SqlPoolSecurityAlertPoliciesGetResponse>;
  /**
   * Create or update a Sql pool's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The Sql pool security alert policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: SqlPoolSecurityAlertPolicy,
    options?: SqlPoolSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<SqlPoolSecurityAlertPoliciesCreateOrUpdateResponse>;
}
