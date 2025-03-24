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
  SimGroup,
  SimGroupsListBySubscriptionOptionalParams,
  SimGroupsListByResourceGroupOptionalParams,
  SimGroupsDeleteOptionalParams,
  SimGroupsGetOptionalParams,
  SimGroupsGetResponse,
  SimGroupsCreateOrUpdateOptionalParams,
  SimGroupsCreateOrUpdateResponse,
  IdentityAndTagsObject,
  SimGroupsUpdateTagsOptionalParams,
  SimGroupsUpdateTagsResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SimGroups. */
export interface SimGroups {
  /**
   * Gets all the SIM groups in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SimGroupsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<SimGroup>;
  /**
   * Gets all the SIM groups in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SimGroupsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<SimGroup>;
  /**
   * Deletes the specified SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimGroupsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimGroupsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets information about the specified SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimGroupsGetOptionalParams,
  ): Promise<SimGroupsGetResponse>;
  /**
   * Creates or updates a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the create or update SIM group operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimGroup,
    options?: SimGroupsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimGroupsCreateOrUpdateResponse>,
      SimGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the create or update SIM group operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimGroup,
    options?: SimGroupsCreateOrUpdateOptionalParams,
  ): Promise<SimGroupsCreateOrUpdateResponse>;
  /**
   * Patch SIM group resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to patch SIM group resource.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    simGroupName: string,
    parameters: IdentityAndTagsObject,
    options?: SimGroupsUpdateTagsOptionalParams,
  ): Promise<SimGroupsUpdateTagsResponse>;
}
