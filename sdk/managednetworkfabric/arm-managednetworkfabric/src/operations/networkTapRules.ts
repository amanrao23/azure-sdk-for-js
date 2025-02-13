/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { NetworkTapRules } from "../operationsInterfaces/index.js";
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
  NetworkTapRule,
  NetworkTapRulesListByResourceGroupNextOptionalParams,
  NetworkTapRulesListByResourceGroupOptionalParams,
  NetworkTapRulesListByResourceGroupResponse,
  NetworkTapRulesListBySubscriptionNextOptionalParams,
  NetworkTapRulesListBySubscriptionOptionalParams,
  NetworkTapRulesListBySubscriptionResponse,
  NetworkTapRulesCreateOptionalParams,
  NetworkTapRulesCreateResponse,
  NetworkTapRulesGetOptionalParams,
  NetworkTapRulesGetResponse,
  NetworkTapRulePatch,
  NetworkTapRulesUpdateOptionalParams,
  NetworkTapRulesUpdateResponse,
  NetworkTapRulesDeleteOptionalParams,
  NetworkTapRulesDeleteResponse,
  UpdateAdministrativeState,
  NetworkTapRulesUpdateAdministrativeStateOptionalParams,
  NetworkTapRulesUpdateAdministrativeStateResponse,
  NetworkTapRulesResyncOptionalParams,
  NetworkTapRulesResyncResponse,
  NetworkTapRulesValidateConfigurationOptionalParams,
  NetworkTapRulesValidateConfigurationResponse,
  NetworkTapRulesListByResourceGroupNextResponse,
  NetworkTapRulesListBySubscriptionNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkTapRules operations. */
export class NetworkTapRulesImpl implements NetworkTapRules {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class NetworkTapRules class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * List all the Network Tap Rule resources in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkTapRulesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkTapRule> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: NetworkTapRulesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkTapRule[]> {
    let result: NetworkTapRulesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: NetworkTapRulesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<NetworkTapRule> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the Network Tap Rule resources in the given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: NetworkTapRulesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkTapRule> {
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
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: NetworkTapRulesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkTapRule[]> {
    let result: NetworkTapRulesListBySubscriptionResponse;
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
    options?: NetworkTapRulesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<NetworkTapRule> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRule,
    options?: NetworkTapRulesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesCreateResponse>,
      NetworkTapRulesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkTapRulesCreateResponse> => {
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
      args: { resourceGroupName, networkTapRuleName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkTapRulesCreateResponse,
      OperationState<NetworkTapRulesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRule,
    options?: NetworkTapRulesCreateOptionalParams
  ): Promise<NetworkTapRulesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      networkTapRuleName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get Network Tap Rule resource details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesGetOptionalParams
  ): Promise<NetworkTapRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkTapRuleName, options },
      getOperationSpec
    );
  }

  /**
   * Update certain properties of the Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Network Tap Rule properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRulePatch,
    options?: NetworkTapRulesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesUpdateResponse>,
      NetworkTapRulesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkTapRulesUpdateResponse> => {
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
      args: { resourceGroupName, networkTapRuleName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkTapRulesUpdateResponse,
      OperationState<NetworkTapRulesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update certain properties of the Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Network Tap Rule properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRulePatch,
    options?: NetworkTapRulesUpdateOptionalParams
  ): Promise<NetworkTapRulesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      networkTapRuleName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesDeleteResponse>,
      NetworkTapRulesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkTapRulesDeleteResponse> => {
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
      args: { resourceGroupName, networkTapRuleName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkTapRulesDeleteResponse,
      OperationState<NetworkTapRulesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesDeleteOptionalParams
  ): Promise<NetworkTapRulesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkTapRuleName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the Network Tap Rule resources in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkTapRulesListByResourceGroupOptionalParams
  ): Promise<NetworkTapRulesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List all the Network Tap Rule resources in the given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: NetworkTapRulesListBySubscriptionOptionalParams
  ): Promise<NetworkTapRulesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeState(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: UpdateAdministrativeState,
    options?: NetworkTapRulesUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesUpdateAdministrativeStateResponse>,
      NetworkTapRulesUpdateAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkTapRulesUpdateAdministrativeStateResponse> => {
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
      args: { resourceGroupName, networkTapRuleName, body, options },
      spec: updateAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkTapRulesUpdateAdministrativeStateResponse,
      OperationState<NetworkTapRulesUpdateAdministrativeStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: UpdateAdministrativeState,
    options?: NetworkTapRulesUpdateAdministrativeStateOptionalParams
  ): Promise<NetworkTapRulesUpdateAdministrativeStateResponse> {
    const poller = await this.beginUpdateAdministrativeState(
      resourceGroupName,
      networkTapRuleName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  async beginResync(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesResyncOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesResyncResponse>,
      NetworkTapRulesResyncResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkTapRulesResyncResponse> => {
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
      args: { resourceGroupName, networkTapRuleName, options },
      spec: resyncOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkTapRulesResyncResponse,
      OperationState<NetworkTapRulesResyncResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  async beginResyncAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesResyncOptionalParams
  ): Promise<NetworkTapRulesResyncResponse> {
    const poller = await this.beginResync(
      resourceGroupName,
      networkTapRuleName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  async beginValidateConfiguration(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesValidateConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesValidateConfigurationResponse>,
      NetworkTapRulesValidateConfigurationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkTapRulesValidateConfigurationResponse> => {
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
      args: { resourceGroupName, networkTapRuleName, options },
      spec: validateConfigurationOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkTapRulesValidateConfigurationResponse,
      OperationState<NetworkTapRulesValidateConfigurationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  async beginValidateConfigurationAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesValidateConfigurationOptionalParams
  ): Promise<NetworkTapRulesValidateConfigurationResponse> {
    const poller = await this.beginValidateConfiguration(
      resourceGroupName,
      networkTapRuleName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: NetworkTapRulesListByResourceGroupNextOptionalParams
  ): Promise<NetworkTapRulesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: NetworkTapRulesListBySubscriptionNextOptionalParams
  ): Promise<NetworkTapRulesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRule
    },
    201: {
      bodyMapper: Mappers.NetworkTapRule
    },
    202: {
      bodyMapper: Mappers.NetworkTapRule
    },
    204: {
      bodyMapper: Mappers.NetworkTapRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body41,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRule
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
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRule
    },
    201: {
      bodyMapper: Mappers.NetworkTapRule
    },
    202: {
      bodyMapper: Mappers.NetworkTapRule
    },
    204: {
      bodyMapper: Mappers.NetworkTapRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body42,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.NetworkTapRulesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.NetworkTapRulesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.NetworkTapRulesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.NetworkTapRulesDeleteHeaders
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
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRulesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkTapRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRulesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/updateAdministrativeState",
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
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const resyncOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/resync",
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
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateConfigurationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/validateConfiguration",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    201: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    202: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    204: {
      bodyMapper: Mappers.ValidateConfigurationResponse
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
    Parameters.networkTapRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRulesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkTapRulesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
