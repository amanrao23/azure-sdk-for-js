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
  Schedule,
  SchedulesListByLabOptionalParams,
  SchedulesGetOptionalParams,
  SchedulesGetResponse,
  SchedulesCreateOrUpdateOptionalParams,
  SchedulesCreateOrUpdateResponse,
  ScheduleUpdate,
  SchedulesUpdateOptionalParams,
  SchedulesUpdateResponse,
  SchedulesDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Schedules. */
export interface Schedules {
  /**
   * Returns a list of all schedules for a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param options The options parameters.
   */
  listByLab(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListByLabOptionalParams
  ): PagedAsyncIterableIterator<Schedule>;
  /**
   * Returns the properties of a lab Schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    options?: SchedulesGetOptionalParams
  ): Promise<SchedulesGetResponse>;
  /**
   * Operation to create or update a lab schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    body: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams
  ): Promise<SchedulesCreateOrUpdateResponse>;
  /**
   * Operation to update a lab schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    body: ScheduleUpdate,
    options?: SchedulesUpdateOptionalParams
  ): Promise<SchedulesUpdateResponse>;
  /**
   * Operation to delete a schedule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    options?: SchedulesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Operation to delete a schedule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    options?: SchedulesDeleteOptionalParams
  ): Promise<void>;
}
