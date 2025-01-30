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
  FrontDoor,
  FrontDoorsListOptionalParams,
  FrontDoorsListByResourceGroupOptionalParams,
  FrontDoorsGetOptionalParams,
  FrontDoorsGetResponse,
  FrontDoorsCreateOrUpdateOptionalParams,
  FrontDoorsCreateOrUpdateResponse,
  FrontDoorsDeleteOptionalParams,
  ValidateCustomDomainInput,
  FrontDoorsValidateCustomDomainOptionalParams,
  FrontDoorsValidateCustomDomainResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FrontDoors. */
export interface FrontDoors {
  /**
   * Lists all of the Front Doors within an Azure subscription.
   * @param options The options parameters.
   */
  list(
    options?: FrontDoorsListOptionalParams,
  ): PagedAsyncIterableIterator<FrontDoor>;
  /**
   * Lists all of the Front Doors within a resource group under a subscription.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: FrontDoorsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<FrontDoor>;
  /**
   * Gets a Front Door with the specified Front Door name under the specified subscription and resource
   * group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontDoorsGetOptionalParams,
  ): Promise<FrontDoorsGetResponse>;
  /**
   * Creates a new Front Door with a Front Door name under the specified subscription and resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontDoorParameters Front Door properties needed to create a new Front Door.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    frontDoorName: string,
    frontDoorParameters: FrontDoor,
    options?: FrontDoorsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FrontDoorsCreateOrUpdateResponse>,
      FrontDoorsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new Front Door with a Front Door name under the specified subscription and resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontDoorParameters Front Door properties needed to create a new Front Door.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    frontDoorParameters: FrontDoor,
    options?: FrontDoorsCreateOrUpdateOptionalParams,
  ): Promise<FrontDoorsCreateOrUpdateResponse>;
  /**
   * Deletes an existing Front Door with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontDoorsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an existing Front Door with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontDoorsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param customDomainProperties Custom domain to be validated.
   * @param options The options parameters.
   */
  validateCustomDomain(
    resourceGroupName: string,
    frontDoorName: string,
    customDomainProperties: ValidateCustomDomainInput,
    options?: FrontDoorsValidateCustomDomainOptionalParams,
  ): Promise<FrontDoorsValidateCustomDomainResponse>;
}
