/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { LegacyPeerings } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PeeringManagementClient } from "../peeringManagementClient.js";
import {
  Peering,
  LegacyPeeringsKind,
  LegacyPeeringsListNextOptionalParams,
  LegacyPeeringsListOptionalParams,
  LegacyPeeringsListResponse,
  LegacyPeeringsListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing LegacyPeerings operations. */
export class LegacyPeeringsImpl implements LegacyPeerings {
  private readonly client: PeeringManagementClient;

  /**
   * Initialize a new instance of the class LegacyPeerings class.
   * @param client Reference to the service client
   */
  constructor(client: PeeringManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the legacy peerings under the given subscription matching the specified kind and
   * location.
   * @param peeringLocation The location of the peering.
   * @param kind The kind of the peering.
   * @param options The options parameters.
   */
  public list(
    peeringLocation: string,
    kind: LegacyPeeringsKind,
    options?: LegacyPeeringsListOptionalParams
  ): PagedAsyncIterableIterator<Peering> {
    const iter = this.listPagingAll(peeringLocation, kind, options);
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
        return this.listPagingPage(peeringLocation, kind, options, settings);
      }
    };
  }

  private async *listPagingPage(
    peeringLocation: string,
    kind: LegacyPeeringsKind,
    options?: LegacyPeeringsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Peering[]> {
    let result: LegacyPeeringsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(peeringLocation, kind, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        peeringLocation,
        kind,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    peeringLocation: string,
    kind: LegacyPeeringsKind,
    options?: LegacyPeeringsListOptionalParams
  ): AsyncIterableIterator<Peering> {
    for await (const page of this.listPagingPage(
      peeringLocation,
      kind,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the legacy peerings under the given subscription matching the specified kind and
   * location.
   * @param peeringLocation The location of the peering.
   * @param kind The kind of the peering.
   * @param options The options parameters.
   */
  private _list(
    peeringLocation: string,
    kind: LegacyPeeringsKind,
    options?: LegacyPeeringsListOptionalParams
  ): Promise<LegacyPeeringsListResponse> {
    return this.client.sendOperationRequest(
      { peeringLocation, kind, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param peeringLocation The location of the peering.
   * @param kind The kind of the peering.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    peeringLocation: string,
    kind: LegacyPeeringsKind,
    nextLink: string,
    options?: LegacyPeeringsListNextOptionalParams
  ): Promise<LegacyPeeringsListNextResponse> {
    return this.client.sendOperationRequest(
      { peeringLocation, kind, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/legacyPeerings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.peeringLocation,
    Parameters.apiVersion,
    Parameters.kind,
    Parameters.asn
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.peeringLocation,
    Parameters.apiVersion,
    Parameters.kind,
    Parameters.asn
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
