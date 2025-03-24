/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { QueryKeys } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SearchManagementClient } from "../searchManagementClient.js";
import {
  QueryKey,
  QueryKeysListBySearchServiceNextOptionalParams,
  QueryKeysListBySearchServiceOptionalParams,
  QueryKeysListBySearchServiceResponse,
  QueryKeysCreateOptionalParams,
  QueryKeysCreateResponse,
  QueryKeysDeleteOptionalParams,
  QueryKeysListBySearchServiceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing QueryKeys operations. */
export class QueryKeysImpl implements QueryKeys {
  private readonly client: SearchManagementClient;

  /**
   * Initialize a new instance of the class QueryKeys class.
   * @param client Reference to the service client
   */
  constructor(client: SearchManagementClient) {
    this.client = client;
  }

  /**
   * Returns the list of query API keys for the given Azure AI Search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure AI Search service associated with the specified
   *                          resource group.
   * @param options The options parameters.
   */
  public listBySearchService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: QueryKeysListBySearchServiceOptionalParams,
  ): PagedAsyncIterableIterator<QueryKey> {
    const iter = this.listBySearchServicePagingAll(
      resourceGroupName,
      searchServiceName,
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
        return this.listBySearchServicePagingPage(
          resourceGroupName,
          searchServiceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listBySearchServicePagingPage(
    resourceGroupName: string,
    searchServiceName: string,
    options?: QueryKeysListBySearchServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<QueryKey[]> {
    let result: QueryKeysListBySearchServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySearchService(
        resourceGroupName,
        searchServiceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySearchServiceNext(
        resourceGroupName,
        searchServiceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySearchServicePagingAll(
    resourceGroupName: string,
    searchServiceName: string,
    options?: QueryKeysListBySearchServiceOptionalParams,
  ): AsyncIterableIterator<QueryKey> {
    for await (const page of this.listBySearchServicePagingPage(
      resourceGroupName,
      searchServiceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Generates a new query key for the specified search service. You can create up to 50 query keys per
   * service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure AI Search service associated with the specified
   *                          resource group.
   * @param name The name of the new query API key.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    searchServiceName: string,
    name: string,
    options?: QueryKeysCreateOptionalParams,
  ): Promise<QueryKeysCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, name, options },
      createOperationSpec,
    );
  }

  /**
   * Returns the list of query API keys for the given Azure AI Search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure AI Search service associated with the specified
   *                          resource group.
   * @param options The options parameters.
   */
  private _listBySearchService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: QueryKeysListBySearchServiceOptionalParams,
  ): Promise<QueryKeysListBySearchServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, options },
      listBySearchServiceOperationSpec,
    );
  }

  /**
   * Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process for
   * regenerating a query key is to delete and then recreate it.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure AI Search service associated with the specified
   *                          resource group.
   * @param key The query key to be deleted. Query keys are identified by value, not by name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    searchServiceName: string,
    key: string,
    options?: QueryKeysDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, key, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListBySearchServiceNext
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure AI Search service associated with the specified
   *                          resource group.
   * @param nextLink The nextLink from the previous successful call to the ListBySearchService method.
   * @param options The options parameters.
   */
  private _listBySearchServiceNext(
    resourceGroupName: string,
    searchServiceName: string,
    nextLink: string,
    options?: QueryKeysListBySearchServiceNextOptionalParams,
  ): Promise<QueryKeysListBySearchServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, nextLink, options },
      listBySearchServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/createQueryKey/{name}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryKey,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer,
};
const listBySearchServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listQueryKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListQueryKeysResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/deleteQueryKey/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.key,
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer,
};
const listBySearchServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListQueryKeysResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer,
};
