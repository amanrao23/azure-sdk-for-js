/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ExtendedServerBlobAuditingPolicies } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SqlManagementClient } from "../sqlManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ExtendedServerBlobAuditingPolicy,
  ExtendedServerBlobAuditingPoliciesListByServerNextOptionalParams,
  ExtendedServerBlobAuditingPoliciesListByServerOptionalParams,
  ExtendedServerBlobAuditingPoliciesListByServerResponse,
  ExtendedServerBlobAuditingPoliciesGetOptionalParams,
  ExtendedServerBlobAuditingPoliciesGetResponse,
  ExtendedServerBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse,
  ExtendedServerBlobAuditingPoliciesListByServerNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ExtendedServerBlobAuditingPolicies operations. */
export class ExtendedServerBlobAuditingPoliciesImpl
  implements ExtendedServerBlobAuditingPolicies
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ExtendedServerBlobAuditingPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists extended auditing settings of a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ExtendedServerBlobAuditingPoliciesListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ExtendedServerBlobAuditingPolicy> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ExtendedServerBlobAuditingPoliciesListByServerOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExtendedServerBlobAuditingPolicy[]> {
    let result: ExtendedServerBlobAuditingPoliciesListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ExtendedServerBlobAuditingPoliciesListByServerOptionalParams,
  ): AsyncIterableIterator<ExtendedServerBlobAuditingPolicy> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists extended auditing settings of a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ExtendedServerBlobAuditingPoliciesListByServerOptionalParams,
  ): Promise<ExtendedServerBlobAuditingPoliciesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec,
    );
  }

  /**
   * Gets an extended server's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: ExtendedServerBlobAuditingPoliciesGetOptionalParams,
  ): Promise<ExtendedServerBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an extended server's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters Properties of extended blob auditing policy
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: ExtendedServerBlobAuditingPolicy,
    options?: ExtendedServerBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>,
      ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, serverName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse,
      OperationState<ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an extended server's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters Properties of extended blob auditing policy
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: ExtendedServerBlobAuditingPolicy,
    options?: ExtendedServerBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ): Promise<ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ExtendedServerBlobAuditingPoliciesListByServerNextOptionalParams,
  ): Promise<ExtendedServerBlobAuditingPoliciesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicyListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.blobAuditingPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy,
    },
    201: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy,
    },
    202: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy,
    },
    204: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy,
    },
    default: {},
  },
  requestBody: Parameters.parameters71,
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.blobAuditingPolicyName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicyListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
