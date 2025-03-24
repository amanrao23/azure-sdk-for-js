/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ExpressRouteCrossConnections } from "../operationsInterfaces/index.js";
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
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionsListNextOptionalParams,
  ExpressRouteCrossConnectionsListOptionalParams,
  ExpressRouteCrossConnectionsListResponse,
  ExpressRouteCrossConnectionsListByResourceGroupNextOptionalParams,
  ExpressRouteCrossConnectionsListByResourceGroupOptionalParams,
  ExpressRouteCrossConnectionsListByResourceGroupResponse,
  ExpressRouteCrossConnectionsGetOptionalParams,
  ExpressRouteCrossConnectionsGetResponse,
  ExpressRouteCrossConnectionsCreateOrUpdateOptionalParams,
  ExpressRouteCrossConnectionsCreateOrUpdateResponse,
  TagsObject,
  ExpressRouteCrossConnectionsUpdateTagsOptionalParams,
  ExpressRouteCrossConnectionsUpdateTagsResponse,
  ExpressRouteCrossConnectionsListArpTableOptionalParams,
  ExpressRouteCrossConnectionsListArpTableResponse,
  ExpressRouteCrossConnectionsListRoutesTableSummaryOptionalParams,
  ExpressRouteCrossConnectionsListRoutesTableSummaryResponse,
  ExpressRouteCrossConnectionsListRoutesTableOptionalParams,
  ExpressRouteCrossConnectionsListRoutesTableResponse,
  ExpressRouteCrossConnectionsListNextResponse,
  ExpressRouteCrossConnectionsListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ExpressRouteCrossConnections operations. */
export class ExpressRouteCrossConnectionsImpl
  implements ExpressRouteCrossConnections
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ExpressRouteCrossConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ExpressRouteCrossConnectionsListOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRouteCrossConnection> {
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
    options?: ExpressRouteCrossConnectionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExpressRouteCrossConnection[]> {
    let result: ExpressRouteCrossConnectionsListResponse;
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
    options?: ExpressRouteCrossConnectionsListOptionalParams,
  ): AsyncIterableIterator<ExpressRouteCrossConnection> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ExpressRouteCrossConnectionsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRouteCrossConnection> {
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
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ExpressRouteCrossConnectionsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExpressRouteCrossConnection[]> {
    let result: ExpressRouteCrossConnectionsListByResourceGroupResponse;
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
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ExpressRouteCrossConnectionsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ExpressRouteCrossConnection> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ExpressRouteCrossConnectionsListOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ExpressRouteCrossConnectionsListByResourceGroupOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets details about the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group (peering location of the circuit).
   * @param crossConnectionName The name of the ExpressRouteCrossConnection (service key of the circuit).
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    crossConnectionName: string,
    options?: ExpressRouteCrossConnectionsGetOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, crossConnectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Update the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param parameters Parameters supplied to the update express route crossConnection operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    crossConnectionName: string,
    parameters: ExpressRouteCrossConnection,
    options?: ExpressRouteCrossConnectionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExpressRouteCrossConnectionsCreateOrUpdateResponse>,
      ExpressRouteCrossConnectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ExpressRouteCrossConnectionsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, crossConnectionName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ExpressRouteCrossConnectionsCreateOrUpdateResponse,
      OperationState<ExpressRouteCrossConnectionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param parameters Parameters supplied to the update express route crossConnection operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    crossConnectionName: string,
    parameters: ExpressRouteCrossConnection,
    options?: ExpressRouteCrossConnectionsCreateOrUpdateOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      crossConnectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an express route cross connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the cross connection.
   * @param crossConnectionParameters Parameters supplied to update express route cross connection tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    crossConnectionName: string,
    crossConnectionParameters: TagsObject,
    options?: ExpressRouteCrossConnectionsUpdateTagsOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        crossConnectionParameters,
        options,
      },
      updateTagsOperationSpec,
    );
  }

  /**
   * Gets the currently advertised ARP table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async beginListArpTable(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: ExpressRouteCrossConnectionsListArpTableOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExpressRouteCrossConnectionsListArpTableResponse>,
      ExpressRouteCrossConnectionsListArpTableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ExpressRouteCrossConnectionsListArpTableResponse> => {
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
      args: {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        devicePath,
        options,
      },
      spec: listArpTableOperationSpec,
    });
    const poller = await createHttpPoller<
      ExpressRouteCrossConnectionsListArpTableResponse,
      OperationState<ExpressRouteCrossConnectionsListArpTableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Gets the currently advertised ARP table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async beginListArpTableAndWait(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: ExpressRouteCrossConnectionsListArpTableOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListArpTableResponse> {
    const poller = await this.beginListArpTable(
      resourceGroupName,
      crossConnectionName,
      peeringName,
      devicePath,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the route table summary associated with the express route cross connection in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async beginListRoutesTableSummary(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: ExpressRouteCrossConnectionsListRoutesTableSummaryOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>,
      ExpressRouteCrossConnectionsListRoutesTableSummaryResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse> => {
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
      args: {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        devicePath,
        options,
      },
      spec: listRoutesTableSummaryOperationSpec,
    });
    const poller = await createHttpPoller<
      ExpressRouteCrossConnectionsListRoutesTableSummaryResponse,
      OperationState<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Gets the route table summary associated with the express route cross connection in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async beginListRoutesTableSummaryAndWait(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: ExpressRouteCrossConnectionsListRoutesTableSummaryOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse> {
    const poller = await this.beginListRoutesTableSummary(
      resourceGroupName,
      crossConnectionName,
      peeringName,
      devicePath,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the currently advertised routes table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async beginListRoutesTable(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: ExpressRouteCrossConnectionsListRoutesTableOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExpressRouteCrossConnectionsListRoutesTableResponse>,
      ExpressRouteCrossConnectionsListRoutesTableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ExpressRouteCrossConnectionsListRoutesTableResponse> => {
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
      args: {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        devicePath,
        options,
      },
      spec: listRoutesTableOperationSpec,
    });
    const poller = await createHttpPoller<
      ExpressRouteCrossConnectionsListRoutesTableResponse,
      OperationState<ExpressRouteCrossConnectionsListRoutesTableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Gets the currently advertised routes table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async beginListRoutesTableAndWait(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: ExpressRouteCrossConnectionsListRoutesTableOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListRoutesTableResponse> {
    const poller = await this.beginListRoutesTable(
      resourceGroupName,
      crossConnectionName,
      peeringName,
      devicePath,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ExpressRouteCrossConnectionsListNextOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ExpressRouteCrossConnectionsListByResourceGroupNextOptionalParams,
  ): Promise<ExpressRouteCrossConnectionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCrossConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.crossConnectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection,
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCrossConnection,
    },
    202: {
      bodyMapper: Mappers.ExpressRouteCrossConnection,
    },
    204: {
      bodyMapper: Mappers.ExpressRouteCrossConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.crossConnectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.crossConnectionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.crossConnectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listArpTableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/arpTables/{devicePath}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult,
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult,
    },
    202: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult,
    },
    204: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.devicePath,
    Parameters.crossConnectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listRoutesTableSummaryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTablesSummary/{devicePath}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult,
    },
    201: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult,
    },
    202: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult,
    },
    204: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.devicePath,
    Parameters.crossConnectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listRoutesTableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTables/{devicePath}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult,
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult,
    },
    202: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult,
    },
    204: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.devicePath,
    Parameters.crossConnectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
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
