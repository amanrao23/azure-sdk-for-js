/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { DeletedProtectionContainers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient.js";
import {
  ProtectionContainerResource,
  DeletedProtectionContainersListNextOptionalParams,
  DeletedProtectionContainersListOptionalParams,
  DeletedProtectionContainersListResponse,
  DeletedProtectionContainersListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedProtectionContainers operations. */
export class DeletedProtectionContainersImpl
  implements DeletedProtectionContainers
{
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class DeletedProtectionContainers class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Lists the soft deleted containers registered to Recovery Services Vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedProtectionContainersListOptionalParams,
  ): PagedAsyncIterableIterator<ProtectionContainerResource> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
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
          vaultName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedProtectionContainersListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ProtectionContainerResource[]> {
    let result: DeletedProtectionContainersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, vaultName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
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
    vaultName: string,
    options?: DeletedProtectionContainersListOptionalParams,
  ): AsyncIterableIterator<ProtectionContainerResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the soft deleted containers registered to Recovery Services Vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedProtectionContainersListOptionalParams,
  ): Promise<DeletedProtectionContainersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param vaultName The name of the recovery services vault.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    nextLink: string,
    options?: DeletedProtectionContainersListNextOptionalParams,
  ): Promise<DeletedProtectionContainersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupDeletedProtectionContainers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResourceList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResourceList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
