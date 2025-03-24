/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ManagedDatabaseQueries } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SqlManagementClient } from "../sqlManagementClient.js";
import {
  QueryStatistics,
  ManagedDatabaseQueriesListByQueryNextOptionalParams,
  ManagedDatabaseQueriesListByQueryOptionalParams,
  ManagedDatabaseQueriesListByQueryResponse,
  ManagedDatabaseQueriesGetOptionalParams,
  ManagedDatabaseQueriesGetResponse,
  ManagedDatabaseQueriesListByQueryNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedDatabaseQueries operations. */
export class ManagedDatabaseQueriesImpl implements ManagedDatabaseQueries {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseQueries class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Get query execution statistics by query id.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param queryId
   * @param options The options parameters.
   */
  public listByQuery(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    queryId: string,
    options?: ManagedDatabaseQueriesListByQueryOptionalParams,
  ): PagedAsyncIterableIterator<QueryStatistics> {
    const iter = this.listByQueryPagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      queryId,
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
        return this.listByQueryPagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          queryId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByQueryPagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    queryId: string,
    options?: ManagedDatabaseQueriesListByQueryOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<QueryStatistics[]> {
    let result: ManagedDatabaseQueriesListByQueryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByQuery(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        queryId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByQueryNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        queryId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByQueryPagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    queryId: string,
    options?: ManagedDatabaseQueriesListByQueryOptionalParams,
  ): AsyncIterableIterator<QueryStatistics> {
    for await (const page of this.listByQueryPagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      queryId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get query by query id.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param queryId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    queryId: string,
    options?: ManagedDatabaseQueriesGetOptionalParams,
  ): Promise<ManagedDatabaseQueriesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        queryId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Get query execution statistics by query id.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param queryId
   * @param options The options parameters.
   */
  private _listByQuery(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    queryId: string,
    options?: ManagedDatabaseQueriesListByQueryOptionalParams,
  ): Promise<ManagedDatabaseQueriesListByQueryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        queryId,
        options,
      },
      listByQueryOperationSpec,
    );
  }

  /**
   * ListByQueryNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param queryId
   * @param nextLink The nextLink from the previous successful call to the ListByQuery method.
   * @param options The options parameters.
   */
  private _listByQueryNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    queryId: string,
    nextLink: string,
    options?: ManagedDatabaseQueriesListByQueryNextOptionalParams,
  ): Promise<ManagedDatabaseQueriesListByQueryNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        queryId,
        nextLink,
        options,
      },
      listByQueryNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/queries/{queryId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceQuery,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.queryId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByQueryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/queries/{queryId}/statistics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceQueryStatistics,
    },
    default: {},
  },
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.interval,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.queryId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByQueryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceQueryStatistics,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.managedInstanceName,
    Parameters.queryId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
