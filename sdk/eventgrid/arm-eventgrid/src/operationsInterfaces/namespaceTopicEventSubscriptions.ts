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
  Subscription,
  NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
  NamespaceTopicEventSubscriptionsGetOptionalParams,
  NamespaceTopicEventSubscriptionsGetResponse,
  NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  NamespaceTopicEventSubscriptionsCreateOrUpdateResponse,
  NamespaceTopicEventSubscriptionsDeleteOptionalParams,
  SubscriptionUpdateParameters,
  NamespaceTopicEventSubscriptionsUpdateOptionalParams,
  NamespaceTopicEventSubscriptionsUpdateResponse,
  NamespaceTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  NamespaceTopicEventSubscriptionsGetDeliveryAttributesResponse,
  NamespaceTopicEventSubscriptionsGetFullUrlOptionalParams,
  NamespaceTopicEventSubscriptionsGetFullUrlResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NamespaceTopicEventSubscriptions. */
export interface NamespaceTopicEventSubscriptions {
  /**
   * List event subscriptions that belong to a specific namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param options The options parameters.
   */
  listByNamespaceTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
  ): PagedAsyncIterableIterator<Subscription>;
  /**
   * Get properties of an event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be found.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetOptionalParams,
  ): Promise<NamespaceTopicEventSubscriptionsGetResponse>;
  /**
   * Asynchronously creates or updates an event subscription of a namespace topic with the specified
   * parameters. Existing event subscriptions will be updated with this API.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 50 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the delivery mode, filter
   *                              information, and others.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: Subscription,
    options?: NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicEventSubscriptionsCreateOrUpdateResponse>,
      NamespaceTopicEventSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates or updates an event subscription of a namespace topic with the specified
   * parameters. Existing event subscriptions will be updated with this API.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 50 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the delivery mode, filter
   *                              information, and others.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: Subscription,
    options?: NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<NamespaceTopicEventSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Update an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: SubscriptionUpdateParameters,
    options?: NamespaceTopicEventSubscriptionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicEventSubscriptionsUpdateResponse>,
      NamespaceTopicEventSubscriptionsUpdateResponse
    >
  >;
  /**
   * Update an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: SubscriptionUpdateParameters,
    options?: NamespaceTopicEventSubscriptionsUpdateOptionalParams,
  ): Promise<NamespaceTopicEventSubscriptionsUpdateResponse>;
  /**
   * Get all delivery attributes for an event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ): Promise<NamespaceTopicEventSubscriptionsGetDeliveryAttributesResponse>;
  /**
   * Get the full endpoint URL for an event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetFullUrlOptionalParams,
  ): Promise<NamespaceTopicEventSubscriptionsGetFullUrlResponse>;
}
