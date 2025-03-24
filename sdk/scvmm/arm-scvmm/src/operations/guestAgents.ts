/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { GuestAgents } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ScVmm } from "../scVmm.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  GuestAgent,
  GuestAgentsListByVirtualMachineInstanceNextOptionalParams,
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
  GuestAgentsListByVirtualMachineInstanceResponse,
  GuestAgentsGetOptionalParams,
  GuestAgentsGetResponse,
  GuestAgentsCreateOptionalParams,
  GuestAgentsCreateResponse,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsListByVirtualMachineInstanceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing GuestAgents operations. */
export class GuestAgentsImpl implements GuestAgents {
  private readonly client: ScVmm;

  /**
   * Initialize a new instance of the class GuestAgents class.
   * @param client Reference to the service client
   */
  constructor(client: ScVmm) {
    this.client = client;
  }

  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  public listByVirtualMachineInstance(
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
  ): PagedAsyncIterableIterator<GuestAgent> {
    const iter = this.listByVirtualMachineInstancePagingAll(
      resourceUri,
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
        return this.listByVirtualMachineInstancePagingPage(
          resourceUri,
          options,
          settings,
        );
      },
    };
  }

  private async *listByVirtualMachineInstancePagingPage(
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<GuestAgent[]> {
    let result: GuestAgentsListByVirtualMachineInstanceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByVirtualMachineInstance(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByVirtualMachineInstanceNext(
        resourceUri,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByVirtualMachineInstancePagingAll(
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
  ): AsyncIterableIterator<GuestAgent> {
    for await (const page of this.listByVirtualMachineInstancePagingPage(
      resourceUri,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  private _listByVirtualMachineInstance(
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
  ): Promise<GuestAgentsListByVirtualMachineInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listByVirtualMachineInstanceOperationSpec,
    );
  }

  /**
   * Implements GuestAgent GET method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    options?: GuestAgentsGetOptionalParams,
  ): Promise<GuestAgentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      getOperationSpec,
    );
  }

  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceUri: string,
    resource: GuestAgent,
    options?: GuestAgentsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GuestAgentsCreateResponse>,
      GuestAgentsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GuestAgentsCreateResponse> => {
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
      args: { resourceUri, resource, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      GuestAgentsCreateResponse,
      OperationState<GuestAgentsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceUri: string,
    resource: GuestAgent,
    options?: GuestAgentsCreateOptionalParams,
  ): Promise<GuestAgentsCreateResponse> {
    const poller = await this.beginCreate(resourceUri, resource, options);
    return poller.pollUntilDone();
  }

  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    options?: GuestAgentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByVirtualMachineInstanceNext
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param nextLink The nextLink from the previous successful call to the ListByVirtualMachineInstance
   *                 method.
   * @param options The options parameters.
   */
  private _listByVirtualMachineInstanceNext(
    resourceUri: string,
    nextLink: string,
    options?: GuestAgentsListByVirtualMachineInstanceNextOptionalParams,
  ): Promise<GuestAgentsListByVirtualMachineInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listByVirtualMachineInstanceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByVirtualMachineInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgent,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgent,
    },
    201: {
      bodyMapper: Mappers.GuestAgent,
    },
    202: {
      bodyMapper: Mappers.GuestAgent,
    },
    204: {
      bodyMapper: Mappers.GuestAgent,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByVirtualMachineInstanceNextOperationSpec: coreClient.OperationSpec =
{
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
