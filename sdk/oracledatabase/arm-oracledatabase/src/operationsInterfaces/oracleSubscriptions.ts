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
  OracleSubscription,
  OracleSubscriptionsListBySubscriptionOptionalParams,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsGetResponse,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsCreateOrUpdateResponse,
  OracleSubscriptionUpdate,
  OracleSubscriptionsUpdateOptionalParams,
  OracleSubscriptionsUpdateResponse,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsDeleteResponse,
  OracleSubscriptionsListActivationLinksOptionalParams,
  OracleSubscriptionsListActivationLinksResponse,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsResponse,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OracleSubscriptions. */
export interface OracleSubscriptions {
  /**
   * List OracleSubscription resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<OracleSubscription>;
  /**
   * Get a OracleSubscription
   * @param options The options parameters.
   */
  get(
    options?: OracleSubscriptionsGetOptionalParams,
  ): Promise<OracleSubscriptionsGetResponse>;
  /**
   * Create a OracleSubscription
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsCreateOrUpdateResponse>,
      OracleSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a OracleSubscription
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<OracleSubscriptionsCreateOrUpdateResponse>;
  /**
   * Update a OracleSubscription
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsUpdateResponse>,
      OracleSubscriptionsUpdateResponse
    >
  >;
  /**
   * Update a OracleSubscription
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ): Promise<OracleSubscriptionsUpdateResponse>;
  /**
   * Delete a OracleSubscription
   * @param options The options parameters.
   */
  beginDelete(
    options?: OracleSubscriptionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsDeleteResponse>,
      OracleSubscriptionsDeleteResponse
    >
  >;
  /**
   * Delete a OracleSubscription
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    options?: OracleSubscriptionsDeleteOptionalParams,
  ): Promise<OracleSubscriptionsDeleteResponse>;
  /**
   * List Activation Links
   * @param options The options parameters.
   */
  beginListActivationLinks(
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsListActivationLinksResponse>,
      OracleSubscriptionsListActivationLinksResponse
    >
  >;
  /**
   * List Activation Links
   * @param options The options parameters.
   */
  beginListActivationLinksAndWait(
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ): Promise<OracleSubscriptionsListActivationLinksResponse>;
  /**
   * List Cloud Account Details
   * @param options The options parameters.
   */
  beginListCloudAccountDetails(
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsListCloudAccountDetailsResponse>,
      OracleSubscriptionsListCloudAccountDetailsResponse
    >
  >;
  /**
   * List Cloud Account Details
   * @param options The options parameters.
   */
  beginListCloudAccountDetailsAndWait(
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ): Promise<OracleSubscriptionsListCloudAccountDetailsResponse>;
  /**
   * List Saas Subscription Details
   * @param options The options parameters.
   */
  beginListSaasSubscriptionDetails(
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsListSaasSubscriptionDetailsResponse>,
      OracleSubscriptionsListSaasSubscriptionDetailsResponse
    >
  >;
  /**
   * List Saas Subscription Details
   * @param options The options parameters.
   */
  beginListSaasSubscriptionDetailsAndWait(
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ): Promise<OracleSubscriptionsListSaasSubscriptionDetailsResponse>;
}
