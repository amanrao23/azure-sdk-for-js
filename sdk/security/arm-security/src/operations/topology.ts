/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Topology } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SecurityCenter } from "../securityCenter.js";
import {
  TopologyResource,
  TopologyListNextOptionalParams,
  TopologyListOptionalParams,
  TopologyListResponse,
  TopologyListByHomeRegionNextOptionalParams,
  TopologyListByHomeRegionOptionalParams,
  TopologyListByHomeRegionResponse,
  TopologyGetOptionalParams,
  TopologyGetResponse,
  TopologyListNextResponse,
  TopologyListByHomeRegionNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Topology operations. */
export class TopologyImpl implements Topology {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class Topology class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list that allows to build a topology view of a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: TopologyListOptionalParams,
  ): PagedAsyncIterableIterator<TopologyResource> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: TopologyListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TopologyResource[]> {
    let result: TopologyListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: TopologyListOptionalParams,
  ): AsyncIterableIterator<TopologyResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list that allows to build a topology view of a subscription and location.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  public listByHomeRegion(
    ascLocation: string,
    options?: TopologyListByHomeRegionOptionalParams,
  ): PagedAsyncIterableIterator<TopologyResource> {
    const iter = this.listByHomeRegionPagingAll(ascLocation, options);
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
        return this.listByHomeRegionPagingPage(ascLocation, options, settings);
      },
    };
  }

  private async *listByHomeRegionPagingPage(
    ascLocation: string,
    options?: TopologyListByHomeRegionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TopologyResource[]> {
    let result: TopologyListByHomeRegionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHomeRegion(ascLocation, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHomeRegionNext(
        ascLocation,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHomeRegionPagingAll(
    ascLocation: string,
    options?: TopologyListByHomeRegionOptionalParams,
  ): AsyncIterableIterator<TopologyResource> {
    for await (const page of this.listByHomeRegionPagingPage(
      ascLocation,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list that allows to build a topology view of a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: TopologyListOptionalParams,
  ): Promise<TopologyListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list that allows to build a topology view of a subscription and location.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  private _listByHomeRegion(
    ascLocation: string,
    options?: TopologyListByHomeRegionOptionalParams,
  ): Promise<TopologyListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, options },
      listByHomeRegionOperationSpec,
    );
  }

  /**
   * Gets a specific topology component.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param topologyResourceName Name of a topology resources collection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ascLocation: string,
    topologyResourceName: string,
    options?: TopologyGetOptionalParams,
  ): Promise<TopologyGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, topologyResourceName, options },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TopologyListNextOptionalParams,
  ): Promise<TopologyListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListByHomeRegionNext
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param nextLink The nextLink from the previous successful call to the ListByHomeRegion method.
   * @param options The options parameters.
   */
  private _listByHomeRegionNext(
    ascLocation: string,
    nextLink: string,
    options?: TopologyListByHomeRegionNextOptionalParams,
  ): Promise<TopologyListByHomeRegionNextResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, nextLink, options },
      listByHomeRegionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/topologies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHomeRegionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/topologies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/topologies/{topologyResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopologyResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
    Parameters.topologyResourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHomeRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopologyList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
