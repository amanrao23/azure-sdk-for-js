/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { SchemaRegistry } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { EventHubManagementClient } from "../eventHubManagementClient.js";
import {
  SchemaGroup,
  SchemaRegistryListByNamespaceNextOptionalParams,
  SchemaRegistryListByNamespaceOptionalParams,
  SchemaRegistryListByNamespaceResponse,
  SchemaRegistryCreateOrUpdateOptionalParams,
  SchemaRegistryCreateOrUpdateResponse,
  SchemaRegistryDeleteOptionalParams,
  SchemaRegistryGetOptionalParams,
  SchemaRegistryGetResponse,
  SchemaRegistryListByNamespaceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing SchemaRegistry operations. */
export class SchemaRegistryImpl implements SchemaRegistry {
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class SchemaRegistry class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the Schema Groups in a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  public listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams,
  ): PagedAsyncIterableIterator<SchemaGroup> {
    const iter = this.listByNamespacePagingAll(
      resourceGroupName,
      namespaceName,
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
        return this.listByNamespacePagingPage(
          resourceGroupName,
          namespaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByNamespacePagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SchemaGroup[]> {
    let result: SchemaRegistryListByNamespaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNamespace(
        resourceGroupName,
        namespaceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNamespaceNext(
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

  private async *listByNamespacePagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams,
  ): AsyncIterableIterator<SchemaGroup> {
    for await (const page of this.listByNamespacePagingPage(
      resourceGroupName,
      namespaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the Schema Groups in a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  private _listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams,
  ): Promise<SchemaRegistryListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listByNamespaceOperationSpec,
    );
  }

  /**
   * Creates or Updates an EventHub schema group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param schemaGroupName The Schema Group name
   * @param parameters Parameters supplied to create an Event Hub resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    schemaGroupName: string,
    parameters: SchemaGroup,
    options?: SchemaRegistryCreateOrUpdateOptionalParams,
  ): Promise<SchemaRegistryCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        schemaGroupName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes an EventHub schema group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param schemaGroupName The Schema Group name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    schemaGroupName: string,
    options?: SchemaRegistryDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, schemaGroupName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets the details of an EventHub schema group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param schemaGroupName The Schema Group name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    schemaGroupName: string,
    options?: SchemaRegistryGetOptionalParams,
  ): Promise<SchemaRegistryGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, schemaGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * ListByNamespaceNext
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param nextLink The nextLink from the previous successful call to the ListByNamespace method.
   * @param options The options parameters.
   */
  private _listByNamespaceNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: SchemaRegistryListByNamespaceNextOptionalParams,
  ): Promise<SchemaRegistryListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listByNamespaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNamespaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroupListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroup,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.schemaGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
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
    Parameters.schemaGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroup,
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
    Parameters.schemaGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByNamespaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroupListResult,
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
