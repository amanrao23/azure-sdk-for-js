/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MachineGroup,
  MachineGroupsListByWorkspaceOptionalParams,
  MachineGroupsCreateOptionalParams,
  MachineGroupsCreateResponse,
  MachineGroupsGetOptionalParams,
  MachineGroupsGetResponse,
  MachineGroupsUpdateOptionalParams,
  MachineGroupsUpdateResponse,
  MachineGroupsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MachineGroups. */
export interface MachineGroups {
  /**
   * Returns all machine groups during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: MachineGroupsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<MachineGroup>;
  /**
   * Creates a new machine group.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineGroup Machine Group resource to create.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    machineGroup: MachineGroup,
    options?: MachineGroupsCreateOptionalParams
  ): Promise<MachineGroupsCreateResponse>;
  /**
   * Returns the specified machine group as it existed during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineGroupName Machine Group resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    machineGroupName: string,
    options?: MachineGroupsGetOptionalParams
  ): Promise<MachineGroupsGetResponse>;
  /**
   * Updates a machine group.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineGroupName Machine Group resource name.
   * @param machineGroup Machine Group resource to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    machineGroupName: string,
    machineGroup: MachineGroup,
    options?: MachineGroupsUpdateOptionalParams
  ): Promise<MachineGroupsUpdateResponse>;
  /**
   * Deletes the specified Machine Group.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineGroupName Machine Group resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    machineGroupName: string,
    options?: MachineGroupsDeleteOptionalParams
  ): Promise<void>;
}
