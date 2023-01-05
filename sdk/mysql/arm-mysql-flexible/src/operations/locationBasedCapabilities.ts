/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { LocationBasedCapabilities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementFlexibleServerClient } from "../mySQLManagementFlexibleServerClient";
import {
  CapabilityProperties,
  LocationBasedCapabilitiesListNextOptionalParams,
  LocationBasedCapabilitiesListOptionalParams,
  LocationBasedCapabilitiesListResponse,
  LocationBasedCapabilitiesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LocationBasedCapabilities operations. */
export class LocationBasedCapabilitiesImpl
  implements LocationBasedCapabilities {
  private readonly client: MySQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class LocationBasedCapabilities class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Get capabilities at specified location in a given subscription.
   * @param locationName The name of the location.
   * @param options The options parameters.
   */
  public list(
    locationName: string,
    options?: LocationBasedCapabilitiesListOptionalParams
  ): PagedAsyncIterableIterator<CapabilityProperties> {
    const iter = this.listPagingAll(locationName, options);
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
        return this.listPagingPage(locationName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    locationName: string,
    options?: LocationBasedCapabilitiesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CapabilityProperties[]> {
    let result: LocationBasedCapabilitiesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(locationName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(locationName, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    locationName: string,
    options?: LocationBasedCapabilitiesListOptionalParams
  ): AsyncIterableIterator<CapabilityProperties> {
    for await (const page of this.listPagingPage(locationName, options)) {
      yield* page;
    }
  }

  /**
   * Get capabilities at specified location in a given subscription.
   * @param locationName The name of the location.
   * @param options The options parameters.
   */
  private _list(
    locationName: string,
    options?: LocationBasedCapabilitiesListOptionalParams
  ): Promise<LocationBasedCapabilitiesListResponse> {
    return this.client.sendOperationRequest(
      { locationName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param locationName The name of the location.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    locationName: string,
    nextLink: string,
    options?: LocationBasedCapabilitiesListNextOptionalParams
  ): Promise<LocationBasedCapabilitiesListNextResponse> {
    return this.client.sendOperationRequest(
      { locationName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/capabilities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
