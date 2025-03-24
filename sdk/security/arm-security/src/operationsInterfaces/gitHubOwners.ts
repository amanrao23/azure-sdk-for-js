/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GitHubOwner,
  GitHubOwnersListOptionalParams,
  GitHubOwnersListAvailableOptionalParams,
  GitHubOwnersListAvailableResponse,
  GitHubOwnersGetOptionalParams,
  GitHubOwnersGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GitHubOwners. */
export interface GitHubOwners {
  /**
   * Returns a list of GitHub owners onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: GitHubOwnersListOptionalParams,
  ): PagedAsyncIterableIterator<GitHubOwner>;
  /**
   * Returns a list of all GitHub owners accessible by the user token consumed by the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  listAvailable(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: GitHubOwnersListAvailableOptionalParams,
  ): Promise<GitHubOwnersListAvailableResponse>;
  /**
   * Returns a monitored GitHub owner.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param ownerName The GitHub owner name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    ownerName: string,
    options?: GitHubOwnersGetOptionalParams,
  ): Promise<GitHubOwnersGetResponse>;
}
