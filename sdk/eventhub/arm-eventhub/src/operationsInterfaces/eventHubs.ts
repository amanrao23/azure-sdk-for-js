/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AuthorizationRule,
  EventHubsListAuthorizationRulesOptionalParams,
  Eventhub,
  EventHubsListByNamespaceOptionalParams,
  EventHubsCreateOrUpdateAuthorizationRuleOptionalParams,
  EventHubsCreateOrUpdateAuthorizationRuleResponse,
  EventHubsGetAuthorizationRuleOptionalParams,
  EventHubsGetAuthorizationRuleResponse,
  EventHubsDeleteAuthorizationRuleOptionalParams,
  EventHubsListKeysOptionalParams,
  EventHubsListKeysResponse,
  RegenerateAccessKeyParameters,
  EventHubsRegenerateKeysOptionalParams,
  EventHubsRegenerateKeysResponse,
  EventHubsCreateOrUpdateOptionalParams,
  EventHubsCreateOrUpdateResponse,
  EventHubsDeleteOptionalParams,
  EventHubsGetOptionalParams,
  EventHubsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EventHubs. */
export interface EventHubs {
  /**
   * Gets the authorization rules for an Event Hub.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param options The options parameters.
   */
  listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    options?: EventHubsListAuthorizationRulesOptionalParams,
  ): PagedAsyncIterableIterator<AuthorizationRule>;
  /**
   * Gets all the Event Hubs in a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: EventHubsListByNamespaceOptionalParams,
  ): PagedAsyncIterableIterator<Eventhub>;
  /**
   * Creates or updates an AuthorizationRule for the specified Event Hub. Creation/update of the
   * AuthorizationRule will take a few seconds to take effect.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The shared access AuthorizationRule.
   * @param options The options parameters.
   */
  createOrUpdateAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    authorizationRuleName: string,
    parameters: AuthorizationRule,
    options?: EventHubsCreateOrUpdateAuthorizationRuleOptionalParams,
  ): Promise<EventHubsCreateOrUpdateAuthorizationRuleResponse>;
  /**
   * Gets an AuthorizationRule for an Event Hub by rule name.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    authorizationRuleName: string,
    options?: EventHubsGetAuthorizationRuleOptionalParams,
  ): Promise<EventHubsGetAuthorizationRuleResponse>;
  /**
   * Deletes an Event Hub AuthorizationRule.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  deleteAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    authorizationRuleName: string,
    options?: EventHubsDeleteAuthorizationRuleOptionalParams,
  ): Promise<void>;
  /**
   * Gets the ACS and SAS connection strings for the Event Hub.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    authorizationRuleName: string,
    options?: EventHubsListKeysOptionalParams,
  ): Promise<EventHubsListKeysResponse>;
  /**
   * Regenerates the ACS and SAS connection strings for the Event Hub.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters supplied to regenerate the AuthorizationRule Keys
   *                   (PrimaryKey/SecondaryKey).
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    authorizationRuleName: string,
    parameters: RegenerateAccessKeyParameters,
    options?: EventHubsRegenerateKeysOptionalParams,
  ): Promise<EventHubsRegenerateKeysResponse>;
  /**
   * Creates or updates a new Event Hub as a nested resource within a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param parameters Parameters supplied to create an Event Hub resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    parameters: Eventhub,
    options?: EventHubsCreateOrUpdateOptionalParams,
  ): Promise<EventHubsCreateOrUpdateResponse>;
  /**
   * Deletes an Event Hub from the specified Namespace and resource group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    options?: EventHubsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets an Event Hubs description for the specified Event Hub.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    eventHubName: string,
    options?: EventHubsGetOptionalParams,
  ): Promise<EventHubsGetResponse>;
}
