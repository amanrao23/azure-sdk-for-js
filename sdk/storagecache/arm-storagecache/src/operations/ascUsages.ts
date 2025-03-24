/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AscUsages } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageCacheManagementClient } from "../storageCacheManagementClient.js";
import {
  ResourceUsage,
  AscUsagesListNextOptionalParams,
  AscUsagesListOptionalParams,
  AscUsagesListResponse,
  AscUsagesListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AscUsages operations. */
export class AscUsagesImpl implements AscUsages {
  private readonly client: StorageCacheManagementClient;

  /**
   * Initialize a new instance of the class AscUsages class.
   * @param client Reference to the service client
   */
  constructor(client: StorageCacheManagementClient) {
    this.client = client;
  }

  /**
   * Gets the quantity used and quota limit for resources
   * @param location The name of the region to query for usage information.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: AscUsagesListOptionalParams,
  ): PagedAsyncIterableIterator<ResourceUsage> {
    const iter = this.listPagingAll(location, options);
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
        return this.listPagingPage(location, options, settings);
      },
    };
  }

  private async *listPagingPage(
    location: string,
    options?: AscUsagesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ResourceUsage[]> {
    let result: AscUsagesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    location: string,
    options?: AscUsagesListOptionalParams,
  ): AsyncIterableIterator<ResourceUsage> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets the quantity used and quota limit for resources
   * @param location The name of the region to query for usage information.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: AscUsagesListOptionalParams,
  ): Promise<AscUsagesListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param location The name of the region to query for usage information.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: AscUsagesListNextOptionalParams,
  ): Promise<AscUsagesListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceUsagesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceUsagesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
