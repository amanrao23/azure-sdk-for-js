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
  DiagnosticsPackage,
  DiagnosticsPackagesListByPacketCoreControlPlaneOptionalParams,
  DiagnosticsPackagesCreateOrUpdateOptionalParams,
  DiagnosticsPackagesCreateOrUpdateResponse,
  DiagnosticsPackagesGetOptionalParams,
  DiagnosticsPackagesGetResponse,
  DiagnosticsPackagesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiagnosticsPackages. */
export interface DiagnosticsPackages {
  /**
   * Lists all the diagnostics packages under a packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  listByPacketCoreControlPlane(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: DiagnosticsPackagesListByPacketCoreControlPlaneOptionalParams,
  ): PagedAsyncIterableIterator<DiagnosticsPackage>;
  /**
   * Creates or updates a diagnostics package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param diagnosticsPackageName The name of the diagnostics package.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    diagnosticsPackageName: string,
    options?: DiagnosticsPackagesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DiagnosticsPackagesCreateOrUpdateResponse>,
      DiagnosticsPackagesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a diagnostics package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param diagnosticsPackageName The name of the diagnostics package.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    diagnosticsPackageName: string,
    options?: DiagnosticsPackagesCreateOrUpdateOptionalParams,
  ): Promise<DiagnosticsPackagesCreateOrUpdateResponse>;
  /**
   * Gets information about the specified diagnostics package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param diagnosticsPackageName The name of the diagnostics package.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    diagnosticsPackageName: string,
    options?: DiagnosticsPackagesGetOptionalParams,
  ): Promise<DiagnosticsPackagesGetResponse>;
  /**
   * Deletes the specified diagnostics package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param diagnosticsPackageName The name of the diagnostics package.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    diagnosticsPackageName: string,
    options?: DiagnosticsPackagesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified diagnostics package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param diagnosticsPackageName The name of the diagnostics package.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    diagnosticsPackageName: string,
    options?: DiagnosticsPackagesDeleteOptionalParams,
  ): Promise<void>;
}
