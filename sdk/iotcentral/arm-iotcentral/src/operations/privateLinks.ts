/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateLinks } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { IotCentralClient } from "../iotCentralClient.js";
import {
  PrivateLinkResource,
  PrivateLinksListOptionalParams,
  PrivateLinksListResponse,
  PrivateLinksGetOptionalParams,
  PrivateLinksGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinks operations. */
export class PrivateLinksImpl implements PrivateLinks {
  private readonly client: IotCentralClient;

  /**
   * Initialize a new instance of the class PrivateLinks class.
   * @param client Reference to the service client
   */
  constructor(client: IotCentralClient) {
    this.client = client;
  }

  /**
   * Get all private link resources of a IoT Central Application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinksListOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
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
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinksListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result: PrivateLinksListResponse;
    result = await this._list(resourceGroupName, resourceName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinksListOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a private link resource of a IoT Central Application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param groupId The private link resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options?: PrivateLinksGetOptionalParams
  ): Promise<PrivateLinksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, groupId, options },
      getOperationSpec
    );
  }

  /**
   * Get all private link resources of a IoT Central Application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinksListOptionalParams
  ): Promise<PrivateLinksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps/{resourceName}/privateLinkResources/{groupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps/{resourceName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
