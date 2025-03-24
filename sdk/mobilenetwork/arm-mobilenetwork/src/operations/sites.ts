/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Sites } from "../operationsInterfaces/index.js";
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
  Site,
  SitesListByMobileNetworkNextOptionalParams,
  SitesListByMobileNetworkOptionalParams,
  SitesListByMobileNetworkResponse,
  SitesDeleteOptionalParams,
  SitesGetOptionalParams,
  SitesGetResponse,
  SitesCreateOrUpdateOptionalParams,
  SitesCreateOrUpdateResponse,
  TagsObject,
  SitesUpdateTagsOptionalParams,
  SitesUpdateTagsResponse,
  SiteDeletePacketCore,
  SitesDeletePacketCoreOptionalParams,
  SitesListByMobileNetworkNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Sites operations. */
export class SitesImpl implements Sites {
  private readonly client: MobileNetworkManagementClient;

  /**
   * Initialize a new instance of the class Sites class.
   * @param client Reference to the service client
   */
  constructor(client: MobileNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all sites in the mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  public listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SitesListByMobileNetworkOptionalParams,
  ): PagedAsyncIterableIterator<Site> {
    const iter = this.listByMobileNetworkPagingAll(
      resourceGroupName,
      mobileNetworkName,
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
        return this.listByMobileNetworkPagingPage(
          resourceGroupName,
          mobileNetworkName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByMobileNetworkPagingPage(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SitesListByMobileNetworkOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Site[]> {
    let result: SitesListByMobileNetworkResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByMobileNetwork(
        resourceGroupName,
        mobileNetworkName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByMobileNetworkNext(
        resourceGroupName,
        mobileNetworkName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByMobileNetworkPagingAll(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SitesListByMobileNetworkOptionalParams,
  ): AsyncIterableIterator<Site> {
    for await (const page of this.listByMobileNetworkPagingPage(
      resourceGroupName,
      mobileNetworkName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified mobile network site. This will also delete any network functions that are a
   * part of this site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
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
      args: { resourceGroupName, mobileNetworkName, siteName, options },
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
   * Deletes the specified mobile network site. This will also delete any network functions that are a
   * part of this site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      mobileNetworkName,
      siteName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified mobile network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    options?: SitesGetOptionalParams,
  ): Promise<SitesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, siteName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a mobile network site. Must be created in the same location as its parent mobile
   * network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param parameters Parameters supplied to the create or update mobile network site operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SitesCreateOrUpdateResponse>,
      SitesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SitesCreateOrUpdateResponse> => {
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
        mobileNetworkName,
        siteName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      SitesCreateOrUpdateResponse,
      OperationState<SitesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a mobile network site. Must be created in the same location as its parent mobile
   * network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param parameters Parameters supplied to the create or update mobile network site operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ): Promise<SitesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      mobileNetworkName,
      siteName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates site tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param parameters Parameters supplied to update network site tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    parameters: TagsObject,
    options?: SitesUpdateTagsOptionalParams,
  ): Promise<SitesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, siteName, parameters, options },
      updateTagsOperationSpec,
    );
  }

  /**
   * Lists all sites in the mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  private _listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SitesListByMobileNetworkOptionalParams,
  ): Promise<SitesListByMobileNetworkResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, options },
      listByMobileNetworkOperationSpec,
    );
  }

  /**
   * Deletes a packet core under the specified mobile network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param parameters Parameters supplied to delete a packet core under a site.
   * @param options The options parameters.
   */
  async beginDeletePacketCore(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    parameters: SiteDeletePacketCore,
    options?: SitesDeletePacketCoreOptionalParams,
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
        mobileNetworkName,
        siteName,
        parameters,
        options,
      },
      spec: deletePacketCoreOperationSpec,
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
   * Deletes a packet core under the specified mobile network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param siteName The name of the mobile network site.
   * @param parameters Parameters supplied to delete a packet core under a site.
   * @param options The options parameters.
   */
  async beginDeletePacketCoreAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    siteName: string,
    parameters: SiteDeletePacketCore,
    options?: SitesDeletePacketCoreOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDeletePacketCore(
      resourceGroupName,
      mobileNetworkName,
      siteName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByMobileNetworkNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param nextLink The nextLink from the previous successful call to the ListByMobileNetwork method.
   * @param options The options parameters.
   */
  private _listByMobileNetworkNext(
    resourceGroupName: string,
    mobileNetworkName: string,
    nextLink: string,
    options?: SitesListByMobileNetworkNextOptionalParams,
  ): Promise<SitesListByMobileNetworkNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, nextLink, options },
      listByMobileNetworkNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/sites/{siteName}",
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
    Parameters.mobileNetworkName,
    Parameters.siteName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/sites/{siteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Site,
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
    Parameters.mobileNetworkName,
    Parameters.siteName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/sites/{siteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Site,
    },
    201: {
      bodyMapper: Mappers.Site,
    },
    202: {
      bodyMapper: Mappers.Site,
    },
    204: {
      bodyMapper: Mappers.Site,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mobileNetworkName,
    Parameters.siteName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/sites/{siteName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Site,
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
    Parameters.mobileNetworkName,
    Parameters.siteName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByMobileNetworkOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/sites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteListResult,
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
    Parameters.mobileNetworkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deletePacketCoreOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/sites/{siteName}/deletePacketCore",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters19,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mobileNetworkName,
    Parameters.siteName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByMobileNetworkNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.mobileNetworkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
