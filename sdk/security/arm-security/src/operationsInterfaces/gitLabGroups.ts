/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GitLabGroup,
  GitLabGroupsListOptionalParams,
  GitLabGroupsListAvailableOptionalParams,
  GitLabGroupsListAvailableResponse,
  GitLabGroupsGetOptionalParams,
  GitLabGroupsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GitLabGroups. */
export interface GitLabGroups {
  /**
   * Returns a list of GitLab groups onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: GitLabGroupsListOptionalParams,
  ): PagedAsyncIterableIterator<GitLabGroup>;
  /**
   * Returns a list of all GitLab groups accessible by the user token consumed by the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  listAvailable(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: GitLabGroupsListAvailableOptionalParams,
  ): Promise<GitLabGroupsListAvailableResponse>;
  /**
   * Returns a monitored GitLab Group resource for a given fully-qualified name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabGroupsGetOptionalParams,
  ): Promise<GitLabGroupsGetResponse>;
}
