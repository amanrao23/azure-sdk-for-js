/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BackupResourceStorageConfigsNonCRR } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient.js";
import {
  BackupResourceStorageConfigsNonCRRGetOptionalParams,
  BackupResourceStorageConfigsNonCRRGetResponse,
  BackupResourceConfigResource,
  BackupResourceStorageConfigsNonCRRUpdateOptionalParams,
  BackupResourceStorageConfigsNonCRRUpdateResponse,
  BackupResourceStorageConfigsNonCRRPatchOptionalParams,
} from "../models/index.js";

/** Class containing BackupResourceStorageConfigsNonCRR operations. */
export class BackupResourceStorageConfigsNonCRRImpl
  implements BackupResourceStorageConfigsNonCRR
{
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class BackupResourceStorageConfigsNonCRR class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Fetches resource storage config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupResourceStorageConfigsNonCRRGetOptionalParams,
  ): Promise<BackupResourceStorageConfigsNonCRRGetResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters Vault storage config request
   * @param options The options parameters.
   */
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: BackupResourceConfigResource,
    options?: BackupResourceStorageConfigsNonCRRUpdateOptionalParams,
  ): Promise<BackupResourceStorageConfigsNonCRRUpdateResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters Vault storage config request
   * @param options The options parameters.
   */
  patch(
    vaultName: string,
    resourceGroupName: string,
    parameters: BackupResourceConfigResource,
    options?: BackupResourceStorageConfigsNonCRRPatchOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, parameters, options },
      patchOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceConfigResource,
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceConfigResource,
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const patchOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.NewErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
