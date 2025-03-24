/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Locations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageImportExport } from "../storageImportExport.js";
import {
  Location,
  LocationsListOptionalParams,
  LocationsListResponse,
  LocationsGetOptionalParams,
  LocationsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: StorageImportExport;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: StorageImportExport) {
    this.client = client;
  }

  /**
   * Returns a list of locations to which you can ship the disks associated with an import or export job.
   * A location is a Microsoft data center region.
   * @param options The options parameters.
   */
  public list(
    options?: LocationsListOptionalParams
  ): PagedAsyncIterableIterator<Location> {
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
      }
    };
  }

  private async *listPagingPage(
    options?: LocationsListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<Location[]> {
    let result: LocationsListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: LocationsListOptionalParams
  ): AsyncIterableIterator<Location> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns a list of locations to which you can ship the disks associated with an import or export job.
   * A location is a Microsoft data center region.
   * @param options The options parameters.
   */
  private _list(
    options?: LocationsListOptionalParams
  ): Promise<LocationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Returns the details about a location to which you can ship the disks associated with an import or
   * export job. A location is an Azure region.
   * @param locationName The name of the location. For example, West US or westus.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    options?: LocationsGetOptionalParams
  ): Promise<LocationsGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.ImportExport/locations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.ImportExport/locations/{locationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Location
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.locationName],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
