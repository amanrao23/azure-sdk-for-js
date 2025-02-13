/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Quotas } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMachineLearningServicesManagementClient } from "../azureMachineLearningServicesManagementClient.js";
import {
  ResourceQuota,
  QuotasListNextOptionalParams,
  QuotasListOptionalParams,
  QuotasListResponse,
  QuotaUpdateParameters,
  QuotasUpdateOptionalParams,
  QuotasUpdateResponse,
  QuotasListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Quotas operations. */
export class QuotasImpl implements Quotas {
  private readonly client: AzureMachineLearningServicesManagementClient;

  /**
   * Initialize a new instance of the class Quotas class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServicesManagementClient) {
    this.client = client;
  }

  /**
   * Gets the currently assigned Workspace Quotas based on VMFamily.
   * @param location The location for which resource usage is queried.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: QuotasListOptionalParams,
  ): PagedAsyncIterableIterator<ResourceQuota> {
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
    options?: QuotasListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ResourceQuota[]> {
    let result: QuotasListResponse;
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
    options?: QuotasListOptionalParams,
  ): AsyncIterableIterator<ResourceQuota> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Update quota for each VM family in workspace.
   * @param location The location for update quota is queried.
   * @param parameters Quota update parameters.
   * @param options The options parameters.
   */
  update(
    location: string,
    parameters: QuotaUpdateParameters,
    options?: QuotasUpdateOptionalParams,
  ): Promise<QuotasUpdateResponse> {
    return this.client.sendOperationRequest(
      { location, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Gets the currently assigned Workspace Quotas based on VMFamily.
   * @param location The location for which resource usage is queried.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: QuotasListOptionalParams,
  ): Promise<QuotasListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param location The location for which resource usage is queried.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: QuotasListNextOptionalParams,
  ): Promise<QuotasListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/updateQuotas",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateWorkspaceQuotasResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/quotas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListWorkspaceQuotas,
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
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListWorkspaceQuotas,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
