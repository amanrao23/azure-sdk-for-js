/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AgentPoolOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HybridContainerServiceClient } from "../hybridContainerServiceClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  AgentPool,
  AgentPoolListByProvisionedClusterNextOptionalParams,
  AgentPoolListByProvisionedClusterOptionalParams,
  AgentPoolListByProvisionedClusterResponse,
  AgentPoolGetOptionalParams,
  AgentPoolGetResponse,
  AgentPoolCreateOrUpdateOptionalParams,
  AgentPoolCreateOrUpdateResponse,
  AgentPoolDeleteOptionalParams,
  AgentPoolDeleteResponse,
  AgentPoolListByProvisionedClusterNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AgentPoolOperations operations. */
export class AgentPoolOperationsImpl implements AgentPoolOperations {
  private readonly client: HybridContainerServiceClient;

  /**
   * Initialize a new instance of the class AgentPoolOperations class.
   * @param client Reference to the service client
   */
  constructor(client: HybridContainerServiceClient) {
    this.client = client;
  }

  /**
   * Gets the list of agent pools in the specified provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  public listByProvisionedCluster(
    connectedClusterResourceUri: string,
    options?: AgentPoolListByProvisionedClusterOptionalParams
  ): PagedAsyncIterableIterator<AgentPool> {
    const iter = this.listByProvisionedClusterPagingAll(
      connectedClusterResourceUri,
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
        return this.listByProvisionedClusterPagingPage(
          connectedClusterResourceUri,
          options,
          settings
        );
      }
    };
  }

  private async *listByProvisionedClusterPagingPage(
    connectedClusterResourceUri: string,
    options?: AgentPoolListByProvisionedClusterOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AgentPool[]> {
    let result: AgentPoolListByProvisionedClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProvisionedCluster(
        connectedClusterResourceUri,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProvisionedClusterNext(
        connectedClusterResourceUri,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProvisionedClusterPagingAll(
    connectedClusterResourceUri: string,
    options?: AgentPoolListByProvisionedClusterOptionalParams
  ): AsyncIterableIterator<AgentPool> {
    for await (const page of this.listByProvisionedClusterPagingPage(
      connectedClusterResourceUri,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the specified agent pool in the provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster.
   * @param options The options parameters.
   */
  get(
    connectedClusterResourceUri: string,
    agentPoolName: string,
    options?: AgentPoolGetOptionalParams
  ): Promise<AgentPoolGetResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, agentPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the agent pool in the provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster.
   * @param agentPool Agent Pool resource definition
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    connectedClusterResourceUri: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolCreateOrUpdateResponse>,
      AgentPoolCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AgentPoolCreateOrUpdateResponse> => {
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
      args: { connectedClusterResourceUri, agentPoolName, agentPool, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      AgentPoolCreateOrUpdateResponse,
      OperationState<AgentPoolCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates the agent pool in the provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster.
   * @param agentPool Agent Pool resource definition
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    connectedClusterResourceUri: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolCreateOrUpdateOptionalParams
  ): Promise<AgentPoolCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      connectedClusterResourceUri,
      agentPoolName,
      agentPool,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified agent pool in the provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster.
   * @param options The options parameters.
   */
  async beginDelete(
    connectedClusterResourceUri: string,
    agentPoolName: string,
    options?: AgentPoolDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolDeleteResponse>,
      AgentPoolDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AgentPoolDeleteResponse> => {
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
      args: { connectedClusterResourceUri, agentPoolName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      AgentPoolDeleteResponse,
      OperationState<AgentPoolDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified agent pool in the provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    connectedClusterResourceUri: string,
    agentPoolName: string,
    options?: AgentPoolDeleteOptionalParams
  ): Promise<AgentPoolDeleteResponse> {
    const poller = await this.beginDelete(
      connectedClusterResourceUri,
      agentPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of agent pools in the specified provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  private _listByProvisionedCluster(
    connectedClusterResourceUri: string,
    options?: AgentPoolListByProvisionedClusterOptionalParams
  ): Promise<AgentPoolListByProvisionedClusterResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, options },
      listByProvisionedClusterOperationSpec
    );
  }

  /**
   * ListByProvisionedClusterNext
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param nextLink The nextLink from the previous successful call to the ListByProvisionedCluster
   *                 method.
   * @param options The options parameters.
   */
  private _listByProvisionedClusterNext(
    connectedClusterResourceUri: string,
    nextLink: string,
    options?: AgentPoolListByProvisionedClusterNextOptionalParams
  ): Promise<AgentPoolListByProvisionedClusterNextResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, nextLink, options },
      listByProvisionedClusterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.connectedClusterResourceUri,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    202: {
      bodyMapper: Mappers.AgentPool
    },
    204: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.agentPool,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.connectedClusterResourceUri,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.AgentPoolDeleteHeaders
    },
    201: {
      headersMapper: Mappers.AgentPoolDeleteHeaders
    },
    202: {
      headersMapper: Mappers.AgentPoolDeleteHeaders
    },
    204: {
      headersMapper: Mappers.AgentPoolDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.connectedClusterResourceUri,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProvisionedClusterOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProvisionedClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.connectedClusterResourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
