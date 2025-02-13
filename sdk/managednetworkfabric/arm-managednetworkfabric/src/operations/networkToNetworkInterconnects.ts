/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { NetworkToNetworkInterconnects } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  NetworkToNetworkInterconnect,
  NetworkToNetworkInterconnectsListByNetworkFabricNextOptionalParams,
  NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams,
  NetworkToNetworkInterconnectsListByNetworkFabricResponse,
  NetworkToNetworkInterconnectsCreateOptionalParams,
  NetworkToNetworkInterconnectsCreateResponse,
  NetworkToNetworkInterconnectsGetOptionalParams,
  NetworkToNetworkInterconnectsGetResponse,
  NetworkToNetworkInterconnectPatch,
  NetworkToNetworkInterconnectsUpdateOptionalParams,
  NetworkToNetworkInterconnectsUpdateResponse,
  NetworkToNetworkInterconnectsDeleteOptionalParams,
  UpdateAdministrativeState,
  NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOptionalParams,
  NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse,
  NetworkToNetworkInterconnectsUpdateAdministrativeStateOptionalParams,
  NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse,
  NetworkToNetworkInterconnectsListByNetworkFabricNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkToNetworkInterconnects operations. */
export class NetworkToNetworkInterconnectsImpl
  implements NetworkToNetworkInterconnects {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class NetworkToNetworkInterconnects class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Implements Network To Network Interconnects list by Network Fabric GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param options The options parameters.
   */
  public listByNetworkFabric(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams
  ): PagedAsyncIterableIterator<NetworkToNetworkInterconnect> {
    const iter = this.listByNetworkFabricPagingAll(
      resourceGroupName,
      networkFabricName,
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
        return this.listByNetworkFabricPagingPage(
          resourceGroupName,
          networkFabricName,
          options,
          settings
        );
      }
    };
  }

  private async *listByNetworkFabricPagingPage(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkToNetworkInterconnect[]> {
    let result: NetworkToNetworkInterconnectsListByNetworkFabricResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNetworkFabric(
        resourceGroupName,
        networkFabricName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNetworkFabricNext(
        resourceGroupName,
        networkFabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNetworkFabricPagingAll(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams
  ): AsyncIterableIterator<NetworkToNetworkInterconnect> {
    for await (const page of this.listByNetworkFabricPagingPage(
      resourceGroupName,
      networkFabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Configuration used to setup CE-PE connectivity PUT Method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnect,
    options?: NetworkToNetworkInterconnectsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkToNetworkInterconnectsCreateResponse>,
      NetworkToNetworkInterconnectsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkToNetworkInterconnectsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkFabricName,
        networkToNetworkInterconnectName,
        body,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkToNetworkInterconnectsCreateResponse,
      OperationState<NetworkToNetworkInterconnectsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Configuration used to setup CE-PE connectivity PUT Method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnect,
    options?: NetworkToNetworkInterconnectsCreateOptionalParams
  ): Promise<NetworkToNetworkInterconnectsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      networkFabricName,
      networkToNetworkInterconnectName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements NetworkToNetworkInterconnects GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    options?: NetworkToNetworkInterconnectsGetOptionalParams
  ): Promise<NetworkToNetworkInterconnectsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkFabricName,
        networkToNetworkInterconnectName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Update certain properties of the Network To NetworkInterconnects resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Network to Network Interconnect properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnectPatch,
    options?: NetworkToNetworkInterconnectsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkToNetworkInterconnectsUpdateResponse>,
      NetworkToNetworkInterconnectsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkToNetworkInterconnectsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkFabricName,
        networkToNetworkInterconnectName,
        body,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkToNetworkInterconnectsUpdateResponse,
      OperationState<NetworkToNetworkInterconnectsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update certain properties of the Network To NetworkInterconnects resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Network to Network Interconnect properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnectPatch,
    options?: NetworkToNetworkInterconnectsUpdateOptionalParams
  ): Promise<NetworkToNetworkInterconnectsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      networkFabricName,
      networkToNetworkInterconnectName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements NetworkToNetworkInterconnects DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    options?: NetworkToNetworkInterconnectsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkFabricName,
        networkToNetworkInterconnectName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements NetworkToNetworkInterconnects DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    options?: NetworkToNetworkInterconnectsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkFabricName,
      networkToNetworkInterconnectName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements Network To Network Interconnects list by Network Fabric GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param options The options parameters.
   */
  private _listByNetworkFabric(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams
  ): Promise<NetworkToNetworkInterconnectsListByNetworkFabricResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkFabricName, options },
      listByNetworkFabricOperationSpec
    );
  }

  /**
   * Updates the NPB Static Route BFD Administrative State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateNpbStaticRouteBfdAdministrativeState(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
      >,
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkFabricName,
        networkToNetworkInterconnectName,
        body,
        options
      },
      spec: updateNpbStaticRouteBfdAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse,
      OperationState<
        NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the NPB Static Route BFD Administrative State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateNpbStaticRouteBfdAdministrativeStateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOptionalParams
  ): Promise<
    NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
  > {
    const poller = await this.beginUpdateNpbStaticRouteBfdAdministrativeState(
      resourceGroupName,
      networkFabricName,
      networkToNetworkInterconnectName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the Admin State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeState(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse
      >,
      NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkFabricName,
        networkToNetworkInterconnectName,
        body,
        options
      },
      spec: updateAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse,
      OperationState<
        NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the Admin State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateAdministrativeStateOptionalParams
  ): Promise<NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse> {
    const poller = await this.beginUpdateAdministrativeState(
      resourceGroupName,
      networkFabricName,
      networkToNetworkInterconnectName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByNetworkFabricNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param nextLink The nextLink from the previous successful call to the ListByNetworkFabric method.
   * @param options The options parameters.
   */
  private _listByNetworkFabricNext(
    resourceGroupName: string,
    networkFabricName: string,
    nextLink: string,
    options?: NetworkToNetworkInterconnectsListByNetworkFabricNextOptionalParams
  ): Promise<NetworkToNetworkInterconnectsListByNetworkFabricNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkFabricName, nextLink, options },
      listByNetworkFabricNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    201: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    202: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    204: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body35,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName,
    Parameters.networkToNetworkInterconnectName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
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
    Parameters.networkFabricName,
    Parameters.networkToNetworkInterconnectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    201: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    202: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    204: {
      bodyMapper: Mappers.NetworkToNetworkInterconnect
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body36,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName,
    Parameters.networkToNetworkInterconnectName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName,
    Parameters.networkToNetworkInterconnectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNetworkFabricOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkToNetworkInterconnectsList
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
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateNpbStaticRouteBfdAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateNpbStaticRouteBfdAdministrativeState",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName,
    Parameters.networkToNetworkInterconnectName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateAdministrativeState",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkFabricName,
    Parameters.networkToNetworkInterconnectName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByNetworkFabricNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkToNetworkInterconnectsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.networkFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
