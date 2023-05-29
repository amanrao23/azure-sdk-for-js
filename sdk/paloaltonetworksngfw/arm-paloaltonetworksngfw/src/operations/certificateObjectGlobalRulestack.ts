/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CertificateObjectGlobalRulestack } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PaloAltoNetworksCloudngfw } from "../paloAltoNetworksCloudngfw";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  CertificateObjectGlobalRulestackResource,
  CertificateObjectGlobalRulestackListNextOptionalParams,
  CertificateObjectGlobalRulestackListOptionalParams,
  CertificateObjectGlobalRulestackListResponse,
  CertificateObjectGlobalRulestackGetOptionalParams,
  CertificateObjectGlobalRulestackGetResponse,
  CertificateObjectGlobalRulestackCreateOrUpdateOptionalParams,
  CertificateObjectGlobalRulestackCreateOrUpdateResponse,
  CertificateObjectGlobalRulestackDeleteOptionalParams,
  CertificateObjectGlobalRulestackListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CertificateObjectGlobalRulestack operations. */
export class CertificateObjectGlobalRulestackImpl
  implements CertificateObjectGlobalRulestack {
  private readonly client: PaloAltoNetworksCloudngfw;

  /**
   * Initialize a new instance of the class CertificateObjectGlobalRulestack class.
   * @param client Reference to the service client
   */
  constructor(client: PaloAltoNetworksCloudngfw) {
    this.client = client;
  }

  /**
   * List CertificateObjectGlobalRulestackResource resources by Tenant
   * @param globalRulestackName GlobalRulestack resource name
   * @param options The options parameters.
   */
  public list(
    globalRulestackName: string,
    options?: CertificateObjectGlobalRulestackListOptionalParams
  ): PagedAsyncIterableIterator<CertificateObjectGlobalRulestackResource> {
    const iter = this.listPagingAll(globalRulestackName, options);
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
        return this.listPagingPage(globalRulestackName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    globalRulestackName: string,
    options?: CertificateObjectGlobalRulestackListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CertificateObjectGlobalRulestackResource[]> {
    let result: CertificateObjectGlobalRulestackListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(globalRulestackName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        globalRulestackName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    globalRulestackName: string,
    options?: CertificateObjectGlobalRulestackListOptionalParams
  ): AsyncIterableIterator<CertificateObjectGlobalRulestackResource> {
    for await (const page of this.listPagingPage(
      globalRulestackName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List CertificateObjectGlobalRulestackResource resources by Tenant
   * @param globalRulestackName GlobalRulestack resource name
   * @param options The options parameters.
   */
  private _list(
    globalRulestackName: string,
    options?: CertificateObjectGlobalRulestackListOptionalParams
  ): Promise<CertificateObjectGlobalRulestackListResponse> {
    return this.client.sendOperationRequest(
      { globalRulestackName, options },
      listOperationSpec
    );
  }

  /**
   * Get a CertificateObjectGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name certificate name
   * @param options The options parameters.
   */
  get(
    globalRulestackName: string,
    name: string,
    options?: CertificateObjectGlobalRulestackGetOptionalParams
  ): Promise<CertificateObjectGlobalRulestackGetResponse> {
    return this.client.sendOperationRequest(
      { globalRulestackName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create a CertificateObjectGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name certificate name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    globalRulestackName: string,
    name: string,
    resource: CertificateObjectGlobalRulestackResource,
    options?: CertificateObjectGlobalRulestackCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CertificateObjectGlobalRulestackCreateOrUpdateResponse>,
      CertificateObjectGlobalRulestackCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CertificateObjectGlobalRulestackCreateOrUpdateResponse> => {
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
      args: { globalRulestackName, name, resource, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      CertificateObjectGlobalRulestackCreateOrUpdateResponse,
      OperationState<CertificateObjectGlobalRulestackCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a CertificateObjectGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name certificate name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    globalRulestackName: string,
    name: string,
    resource: CertificateObjectGlobalRulestackResource,
    options?: CertificateObjectGlobalRulestackCreateOrUpdateOptionalParams
  ): Promise<CertificateObjectGlobalRulestackCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      globalRulestackName,
      name,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a CertificateObjectGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name certificate name
   * @param options The options parameters.
   */
  async beginDelete(
    globalRulestackName: string,
    name: string,
    options?: CertificateObjectGlobalRulestackDeleteOptionalParams
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
      args: { globalRulestackName, name, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a CertificateObjectGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name certificate name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    globalRulestackName: string,
    name: string,
    options?: CertificateObjectGlobalRulestackDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(globalRulestackName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param globalRulestackName GlobalRulestack resource name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    globalRulestackName: string,
    nextLink: string,
    options?: CertificateObjectGlobalRulestackListNextOptionalParams
  ): Promise<CertificateObjectGlobalRulestackListNextResponse> {
    return this.client.sendOperationRequest(
      { globalRulestackName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/PaloAltoNetworks.Cloudngfw/globalRulestacks/{globalRulestackName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.globalRulestackName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/PaloAltoNetworks.Cloudngfw/globalRulestacks/{globalRulestackName}/certificates/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.globalRulestackName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/PaloAltoNetworks.Cloudngfw/globalRulestacks/{globalRulestackName}/certificates/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResource
    },
    201: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResource
    },
    202: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResource
    },
    204: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.globalRulestackName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/PaloAltoNetworks.Cloudngfw/globalRulestacks/{globalRulestackName}/certificates/{name}",
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
    Parameters.globalRulestackName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateObjectGlobalRulestackResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.globalRulestackName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
