/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { TenantActivityLogs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  EventData,
  TenantActivityLogsListNextOptionalParams,
  TenantActivityLogsListOptionalParams,
  TenantActivityLogsListResponse,
  TenantActivityLogsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TenantActivityLogs operations. */
export class TenantActivityLogsImpl implements TenantActivityLogs {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class TenantActivityLogs class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Gets the Activity Logs for the Tenant.<br>Everything that is applicable to the API to get the
   * Activity Logs for the subscription is applicable to this API (the parameters, $filter, etc.).<br>One
   * thing to point out here is that this API does *not* retrieve the logs at the individual subscription
   * of the tenant but only surfaces the logs that were generated at the tenant level.
   * @param options The options parameters.
   */
  public list(
    options?: TenantActivityLogsListOptionalParams,
  ): PagedAsyncIterableIterator<EventData> {
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
    options?: TenantActivityLogsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EventData[]> {
    let result: TenantActivityLogsListResponse;
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
    options?: TenantActivityLogsListOptionalParams,
  ): AsyncIterableIterator<EventData> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the Activity Logs for the Tenant.<br>Everything that is applicable to the API to get the
   * Activity Logs for the subscription is applicable to this API (the parameters, $filter, etc.).<br>One
   * thing to point out here is that this API does *not* retrieve the logs at the individual subscription
   * of the tenant but only surfaces the logs that were generated at the tenant level.
   * @param options The options parameters.
   */
  private _list(
    options?: TenantActivityLogsListOptionalParams,
  ): Promise<TenantActivityLogsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TenantActivityLogsListNextOptionalParams,
  ): Promise<TenantActivityLogsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Insights/eventtypes/management/values",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventDataCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion3,
    Parameters.select,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventDataCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
