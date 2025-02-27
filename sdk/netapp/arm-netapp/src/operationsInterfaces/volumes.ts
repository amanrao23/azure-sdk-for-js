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
  Volume,
  VolumesListOptionalParams,
  Replication,
  VolumesListReplicationsOptionalParams,
  VolumesGetOptionalParams,
  VolumesGetResponse,
  VolumesCreateOrUpdateOptionalParams,
  VolumesCreateOrUpdateResponse,
  VolumePatch,
  VolumesUpdateOptionalParams,
  VolumesUpdateResponse,
  VolumesDeleteOptionalParams,
  VolumesPopulateAvailabilityZoneOptionalParams,
  VolumesPopulateAvailabilityZoneResponse,
  VolumeRevert,
  VolumesRevertOptionalParams,
  VolumesResetCifsPasswordOptionalParams,
  VolumesResetCifsPasswordResponse,
  VolumesBreakFileLocksOptionalParams,
  GetGroupIdListForLdapUserRequest,
  VolumesListGetGroupIdListForLdapUserOptionalParams,
  VolumesListGetGroupIdListForLdapUserResponse,
  VolumesBreakReplicationOptionalParams,
  ReestablishReplicationRequest,
  VolumesReestablishReplicationOptionalParams,
  VolumesReplicationStatusOptionalParams,
  VolumesReplicationStatusResponse,
  VolumesResyncReplicationOptionalParams,
  VolumesDeleteReplicationOptionalParams,
  AuthorizeRequest,
  VolumesAuthorizeReplicationOptionalParams,
  VolumesReInitializeReplicationOptionalParams,
  PeerClusterForVolumeMigrationRequest,
  VolumesPeerExternalClusterOptionalParams,
  VolumesPeerExternalClusterResponse,
  VolumesAuthorizeExternalReplicationOptionalParams,
  VolumesAuthorizeExternalReplicationResponse,
  VolumesFinalizeExternalReplicationOptionalParams,
  VolumesFinalizeExternalReplicationResponse,
  VolumesPerformReplicationTransferOptionalParams,
  VolumesPerformReplicationTransferResponse,
  PoolChangeRequest,
  VolumesPoolChangeOptionalParams,
  VolumesRelocateOptionalParams,
  VolumesFinalizeRelocationOptionalParams,
  VolumesRevertRelocationOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Volumes. */
export interface Volumes {
  /**
   * List all volumes within the capacity pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: VolumesListOptionalParams,
  ): PagedAsyncIterableIterator<Volume>;
  /**
   * List all replications for a specified volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  listReplications(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesListReplicationsOptionalParams,
  ): PagedAsyncIterableIterator<Replication>;
  /**
   * Get the details of the specified volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesGetOptionalParams,
  ): Promise<VolumesGetResponse>;
  /**
   * Create or update the specified volume within the capacity pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: Volume,
    options?: VolumesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesCreateOrUpdateResponse>,
      VolumesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the specified volume within the capacity pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: Volume,
    options?: VolumesCreateOrUpdateOptionalParams,
  ): Promise<VolumesCreateOrUpdateResponse>;
  /**
   * Patch the specified volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumePatch,
    options?: VolumesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesUpdateResponse>,
      VolumesUpdateResponse
    >
  >;
  /**
   * Patch the specified volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumePatch,
    options?: VolumesUpdateOptionalParams,
  ): Promise<VolumesUpdateResponse>;
  /**
   * Delete the specified volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the specified volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * This operation will populate availability zone information for a volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginPopulateAvailabilityZone(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesPopulateAvailabilityZoneOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesPopulateAvailabilityZoneResponse>,
      VolumesPopulateAvailabilityZoneResponse
    >
  >;
  /**
   * This operation will populate availability zone information for a volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginPopulateAvailabilityZoneAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesPopulateAvailabilityZoneOptionalParams,
  ): Promise<VolumesPopulateAvailabilityZoneResponse>;
  /**
   * Revert a volume to the snapshot specified in the body
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Object for snapshot to revert supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRevert(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumeRevert,
    options?: VolumesRevertOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Revert a volume to the snapshot specified in the body
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Object for snapshot to revert supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRevertAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumeRevert,
    options?: VolumesRevertOptionalParams,
  ): Promise<void>;
  /**
   * Reset cifs password from volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginResetCifsPassword(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesResetCifsPasswordOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesResetCifsPasswordResponse>,
      VolumesResetCifsPasswordResponse
    >
  >;
  /**
   * Reset cifs password from volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginResetCifsPasswordAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesResetCifsPasswordOptionalParams,
  ): Promise<VolumesResetCifsPasswordResponse>;
  /**
   * Break all the file locks on a volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginBreakFileLocks(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesBreakFileLocksOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Break all the file locks on a volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginBreakFileLocksAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesBreakFileLocksOptionalParams,
  ): Promise<void>;
  /**
   * Returns the list of group Ids for a specific LDAP User
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Returns group Id list for a specific LDAP user
   * @param options The options parameters.
   */
  beginListGetGroupIdListForLdapUser(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: GetGroupIdListForLdapUserRequest,
    options?: VolumesListGetGroupIdListForLdapUserOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesListGetGroupIdListForLdapUserResponse>,
      VolumesListGetGroupIdListForLdapUserResponse
    >
  >;
  /**
   * Returns the list of group Ids for a specific LDAP User
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Returns group Id list for a specific LDAP user
   * @param options The options parameters.
   */
  beginListGetGroupIdListForLdapUserAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: GetGroupIdListForLdapUserRequest,
    options?: VolumesListGetGroupIdListForLdapUserOptionalParams,
  ): Promise<VolumesListGetGroupIdListForLdapUserResponse>;
  /**
   * Break the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginBreakReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesBreakReplicationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Break the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginBreakReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesBreakReplicationOptionalParams,
  ): Promise<void>;
  /**
   * Re-establish a previously deleted replication between 2 volumes that have a common ad-hoc or
   * policy-based snapshots
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body body for the id of the source volume.
   * @param options The options parameters.
   */
  beginReestablishReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: ReestablishReplicationRequest,
    options?: VolumesReestablishReplicationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Re-establish a previously deleted replication between 2 volumes that have a common ad-hoc or
   * policy-based snapshots
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body body for the id of the source volume.
   * @param options The options parameters.
   */
  beginReestablishReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: ReestablishReplicationRequest,
    options?: VolumesReestablishReplicationOptionalParams,
  ): Promise<void>;
  /**
   * Get the status of the replication
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  replicationStatus(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesReplicationStatusOptionalParams,
  ): Promise<VolumesReplicationStatusResponse>;
  /**
   * Resync the connection on the destination volume. If the operation is ran on the source volume it
   * will reverse-resync the connection and sync from destination to source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginResyncReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesResyncReplicationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Resync the connection on the destination volume. If the operation is ran on the source volume it
   * will reverse-resync the connection and sync from destination to source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginResyncReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesResyncReplicationOptionalParams,
  ): Promise<void>;
  /**
   * Delete the replication connection on the destination volume, and send release to the source
   * replication
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDeleteReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteReplicationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the replication connection on the destination volume, and send release to the source
   * replication
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDeleteReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteReplicationOptionalParams,
  ): Promise<void>;
  /**
   * Authorize the replication connection on the source volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Authorize request object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginAuthorizeReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: AuthorizeRequest,
    options?: VolumesAuthorizeReplicationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Authorize the replication connection on the source volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Authorize request object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginAuthorizeReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: AuthorizeRequest,
    options?: VolumesAuthorizeReplicationOptionalParams,
  ): Promise<void>;
  /**
   * Re-Initializes the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginReInitializeReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesReInitializeReplicationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Re-Initializes the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginReInitializeReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesReInitializeReplicationOptionalParams,
  ): Promise<void>;
  /**
   * Starts peering the external cluster for this migration volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Cluster peer request object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginPeerExternalCluster(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: PeerClusterForVolumeMigrationRequest,
    options?: VolumesPeerExternalClusterOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesPeerExternalClusterResponse>,
      VolumesPeerExternalClusterResponse
    >
  >;
  /**
   * Starts peering the external cluster for this migration volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Cluster peer request object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginPeerExternalClusterAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: PeerClusterForVolumeMigrationRequest,
    options?: VolumesPeerExternalClusterOptionalParams,
  ): Promise<VolumesPeerExternalClusterResponse>;
  /**
   * Starts SVM peering and returns a command to be run on the external ONTAP to accept it.  Once the SVM
   * have been peered a SnapMirror will be created
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginAuthorizeExternalReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesAuthorizeExternalReplicationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesAuthorizeExternalReplicationResponse>,
      VolumesAuthorizeExternalReplicationResponse
    >
  >;
  /**
   * Starts SVM peering and returns a command to be run on the external ONTAP to accept it.  Once the SVM
   * have been peered a SnapMirror will be created
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginAuthorizeExternalReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesAuthorizeExternalReplicationOptionalParams,
  ): Promise<VolumesAuthorizeExternalReplicationResponse>;
  /**
   * Finalizes the migration of an external volume by releasing the replication and breaking the external
   * cluster peering if no other migration is active.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginFinalizeExternalReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesFinalizeExternalReplicationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesFinalizeExternalReplicationResponse>,
      VolumesFinalizeExternalReplicationResponse
    >
  >;
  /**
   * Finalizes the migration of an external volume by releasing the replication and breaking the external
   * cluster peering if no other migration is active.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginFinalizeExternalReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesFinalizeExternalReplicationOptionalParams,
  ): Promise<VolumesFinalizeExternalReplicationResponse>;
  /**
   * Performs an adhoc replication transfer on a volume with volumeType Migration
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginPerformReplicationTransfer(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesPerformReplicationTransferOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumesPerformReplicationTransferResponse>,
      VolumesPerformReplicationTransferResponse
    >
  >;
  /**
   * Performs an adhoc replication transfer on a volume with volumeType Migration
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginPerformReplicationTransferAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesPerformReplicationTransferOptionalParams,
  ): Promise<VolumesPerformReplicationTransferResponse>;
  /**
   * Moves volume to another pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Move volume to the pool supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginPoolChange(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: PoolChangeRequest,
    options?: VolumesPoolChangeOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Moves volume to another pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Move volume to the pool supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginPoolChangeAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: PoolChangeRequest,
    options?: VolumesPoolChangeOptionalParams,
  ): Promise<void>;
  /**
   * Relocates volume to a new stamp
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginRelocate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesRelocateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Relocates volume to a new stamp
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginRelocateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesRelocateOptionalParams,
  ): Promise<void>;
  /**
   * Finalizes the relocation of the volume and cleans up the old volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginFinalizeRelocation(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesFinalizeRelocationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Finalizes the relocation of the volume and cleans up the old volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginFinalizeRelocationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesFinalizeRelocationOptionalParams,
  ): Promise<void>;
  /**
   * Reverts the volume relocation process, cleans up the new volume and starts using the former-existing
   * volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginRevertRelocation(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesRevertRelocationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Reverts the volume relocation process, cleans up the new volume and starts using the former-existing
   * volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginRevertRelocationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesRevertRelocationOptionalParams,
  ): Promise<void>;
}
