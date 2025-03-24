/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { BackupUsageSummaries } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient.js";
import {
  BackupManagementUsage,
  BackupUsageSummariesListOptionalParams,
  BackupUsageSummariesListResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing BackupUsageSummaries operations. */
export class BackupUsageSummariesImpl implements BackupUsageSummaries {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class BackupUsageSummaries class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Fetches the backup management usage summaries of the vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupUsageSummariesListOptionalParams,
  ): PagedAsyncIterableIterator<BackupManagementUsage> {
    const iter = this.listPagingAll(vaultName, resourceGroupName, options);
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
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupUsageSummariesListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<BackupManagementUsage[]> {
    let result: BackupUsageSummariesListResponse;
    result = await this._list(vaultName, resourceGroupName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupUsageSummariesListOptionalParams,
  ): AsyncIterableIterator<BackupManagementUsage> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Fetches the backup management usage summaries of the vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupUsageSummariesListOptionalParams,
  ): Promise<BackupUsageSummariesListResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupUsageSummaries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupManagementUsageList,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skipToken,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
