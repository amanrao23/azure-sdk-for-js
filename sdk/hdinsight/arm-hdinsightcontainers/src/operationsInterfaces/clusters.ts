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
  Cluster,
  ClustersListByClusterPoolNameOptionalParams,
  ServiceConfigResult,
  ClustersListServiceConfigsOptionalParams,
  ClusterInstanceViewResult,
  ClustersListInstanceViewsOptionalParams,
  ClusterUpgrade,
  ClustersUpgradeOptionalParams,
  ClustersUpgradeResponse,
  ClusterUpgradeRollback,
  ClustersUpgradeManualRollbackOptionalParams,
  ClustersUpgradeManualRollbackResponse,
  ClusterResizeData,
  ClustersResizeOptionalParams,
  ClustersResizeResponse,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClustersCreateOptionalParams,
  ClustersCreateResponse,
  ClusterPatch,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersDeleteOptionalParams,
  ClustersGetInstanceViewOptionalParams,
  ClustersGetInstanceViewResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Clusters. */
export interface Clusters {
  /**
   * Lists the HDInsight cluster pools under a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  listByClusterPoolName(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClustersListByClusterPoolNameOptionalParams,
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Lists the config dump of all services running in cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param options The options parameters.
   */
  listServiceConfigs(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    options?: ClustersListServiceConfigsOptionalParams,
  ): PagedAsyncIterableIterator<ServiceConfigResult>;
  /**
   * Lists the lists of instance views
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param options The options parameters.
   */
  listInstanceViews(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    options?: ClustersListInstanceViewsOptionalParams,
  ): PagedAsyncIterableIterator<ClusterInstanceViewResult>;
  /**
   * Upgrade a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterUpgradeRequest Upgrade a cluster.
   * @param options The options parameters.
   */
  beginUpgrade(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterUpgradeRequest: ClusterUpgrade,
    options?: ClustersUpgradeOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersUpgradeResponse>,
      ClustersUpgradeResponse
    >
  >;
  /**
   * Upgrade a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterUpgradeRequest Upgrade a cluster.
   * @param options The options parameters.
   */
  beginUpgradeAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterUpgradeRequest: ClusterUpgrade,
    options?: ClustersUpgradeOptionalParams,
  ): Promise<ClustersUpgradeResponse>;
  /**
   * Manual rollback upgrade for a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterRollbackUpgradeRequest Manual rollback upgrade for a cluster.
   * @param options The options parameters.
   */
  beginUpgradeManualRollback(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterRollbackUpgradeRequest: ClusterUpgradeRollback,
    options?: ClustersUpgradeManualRollbackOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersUpgradeManualRollbackResponse>,
      ClustersUpgradeManualRollbackResponse
    >
  >;
  /**
   * Manual rollback upgrade for a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterRollbackUpgradeRequest Manual rollback upgrade for a cluster.
   * @param options The options parameters.
   */
  beginUpgradeManualRollbackAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterRollbackUpgradeRequest: ClusterUpgradeRollback,
    options?: ClustersUpgradeManualRollbackOptionalParams,
  ): Promise<ClustersUpgradeManualRollbackResponse>;
  /**
   * Resize an existing Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterResizeRequest Resize a cluster.
   * @param options The options parameters.
   */
  beginResize(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterResizeRequest: ClusterResizeData,
    options?: ClustersResizeOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersResizeResponse>,
      ClustersResizeResponse
    >
  >;
  /**
   * Resize an existing Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterResizeRequest Resize a cluster.
   * @param options The options parameters.
   */
  beginResizeAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterResizeRequest: ClusterResizeData,
    options?: ClustersResizeOptionalParams,
  ): Promise<ClustersResizeResponse>;
  /**
   * Gets a HDInsight cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ): Promise<ClustersGetResponse>;
  /**
   * Creates a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param hDInsightCluster The cluster to create.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    hDInsightCluster: Cluster,
    options?: ClustersCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersCreateResponse>,
      ClustersCreateResponse
    >
  >;
  /**
   * Creates a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param hDInsightCluster The cluster to create.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    hDInsightCluster: Cluster,
    options?: ClustersCreateOptionalParams,
  ): Promise<ClustersCreateResponse>;
  /**
   * Updates an existing Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterPatchRequest Patch a cluster.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterPatchRequest: ClusterPatch,
    options?: ClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersUpdateResponse>,
      ClustersUpdateResponse
    >
  >;
  /**
   * Updates an existing Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param clusterPatchRequest Patch a cluster.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    clusterPatchRequest: ClusterPatch,
    options?: ClustersUpdateOptionalParams,
  ): Promise<ClustersUpdateResponse>;
  /**
   * Deletes a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets the status of a cluster instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param options The options parameters.
   */
  getInstanceView(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    options?: ClustersGetInstanceViewOptionalParams,
  ): Promise<ClustersGetInstanceViewResponse>;
}
