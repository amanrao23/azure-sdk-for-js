/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { QueryTexts } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MySQLManagementClient } from "../mySQLManagementClient.js";
import {
  QueryText,
  QueryTextsListByServerNextOptionalParams,
  QueryTextsListByServerOptionalParams,
  QueryTextsListByServerResponse,
  QueryTextsGetOptionalParams,
  QueryTextsGetResponse,
  QueryTextsListByServerNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing QueryTexts operations. */
export class QueryTextsImpl implements QueryTexts {
  private readonly client: MySQLManagementClient;

  /**
   * Initialize a new instance of the class QueryTexts class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementClient) {
    this.client = client;
  }

  /**
   * Retrieve the Query-Store query texts for specified queryIds.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryIds The query identifiers
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    queryIds: string[],
    options?: QueryTextsListByServerOptionalParams
  ): PagedAsyncIterableIterator<QueryText> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      queryIds,
      options
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          queryIds,
          options,
          settings
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    queryIds: string[],
    options?: QueryTextsListByServerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<QueryText[]> {
    let result: QueryTextsListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(
        resourceGroupName,
        serverName,
        queryIds,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        queryIds,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    queryIds: string[],
    options?: QueryTextsListByServerOptionalParams
  ): AsyncIterableIterator<QueryText> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      queryIds,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve the Query-Store query texts for the queryId.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryId The Query-Store query identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    queryId: string,
    options?: QueryTextsGetOptionalParams
  ): Promise<QueryTextsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, queryId, options },
      getOperationSpec
    );
  }

  /**
   * Retrieve the Query-Store query texts for specified queryIds.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryIds The query identifiers
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    queryIds: string[],
    options?: QueryTextsListByServerOptionalParams
  ): Promise<QueryTextsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, queryIds, options },
      listByServerOperationSpec
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryIds The query identifiers
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    queryIds: string[],
    nextLink: string,
    options?: QueryTextsListByServerNextOptionalParams
  ): Promise<QueryTextsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, queryIds, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/queryTexts/{queryId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryText
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.queryId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/queryTexts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryTextsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2, Parameters.queryIds],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryTextsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2, Parameters.queryIds],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
