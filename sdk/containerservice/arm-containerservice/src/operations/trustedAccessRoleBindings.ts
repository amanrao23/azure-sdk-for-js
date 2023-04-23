/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { TrustedAccessRoleBindings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClient } from "../containerServiceClient";
import {
  TrustedAccessRoleBinding,
  TrustedAccessRoleBindingsListNextOptionalParams,
  TrustedAccessRoleBindingsListOptionalParams,
  TrustedAccessRoleBindingsListResponse,
  TrustedAccessRoleBindingsGetOptionalParams,
  TrustedAccessRoleBindingsGetResponse,
  TrustedAccessRoleBindingsCreateOrUpdateOptionalParams,
  TrustedAccessRoleBindingsCreateOrUpdateResponse,
  TrustedAccessRoleBindingsDeleteOptionalParams,
  TrustedAccessRoleBindingsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TrustedAccessRoleBindings operations. */
export class TrustedAccessRoleBindingsImpl
  implements TrustedAccessRoleBindings {
  private readonly client: ContainerServiceClient;

  /**
   * Initialize a new instance of the class TrustedAccessRoleBindings class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerServiceClient) {
    this.client = client;
  }

  /**
   * List trusted access role bindings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: TrustedAccessRoleBindingsListOptionalParams
  ): PagedAsyncIterableIterator<TrustedAccessRoleBinding> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
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
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: TrustedAccessRoleBindingsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<TrustedAccessRoleBinding[]> {
    let result: TrustedAccessRoleBindingsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
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
    resourceGroupName: string,
    resourceName: string,
    options?: TrustedAccessRoleBindingsListOptionalParams
  ): AsyncIterableIterator<TrustedAccessRoleBinding> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List trusted access role bindings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: TrustedAccessRoleBindingsListOptionalParams
  ): Promise<TrustedAccessRoleBindingsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get a trusted access role binding.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param trustedAccessRoleBindingName The name of trusted access role binding.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    trustedAccessRoleBindingName: string,
    options?: TrustedAccessRoleBindingsGetOptionalParams
  ): Promise<TrustedAccessRoleBindingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        trustedAccessRoleBindingName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update a trusted access role binding
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param trustedAccessRoleBindingName The name of trusted access role binding.
   * @param trustedAccessRoleBinding A trusted access role binding
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    trustedAccessRoleBindingName: string,
    trustedAccessRoleBinding: TrustedAccessRoleBinding,
    options?: TrustedAccessRoleBindingsCreateOrUpdateOptionalParams
  ): Promise<TrustedAccessRoleBindingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        trustedAccessRoleBindingName,
        trustedAccessRoleBinding,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a trusted access role binding.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param trustedAccessRoleBindingName The name of trusted access role binding.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    trustedAccessRoleBindingName: string,
    options?: TrustedAccessRoleBindingsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        trustedAccessRoleBindingName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: TrustedAccessRoleBindingsListNextOptionalParams
  ): Promise<TrustedAccessRoleBindingsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TrustedAccessRoleBindingListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings/{trustedAccessRoleBindingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TrustedAccessRoleBinding
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.trustedAccessRoleBindingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings/{trustedAccessRoleBindingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TrustedAccessRoleBinding
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.trustedAccessRoleBinding,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.trustedAccessRoleBindingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings/{trustedAccessRoleBindingName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.trustedAccessRoleBindingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TrustedAccessRoleBindingListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
