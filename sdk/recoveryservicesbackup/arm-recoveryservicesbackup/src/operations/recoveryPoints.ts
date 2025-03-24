/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { RecoveryPoints } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient.js";
import {
  RecoveryPointResource,
  RecoveryPointsListNextOptionalParams,
  RecoveryPointsListOptionalParams,
  RecoveryPointsListResponse,
  RecoveryPointsGetOptionalParams,
  RecoveryPointsGetResponse,
  RecoveryPointsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing RecoveryPoints operations. */
export class RecoveryPointsImpl implements RecoveryPoints {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class RecoveryPoints class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Lists the backup copies for the backed up item.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    options?: RecoveryPointsListOptionalParams,
  ): PagedAsyncIterableIterator<RecoveryPointResource> {
    const iter = this.listPagingAll(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      protectedItemName,
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
          vaultName,
          resourceGroupName,
          fabricName,
          containerName,
          protectedItemName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    options?: RecoveryPointsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RecoveryPointResource[]> {
    let result: RecoveryPointsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
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
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    options?: RecoveryPointsListOptionalParams,
  ): AsyncIterableIterator<RecoveryPointResource> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      protectedItemName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the backup copies for the backed up item.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    options?: RecoveryPointsListOptionalParams,
  ): Promise<RecoveryPointsListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * Provides the information of the backed up data identified using RecoveryPointID. This is an
   * asynchronous operation.
   * To know the status of the operation, call the GetProtectedItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with backed up item.
   * @param containerName Container name associated with backed up item.
   * @param protectedItemName Backed up item name whose backup data needs to be fetched.
   * @param recoveryPointId RecoveryPointID represents the backed up data to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    recoveryPointId: string,
    options?: RecoveryPointsGetOptionalParams,
  ): Promise<RecoveryPointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        recoveryPointId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    nextLink: string,
    options?: RecoveryPointsListNextOptionalParams,
  ): Promise<RecoveryPointsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList,
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
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName,
    Parameters.recoveryPointId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList,
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
    Parameters.fabricName,
    Parameters.nextLink,
    Parameters.containerName,
    Parameters.protectedItemName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
