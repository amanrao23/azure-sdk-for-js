/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PrivateEndpoints } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  PrivateEndpoint,
  PrivateEndpointsListNextOptionalParams,
  PrivateEndpointsListOptionalParams,
  PrivateEndpointsListResponse,
  PrivateEndpointsListBySubscriptionNextOptionalParams,
  PrivateEndpointsListBySubscriptionOptionalParams,
  PrivateEndpointsListBySubscriptionResponse,
  PrivateEndpointsDeleteOptionalParams,
  PrivateEndpointsGetOptionalParams,
  PrivateEndpointsGetResponse,
  PrivateEndpointsCreateOrUpdateOptionalParams,
  PrivateEndpointsCreateOrUpdateResponse,
  PrivateEndpointsListNextResponse,
  PrivateEndpointsListBySubscriptionNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpoints operations. */
export class PrivateEndpointsImpl implements PrivateEndpoints {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all private endpoints in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: PrivateEndpointsListOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpoint> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: PrivateEndpointsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateEndpoint[]> {
    let result: PrivateEndpointsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: PrivateEndpointsListOptionalParams,
  ): AsyncIterableIterator<PrivateEndpoint> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets all private endpoints in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: PrivateEndpointsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpoint> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: PrivateEndpointsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateEndpoint[]> {
    let result: PrivateEndpointsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: PrivateEndpointsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<PrivateEndpoint> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes the specified private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateEndpointName: string,
    options?: PrivateEndpointsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateEndpointName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateEndpointName: string,
    options?: PrivateEndpointsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateEndpointName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified private endpoint by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateEndpointName: string,
    options?: PrivateEndpointsGetOptionalParams,
  ): Promise<PrivateEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateEndpointName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an private endpoint in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param parameters Parameters supplied to the create or update private endpoint operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateEndpointName: string,
    parameters: PrivateEndpoint,
    options?: PrivateEndpointsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointsCreateOrUpdateResponse>,
      PrivateEndpointsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PrivateEndpointsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateEndpointName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      PrivateEndpointsCreateOrUpdateResponse,
      OperationState<PrivateEndpointsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an private endpoint in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param parameters Parameters supplied to the create or update private endpoint operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateEndpointName: string,
    parameters: PrivateEndpoint,
    options?: PrivateEndpointsCreateOrUpdateOptionalParams,
  ): Promise<PrivateEndpointsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateEndpointName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all private endpoints in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: PrivateEndpointsListOptionalParams,
  ): Promise<PrivateEndpointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets all private endpoints in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: PrivateEndpointsListBySubscriptionOptionalParams,
  ): Promise<PrivateEndpointsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PrivateEndpointsListNextOptionalParams,
  ): Promise<PrivateEndpointsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: PrivateEndpointsListBySubscriptionNextOptionalParams,
  ): Promise<PrivateEndpointsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    201: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    202: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    204: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.parameters63,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/privateEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
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
