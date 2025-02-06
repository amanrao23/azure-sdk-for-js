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
  CloudHsmCluster,
  CloudHsmClustersListByResourceGroupOptionalParams,
  CloudHsmClustersListBySubscriptionOptionalParams,
  CloudHsmClustersCreateOrUpdateOptionalParams,
  CloudHsmClustersCreateOrUpdateResponse,
  CloudHsmClustersUpdateOptionalParams,
  CloudHsmClustersUpdateResponse,
  CloudHsmClustersGetOptionalParams,
  CloudHsmClustersGetResponse,
  CloudHsmClustersDeleteOptionalParams,
  CloudHsmClustersDeleteResponse,
  CloudHsmClustersValidateBackupPropertiesOptionalParams,
  CloudHsmClustersValidateBackupPropertiesResponse,
  CloudHsmClustersBackupOptionalParams,
  CloudHsmClustersBackupResponse,
  CloudHsmClustersValidateRestorePropertiesOptionalParams,
  CloudHsmClustersValidateRestorePropertiesResponse,
  RestoreRequestProperties,
  CloudHsmClustersRestoreOptionalParams,
  CloudHsmClustersRestoreResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudHsmClusters. */
export interface CloudHsmClusters {
  /**
   * The List operation gets information about the Cloud HSM Clusters associated with the subscription
   * and within the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: CloudHsmClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<CloudHsmCluster>;
  /**
   * The List operation gets information about the Cloud HSM Clusters associated with the subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: CloudHsmClustersListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<CloudHsmCluster>;
  /**
   * Create or Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param location The geo-location where the resource lives
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    location: string,
    options?: CloudHsmClustersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersCreateOrUpdateResponse>,
      CloudHsmClustersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param location The geo-location where the resource lives
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    location: string,
    options?: CloudHsmClustersCreateOrUpdateOptionalParams,
  ): Promise<CloudHsmClustersCreateOrUpdateResponse>;
  /**
   * Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersUpdateResponse>,
      CloudHsmClustersUpdateResponse
    >
  >;
  /**
   * Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersUpdateOptionalParams,
  ): Promise<CloudHsmClustersUpdateResponse>;
  /**
   * Gets the specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersGetOptionalParams,
  ): Promise<CloudHsmClustersGetResponse>;
  /**
   * Deletes the specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersDeleteResponse>,
      CloudHsmClustersDeleteResponse
    >
  >;
  /**
   * Deletes the specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersDeleteOptionalParams,
  ): Promise<CloudHsmClustersDeleteResponse>;
  /**
   * Pre Backup operation to validate whether the customer can perform a backup on the Cloud HSM Cluster
   * resource in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginValidateBackupProperties(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersValidateBackupPropertiesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersValidateBackupPropertiesResponse>,
      CloudHsmClustersValidateBackupPropertiesResponse
    >
  >;
  /**
   * Pre Backup operation to validate whether the customer can perform a backup on the Cloud HSM Cluster
   * resource in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginValidateBackupPropertiesAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersValidateBackupPropertiesOptionalParams,
  ): Promise<CloudHsmClustersValidateBackupPropertiesResponse>;
  /**
   * Create a backup of the Cloud HSM Cluster in the specified subscription
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginBackup(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersBackupOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersBackupResponse>,
      CloudHsmClustersBackupResponse
    >
  >;
  /**
   * Create a backup of the Cloud HSM Cluster in the specified subscription
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginBackupAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersBackupOptionalParams,
  ): Promise<CloudHsmClustersBackupResponse>;
  /**
   * Queued validating pre restore operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginValidateRestoreProperties(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersValidateRestorePropertiesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersValidateRestorePropertiesResponse>,
      CloudHsmClustersValidateRestorePropertiesResponse
    >
  >;
  /**
   * Queued validating pre restore operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  beginValidateRestorePropertiesAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersValidateRestorePropertiesOptionalParams,
  ): Promise<CloudHsmClustersValidateRestorePropertiesResponse>;
  /**
   * Restores all key materials of a specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param restoreRequestProperties Restore Operation Required properties
   * @param options The options parameters.
   */
  beginRestore(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    restoreRequestProperties: RestoreRequestProperties,
    options?: CloudHsmClustersRestoreOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersRestoreResponse>,
      CloudHsmClustersRestoreResponse
    >
  >;
  /**
   * Restores all key materials of a specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param restoreRequestProperties Restore Operation Required properties
   * @param options The options parameters.
   */
  beginRestoreAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    restoreRequestProperties: RestoreRequestProperties,
    options?: CloudHsmClustersRestoreOptionalParams,
  ): Promise<CloudHsmClustersRestoreResponse>;
}
