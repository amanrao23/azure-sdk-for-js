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
  Input,
  InputsListByStreamingJobOptionalParams,
  InputsCreateOrReplaceOptionalParams,
  InputsCreateOrReplaceResponse,
  InputsUpdateOptionalParams,
  InputsUpdateResponse,
  InputsDeleteOptionalParams,
  InputsGetOptionalParams,
  InputsGetResponse,
  InputsTestOptionalParams,
  InputsTestResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Inputs. */
export interface Inputs {
  /**
   * Lists all of the inputs under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  listByStreamingJob(
    resourceGroupName: string,
    jobName: string,
    options?: InputsListByStreamingJobOptionalParams,
  ): PagedAsyncIterableIterator<Input>;
  /**
   * Creates an input or replaces an already existing input under an existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param input The definition of the input that will be used to create a new input or replace the
   *              existing one under the streaming job.
   * @param options The options parameters.
   */
  createOrReplace(
    resourceGroupName: string,
    jobName: string,
    inputName: string,
    input: Input,
    options?: InputsCreateOrReplaceOptionalParams,
  ): Promise<InputsCreateOrReplaceResponse>;
  /**
   * Updates an existing input under an existing streaming job. This can be used to partially update (ie.
   * update one or two properties) an input without affecting the rest the job or input definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param input An Input object. The properties specified here will overwrite the corresponding
   *              properties in the existing input (ie. Those properties will be updated). Any properties that are set
   *              to null here will mean that the corresponding property in the existing input will remain the same
   *              and not change as a result of this PATCH operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    jobName: string,
    inputName: string,
    input: Input,
    options?: InputsUpdateOptionalParams,
  ): Promise<InputsUpdateResponse>;
  /**
   * Deletes an input from the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    jobName: string,
    inputName: string,
    options?: InputsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets details about the specified input.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    inputName: string,
    options?: InputsGetOptionalParams,
  ): Promise<InputsGetResponse>;
  /**
   * Tests whether an input’s datasource is reachable and usable by the Azure Stream Analytics service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The options parameters.
   */
  beginTest(
    resourceGroupName: string,
    jobName: string,
    inputName: string,
    options?: InputsTestOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<InputsTestResponse>, InputsTestResponse>
  >;
  /**
   * Tests whether an input’s datasource is reachable and usable by the Azure Stream Analytics service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The options parameters.
   */
  beginTestAndWait(
    resourceGroupName: string,
    jobName: string,
    inputName: string,
    options?: InputsTestOptionalParams,
  ): Promise<InputsTestResponse>;
}
