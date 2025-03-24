/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AccessControlRecord,
  AccessControlRecordsListByManagerOptionalParams,
  AccessControlRecordsGetOptionalParams,
  AccessControlRecordsGetResponse,
  AccessControlRecordsCreateOrUpdateOptionalParams,
  AccessControlRecordsCreateOrUpdateResponse,
  AccessControlRecordsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AccessControlRecords. */
export interface AccessControlRecords {
  /**
   * Retrieves all the access control records in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsListByManagerOptionalParams
  ): PagedAsyncIterableIterator<AccessControlRecord>;
  /**
   * Returns the properties of the specified access control record name.
   * @param accessControlRecordName Name of access control record to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsGetOptionalParams
  ): Promise<AccessControlRecordsGetResponse>;
  /**
   * Creates or Updates an access control record.
   * @param accessControlRecordName The name of the access control record.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param accessControlRecord The access control record to be added or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    accessControlRecord: AccessControlRecord,
    options?: AccessControlRecordsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccessControlRecordsCreateOrUpdateResponse>,
      AccessControlRecordsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or Updates an access control record.
   * @param accessControlRecordName The name of the access control record.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param accessControlRecord The access control record to be added or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    accessControlRecord: AccessControlRecord,
    options?: AccessControlRecordsCreateOrUpdateOptionalParams
  ): Promise<AccessControlRecordsCreateOrUpdateResponse>;
  /**
   * Deletes the access control record.
   * @param accessControlRecordName The name of the access control record to delete.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the access control record.
   * @param accessControlRecordName The name of the access control record to delete.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsDeleteOptionalParams
  ): Promise<void>;
}
