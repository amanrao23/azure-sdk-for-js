/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Agents } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageMoverClient } from "../storageMoverClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Agent,
  AgentsListNextOptionalParams,
  AgentsListOptionalParams,
  AgentsListResponse,
  AgentsGetOptionalParams,
  AgentsGetResponse,
  AgentsCreateOrUpdateOptionalParams,
  AgentsCreateOrUpdateResponse,
  AgentUpdateParameters,
  AgentsUpdateOptionalParams,
  AgentsUpdateResponse,
  AgentsDeleteOptionalParams,
  AgentsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Agents operations. */
export class AgentsImpl implements Agents {
  private readonly client: StorageMoverClient;

  /**
   * Initialize a new instance of the class Agents class.
   * @param client Reference to the service client
   */
  constructor(client: StorageMoverClient) {
    this.client = client;
  }

  /**
   * Lists all Agents in a Storage Mover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    storageMoverName: string,
    options?: AgentsListOptionalParams,
  ): PagedAsyncIterableIterator<Agent> {
    const iter = this.listPagingAll(
      resourceGroupName,
      storageMoverName,
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
        return this.listPagingPage(
          resourceGroupName,
          storageMoverName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    storageMoverName: string,
    options?: AgentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Agent[]> {
    let result: AgentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, storageMoverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        storageMoverName,
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
    storageMoverName: string,
    options?: AgentsListOptionalParams,
  ): AsyncIterableIterator<Agent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      storageMoverName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all Agents in a Storage Mover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    storageMoverName: string,
    options?: AgentsListOptionalParams,
  ): Promise<AgentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageMoverName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets an Agent resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param agentName The name of the Agent resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageMoverName: string,
    agentName: string,
    options?: AgentsGetOptionalParams,
  ): Promise<AgentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageMoverName, agentName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param agentName The name of the Agent resource.
   * @param agent The Agent resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    storageMoverName: string,
    agentName: string,
    agent: Agent,
    options?: AgentsCreateOrUpdateOptionalParams,
  ): Promise<AgentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageMoverName, agentName, agent, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Creates or updates an Agent resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param agentName The name of the Agent resource.
   * @param agent The Agent resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    storageMoverName: string,
    agentName: string,
    agent: AgentUpdateParameters,
    options?: AgentsUpdateOptionalParams,
  ): Promise<AgentsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageMoverName, agentName, agent, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes an Agent resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param agentName The name of the Agent resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    storageMoverName: string,
    agentName: string,
    options?: AgentsDeleteOptionalParams,
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
      args: { resourceGroupName, storageMoverName, agentName, options },
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
   * Deletes an Agent resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param agentName The name of the Agent resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    storageMoverName: string,
    agentName: string,
    options?: AgentsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      storageMoverName,
      agentName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    storageMoverName: string,
    nextLink: string,
    options?: AgentsListNextOptionalParams,
  ): Promise<AgentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageMoverName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentList,
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
    Parameters.storageMoverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Agent,
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
    Parameters.storageMoverName,
    Parameters.agentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Agent,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.agent,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageMoverName,
    Parameters.agentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Agent,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.agent1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageMoverName,
    Parameters.agentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
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
    Parameters.storageMoverName,
    Parameters.agentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageMoverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
