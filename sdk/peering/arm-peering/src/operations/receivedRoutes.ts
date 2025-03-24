/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ReceivedRoutes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PeeringManagementClient } from "../peeringManagementClient.js";
import {
  PeeringReceivedRoute,
  ReceivedRoutesListByPeeringNextOptionalParams,
  ReceivedRoutesListByPeeringOptionalParams,
  ReceivedRoutesListByPeeringResponse,
  ReceivedRoutesListByPeeringNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReceivedRoutes operations. */
export class ReceivedRoutesImpl implements ReceivedRoutes {
  private readonly client: PeeringManagementClient;

  /**
   * Initialize a new instance of the class ReceivedRoutes class.
   * @param client Reference to the service client
   */
  constructor(client: PeeringManagementClient) {
    this.client = client;
  }

  /**
   * Lists the prefixes received over the specified peering under the given subscription and resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  public listByPeering(
    resourceGroupName: string,
    peeringName: string,
    options?: ReceivedRoutesListByPeeringOptionalParams
  ): PagedAsyncIterableIterator<PeeringReceivedRoute> {
    const iter = this.listByPeeringPagingAll(
      resourceGroupName,
      peeringName,
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
        return this.listByPeeringPagingPage(
          resourceGroupName,
          peeringName,
          options,
          settings
        );
      }
    };
  }

  private async *listByPeeringPagingPage(
    resourceGroupName: string,
    peeringName: string,
    options?: ReceivedRoutesListByPeeringOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PeeringReceivedRoute[]> {
    let result: ReceivedRoutesListByPeeringResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByPeering(
        resourceGroupName,
        peeringName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByPeeringNext(
        resourceGroupName,
        peeringName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByPeeringPagingAll(
    resourceGroupName: string,
    peeringName: string,
    options?: ReceivedRoutesListByPeeringOptionalParams
  ): AsyncIterableIterator<PeeringReceivedRoute> {
    for await (const page of this.listByPeeringPagingPage(
      resourceGroupName,
      peeringName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the prefixes received over the specified peering under the given subscription and resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  private _listByPeering(
    resourceGroupName: string,
    peeringName: string,
    options?: ReceivedRoutesListByPeeringOptionalParams
  ): Promise<ReceivedRoutesListByPeeringResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, peeringName, options },
      listByPeeringOperationSpec
    );
  }

  /**
   * ListByPeeringNext
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param nextLink The nextLink from the previous successful call to the ListByPeering method.
   * @param options The options parameters.
   */
  private _listByPeeringNext(
    resourceGroupName: string,
    peeringName: string,
    nextLink: string,
    options?: ReceivedRoutesListByPeeringNextOptionalParams
  ): Promise<ReceivedRoutesListByPeeringNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, peeringName, nextLink, options },
      listByPeeringNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByPeeringOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/receivedRoutes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PeeringReceivedRouteListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.prefix,
    Parameters.asPath,
    Parameters.originAsValidationState,
    Parameters.rpkiValidationState,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.peeringName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPeeringNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PeeringReceivedRouteListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.prefix,
    Parameters.asPath,
    Parameters.originAsValidationState,
    Parameters.rpkiValidationState,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.peeringName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
