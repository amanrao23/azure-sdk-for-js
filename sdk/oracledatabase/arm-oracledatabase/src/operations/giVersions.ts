/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { GiVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { OracleDatabaseManagementClient } from "../oracleDatabaseManagementClient.js";
import {
  GiVersion,
  GiVersionsListByLocationNextOptionalParams,
  GiVersionsListByLocationOptionalParams,
  GiVersionsListByLocationResponse,
  GiVersionsGetOptionalParams,
  GiVersionsGetResponse,
  GiVersionsListByLocationNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing GiVersions operations. */
export class GiVersionsImpl implements GiVersions {
  private readonly client: OracleDatabaseManagementClient;

  /**
   * Initialize a new instance of the class GiVersions class.
   * @param client Reference to the service client
   */
  constructor(client: OracleDatabaseManagementClient) {
    this.client = client;
  }

  /**
   * List GiVersion resources by Location
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
  ): PagedAsyncIterableIterator<GiVersion> {
    const iter = this.listByLocationPagingAll(location, options);
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
        return this.listByLocationPagingPage(location, options, settings);
      },
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<GiVersion[]> {
    let result: GiVersionsListByLocationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByLocation(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByLocationNext(
        location,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
  ): AsyncIterableIterator<GiVersion> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * List GiVersion resources by Location
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
  ): Promise<GiVersionsListByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listByLocationOperationSpec,
    );
  }

  /**
   * Get a GiVersion
   * @param location The name of the Azure region.
   * @param giversionname GiVersion name
   * @param options The options parameters.
   */
  get(
    location: string,
    giversionname: string,
    options?: GiVersionsGetOptionalParams,
  ): Promise<GiVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { location, giversionname, options },
      getOperationSpec,
    );
  }

  /**
   * ListByLocationNext
   * @param location The name of the Azure region.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    location: string,
    nextLink: string,
    options?: GiVersionsListByLocationNextOptionalParams,
  ): Promise<GiVersionsListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listByLocationNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GiVersionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions/{giversionname}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GiVersion,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.giversionname,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GiVersionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
