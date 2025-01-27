/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TopicTypeInfo,
  TopicTypesListOptionalParams,
  EventType,
  TopicTypesListEventTypesOptionalParams,
  TopicTypesGetOptionalParams,
  TopicTypesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TopicTypes. */
export interface TopicTypes {
  /**
   * List all registered topic types.
   * @param options The options parameters.
   */
  list(
    options?: TopicTypesListOptionalParams,
  ): PagedAsyncIterableIterator<TopicTypeInfo>;
  /**
   * List event types for a topic type.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  listEventTypes(
    topicTypeName: string,
    options?: TopicTypesListEventTypesOptionalParams,
  ): PagedAsyncIterableIterator<EventType>;
  /**
   * Get information about a topic type.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  get(
    topicTypeName: string,
    options?: TopicTypesGetOptionalParams,
  ): Promise<TopicTypesGetResponse>;
}
