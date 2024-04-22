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
  Experiment,
  ExperimentsListByProfileOptionalParams,
  ExperimentsGetOptionalParams,
  ExperimentsGetResponse,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsCreateOrUpdateResponse,
  ExperimentUpdateModel,
  ExperimentsUpdateOptionalParams,
  ExperimentsUpdateResponse,
  ExperimentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Experiments. */
export interface Experiments {
  /**
   * Gets a list of Experiments
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param options The options parameters.
   */
  listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: ExperimentsListByProfileOptionalParams,
  ): PagedAsyncIterableIterator<Experiment>;
  /**
   * Gets an Experiment by ExperimentName
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    options?: ExperimentsGetOptionalParams,
  ): Promise<ExperimentsGetResponse>;
  /**
   * Creates or updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment resource
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExperimentsCreateOrUpdateResponse>,
      ExperimentsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment resource
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams,
  ): Promise<ExperimentsCreateOrUpdateResponse>;
  /**
   * Updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment Update Model
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: ExperimentUpdateModel,
    options?: ExperimentsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExperimentsUpdateResponse>,
      ExperimentsUpdateResponse
    >
  >;
  /**
   * Updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment Update Model
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: ExperimentUpdateModel,
    options?: ExperimentsUpdateOptionalParams,
  ): Promise<ExperimentsUpdateResponse>;
  /**
   * Deletes an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams,
  ): Promise<void>;
}
