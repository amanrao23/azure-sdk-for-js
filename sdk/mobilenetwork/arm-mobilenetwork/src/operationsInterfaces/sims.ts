/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Sim,
  SimsListByGroupOptionalParams,
  SimsDeleteOptionalParams,
  SimsGetOptionalParams,
  SimsGetResponse,
  SimsCreateOrUpdateOptionalParams,
  SimsCreateOrUpdateResponse,
  SimUploadList,
  SimsBulkUploadOptionalParams,
  SimsBulkUploadResponse,
  SimDeleteList,
  SimsBulkDeleteOptionalParams,
  SimsBulkDeleteResponse,
  EncryptedSimUploadList,
  SimsBulkUploadEncryptedOptionalParams,
  SimsBulkUploadEncryptedResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Sims. */
export interface Sims {
  /**
   * Gets all the SIMs in a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  listByGroup(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListByGroupOptionalParams,
  ): PagedAsyncIterableIterator<Sim>;
  /**
   * Deletes the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets information about the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsGetOptionalParams,
  ): Promise<SimsGetResponse>;
  /**
   * Creates or updates a SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param parameters Parameters supplied to the create or update SIM operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    parameters: Sim,
    options?: SimsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsCreateOrUpdateResponse>,
      SimsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param parameters Parameters supplied to the create or update SIM operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    parameters: Sim,
    options?: SimsCreateOrUpdateOptionalParams,
  ): Promise<SimsCreateOrUpdateResponse>;
  /**
   * Bulk upload SIMs to a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM upload operation.
   * @param options The options parameters.
   */
  beginBulkUpload(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimUploadList,
    options?: SimsBulkUploadOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsBulkUploadResponse>,
      SimsBulkUploadResponse
    >
  >;
  /**
   * Bulk upload SIMs to a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM upload operation.
   * @param options The options parameters.
   */
  beginBulkUploadAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimUploadList,
    options?: SimsBulkUploadOptionalParams,
  ): Promise<SimsBulkUploadResponse>;
  /**
   * Bulk delete SIMs from a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM delete operation.
   * @param options The options parameters.
   */
  beginBulkDelete(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimDeleteList,
    options?: SimsBulkDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsBulkDeleteResponse>,
      SimsBulkDeleteResponse
    >
  >;
  /**
   * Bulk delete SIMs from a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM delete operation.
   * @param options The options parameters.
   */
  beginBulkDeleteAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimDeleteList,
    options?: SimsBulkDeleteOptionalParams,
  ): Promise<SimsBulkDeleteResponse>;
  /**
   * Bulk upload SIMs in encrypted form to a SIM group. The SIM credentials must be encrypted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the encrypted SIMs upload operation.
   * @param options The options parameters.
   */
  beginBulkUploadEncrypted(
    resourceGroupName: string,
    simGroupName: string,
    parameters: EncryptedSimUploadList,
    options?: SimsBulkUploadEncryptedOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsBulkUploadEncryptedResponse>,
      SimsBulkUploadEncryptedResponse
    >
  >;
  /**
   * Bulk upload SIMs in encrypted form to a SIM group. The SIM credentials must be encrypted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the encrypted SIMs upload operation.
   * @param options The options parameters.
   */
  beginBulkUploadEncryptedAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: EncryptedSimUploadList,
    options?: SimsBulkUploadEncryptedOptionalParams,
  ): Promise<SimsBulkUploadEncryptedResponse>;
}
