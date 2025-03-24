/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { DisasterRecoveryConfigs } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { EventHubManagementClient } from "../eventHubManagementClient.js";
import {
  AuthorizationRule,
  DisasterRecoveryConfigsListAuthorizationRulesNextOptionalParams,
  DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  DisasterRecoveryConfigsListAuthorizationRulesResponse,
  ArmDisasterRecovery,
  DisasterRecoveryConfigsListNextOptionalParams,
  DisasterRecoveryConfigsListOptionalParams,
  DisasterRecoveryConfigsListResponse,
  DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams,
  DisasterRecoveryConfigsGetAuthorizationRuleResponse,
  DisasterRecoveryConfigsListKeysOptionalParams,
  DisasterRecoveryConfigsListKeysResponse,
  CheckNameAvailabilityParameter,
  DisasterRecoveryConfigsCheckNameAvailabilityOptionalParams,
  DisasterRecoveryConfigsCheckNameAvailabilityResponse,
  DisasterRecoveryConfigsCreateOrUpdateOptionalParams,
  DisasterRecoveryConfigsCreateOrUpdateResponse,
  DisasterRecoveryConfigsDeleteOptionalParams,
  DisasterRecoveryConfigsGetOptionalParams,
  DisasterRecoveryConfigsGetResponse,
  DisasterRecoveryConfigsBreakPairingOptionalParams,
  DisasterRecoveryConfigsFailOverOptionalParams,
  DisasterRecoveryConfigsListAuthorizationRulesNextResponse,
  DisasterRecoveryConfigsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing DisasterRecoveryConfigs operations. */
export class DisasterRecoveryConfigsImpl implements DisasterRecoveryConfigs {
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class DisasterRecoveryConfigs class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  public listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  ): PagedAsyncIterableIterator<AuthorizationRule> {
    const iter = this.listAuthorizationRulesPagingAll(
      resourceGroupName,
      namespaceName,
      alias,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listAuthorizationRulesPagingPage(
          resourceGroupName,
          namespaceName,
          alias,
          options,
          settings,
        );
      },
    };
  }

  private async *listAuthorizationRulesPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AuthorizationRule[]> {
    let result: DisasterRecoveryConfigsListAuthorizationRulesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAuthorizationRules(
        resourceGroupName,
        namespaceName,
        alias,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAuthorizationRulesNext(
        resourceGroupName,
        namespaceName,
        alias,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAuthorizationRulesPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  ): AsyncIterableIterator<AuthorizationRule> {
    for await (const page of this.listAuthorizationRulesPagingPage(
      resourceGroupName,
      namespaceName,
      alias,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all Alias(Disaster Recovery configurations)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    namespaceName: string,
    options?: DisasterRecoveryConfigsListOptionalParams,
  ): PagedAsyncIterableIterator<ArmDisasterRecovery> {
    const iter = this.listPagingAll(resourceGroupName, namespaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          namespaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: DisasterRecoveryConfigsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ArmDisasterRecovery[]> {
    let result: DisasterRecoveryConfigsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, namespaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: DisasterRecoveryConfigsListOptionalParams,
  ): AsyncIterableIterator<ArmDisasterRecovery> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      namespaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  private _listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  ): Promise<DisasterRecoveryConfigsListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, options },
      listAuthorizationRulesOperationSpec,
    );
  }

  /**
   * Gets an AuthorizationRule for a Namespace by rule name.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams,
  ): Promise<DisasterRecoveryConfigsGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        authorizationRuleName,
        options,
      },
      getAuthorizationRuleOperationSpec,
    );
  }

  /**
   * Gets the primary and secondary connection strings for the Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsListKeysOptionalParams,
  ): Promise<DisasterRecoveryConfigsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        authorizationRuleName,
        options,
      },
      listKeysOperationSpec,
    );
  }

  /**
   * Check the give Namespace name availability.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param parameters Parameters to check availability of the given Alias name
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    namespaceName: string,
    parameters: CheckNameAvailabilityParameter,
    options?: DisasterRecoveryConfigsCheckNameAvailabilityOptionalParams,
  ): Promise<DisasterRecoveryConfigsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, parameters, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Gets all Alias(Disaster Recovery configurations)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    namespaceName: string,
    options?: DisasterRecoveryConfigsListOptionalParams,
  ): Promise<DisasterRecoveryConfigsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listOperationSpec,
    );
  }

  /**
   * Creates or updates a new Alias(Disaster Recovery configuration)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param parameters Parameters required to create an Alias(Disaster Recovery configuration)
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    parameters: ArmDisasterRecovery,
    options?: DisasterRecoveryConfigsCreateOrUpdateOptionalParams,
  ): Promise<DisasterRecoveryConfigsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes an Alias(Disaster Recovery configuration)
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, options },
      deleteOperationSpec,
    );
  }

  /**
   * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsGetOptionalParams,
  ): Promise<DisasterRecoveryConfigsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, options },
      getOperationSpec,
    );
  }

  /**
   * This operation disables the Disaster Recovery and stops replicating changes from primary to
   * secondary namespaces
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  breakPairing(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsBreakPairingOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, options },
      breakPairingOperationSpec,
    );
  }

  /**
   * Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  failOver(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsFailOverOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, options },
      failOverOperationSpec,
    );
  }

  /**
   * ListAuthorizationRulesNext
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param nextLink The nextLink from the previous successful call to the ListAuthorizationRules method.
   * @param options The options parameters.
   */
  private _listAuthorizationRulesNext(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    nextLink: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesNextOptionalParams,
  ): Promise<DisasterRecoveryConfigsListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, nextLink, options },
      listAuthorizationRulesNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: DisasterRecoveryConfigsListNextOptionalParams,
  ): Promise<DisasterRecoveryConfigsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAuthorizationRulesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRule,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecoveryListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecovery,
    },
    201: {
      bodyMapper: Mappers.ArmDisasterRecovery,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecovery,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const breakPairingOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/breakPairing",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const failOverOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/failover",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAuthorizationRulesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.namespaceName,
    Parameters.alias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArmDisasterRecoveryListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
