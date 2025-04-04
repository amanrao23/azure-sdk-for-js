/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PacketCoreDataPlanes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MobileNetworkManagementClient } from "../mobileNetworkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  PacketCoreDataPlane,
  PacketCoreDataPlanesListByPacketCoreControlPlaneNextOptionalParams,
  PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams,
  PacketCoreDataPlanesListByPacketCoreControlPlaneResponse,
  PacketCoreDataPlanesDeleteOptionalParams,
  PacketCoreDataPlanesGetOptionalParams,
  PacketCoreDataPlanesGetResponse,
  PacketCoreDataPlanesCreateOrUpdateOptionalParams,
  PacketCoreDataPlanesCreateOrUpdateResponse,
  TagsObject,
  PacketCoreDataPlanesUpdateTagsOptionalParams,
  PacketCoreDataPlanesUpdateTagsResponse,
  PacketCoreDataPlanesListByPacketCoreControlPlaneNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PacketCoreDataPlanes operations. */
export class PacketCoreDataPlanesImpl implements PacketCoreDataPlanes {
  private readonly client: MobileNetworkManagementClient;

  /**
   * Initialize a new instance of the class PacketCoreDataPlanes class.
   * @param client Reference to the service client
   */
  constructor(client: MobileNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the packet core data planes associated with a packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  public listByPacketCoreControlPlane(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams,
  ): PagedAsyncIterableIterator<PacketCoreDataPlane> {
    const iter = this.listByPacketCoreControlPlanePagingAll(
      resourceGroupName,
      packetCoreControlPlaneName,
      options,
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
        return this.listByPacketCoreControlPlanePagingPage(
          resourceGroupName,
          packetCoreControlPlaneName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByPacketCoreControlPlanePagingPage(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PacketCoreDataPlane[]> {
    let result: PacketCoreDataPlanesListByPacketCoreControlPlaneResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByPacketCoreControlPlane(
        resourceGroupName,
        packetCoreControlPlaneName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByPacketCoreControlPlaneNext(
        resourceGroupName,
        packetCoreControlPlaneName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByPacketCoreControlPlanePagingAll(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams,
  ): AsyncIterableIterator<PacketCoreDataPlane> {
    for await (const page of this.listByPacketCoreControlPlanePagingPage(
      resourceGroupName,
      packetCoreControlPlaneName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified packet core data plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    options?: PacketCoreDataPlanesDeleteOptionalParams,
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
      args: {
        resourceGroupName,
        packetCoreControlPlaneName,
        packetCoreDataPlaneName,
        options,
      },
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
   * Deletes the specified packet core data plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    options?: PacketCoreDataPlanesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      packetCoreControlPlaneName,
      packetCoreDataPlaneName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified packet core data plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    options?: PacketCoreDataPlanesGetOptionalParams,
  ): Promise<PacketCoreDataPlanesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        packetCoreControlPlaneName,
        packetCoreDataPlaneName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a packet core data plane. Must be created in the same location as its parent
   * packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param parameters Parameters supplied to the create or update packet core data plane operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    parameters: PacketCoreDataPlane,
    options?: PacketCoreDataPlanesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PacketCoreDataPlanesCreateOrUpdateResponse>,
      PacketCoreDataPlanesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PacketCoreDataPlanesCreateOrUpdateResponse> => {
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
        packetCoreControlPlaneName,
        packetCoreDataPlaneName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      PacketCoreDataPlanesCreateOrUpdateResponse,
      OperationState<PacketCoreDataPlanesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a packet core data plane. Must be created in the same location as its parent
   * packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param parameters Parameters supplied to the create or update packet core data plane operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    parameters: PacketCoreDataPlane,
    options?: PacketCoreDataPlanesCreateOrUpdateOptionalParams,
  ): Promise<PacketCoreDataPlanesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      packetCoreControlPlaneName,
      packetCoreDataPlaneName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates packet core data planes tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param parameters Parameters supplied to update packet core data plane tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    parameters: TagsObject,
    options?: PacketCoreDataPlanesUpdateTagsOptionalParams,
  ): Promise<PacketCoreDataPlanesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        packetCoreControlPlaneName,
        packetCoreDataPlaneName,
        parameters,
        options,
      },
      updateTagsOperationSpec,
    );
  }

  /**
   * Lists all the packet core data planes associated with a packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  private _listByPacketCoreControlPlane(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams,
  ): Promise<PacketCoreDataPlanesListByPacketCoreControlPlaneResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, packetCoreControlPlaneName, options },
      listByPacketCoreControlPlaneOperationSpec,
    );
  }

  /**
   * ListByPacketCoreControlPlaneNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param nextLink The nextLink from the previous successful call to the ListByPacketCoreControlPlane
   *                 method.
   * @param options The options parameters.
   */
  private _listByPacketCoreControlPlaneNext(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    nextLink: string,
    options?: PacketCoreDataPlanesListByPacketCoreControlPlaneNextOptionalParams,
  ): Promise<PacketCoreDataPlanesListByPacketCoreControlPlaneNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, packetCoreControlPlaneName, nextLink, options },
      listByPacketCoreControlPlaneNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/{packetCoreControlPlaneName}/packetCoreDataPlanes/{packetCoreDataPlaneName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.packetCoreControlPlaneName,
    Parameters.packetCoreDataPlaneName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/{packetCoreControlPlaneName}/packetCoreDataPlanes/{packetCoreDataPlaneName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCoreDataPlane,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.packetCoreControlPlaneName,
    Parameters.packetCoreDataPlaneName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/{packetCoreControlPlaneName}/packetCoreDataPlanes/{packetCoreDataPlaneName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCoreDataPlane,
    },
    201: {
      bodyMapper: Mappers.PacketCoreDataPlane,
    },
    202: {
      bodyMapper: Mappers.PacketCoreDataPlane,
    },
    204: {
      bodyMapper: Mappers.PacketCoreDataPlane,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.packetCoreControlPlaneName,
    Parameters.packetCoreDataPlaneName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/{packetCoreControlPlaneName}/packetCoreDataPlanes/{packetCoreDataPlaneName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCoreDataPlane,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.packetCoreControlPlaneName,
    Parameters.packetCoreDataPlaneName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByPacketCoreControlPlaneOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/{packetCoreControlPlaneName}/packetCoreDataPlanes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCoreDataPlaneListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.packetCoreControlPlaneName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByPacketCoreControlPlaneNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.PacketCoreDataPlaneListResult,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.packetCoreControlPlaneName,
      Parameters.nextLink,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
