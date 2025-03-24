/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MetricsOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MonitorClient } from "../monitorClient.js";
import {
  MetricsListAtSubscriptionScopeOptionalParams,
  MetricsListAtSubscriptionScopeResponse,
  MetricsListAtSubscriptionScopePostOptionalParams,
  MetricsListAtSubscriptionScopePostResponse,
  MetricsListOptionalParams,
  MetricsListResponse,
} from "../models/index.js";

/** Class containing MetricsOperations operations. */
export class MetricsOperationsImpl implements MetricsOperations {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class MetricsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * **Lists the metric data for a subscription**.
   * @param region The region where the metrics you want reside.
   * @param options The options parameters.
   */
  listAtSubscriptionScope(
    region: string,
    options?: MetricsListAtSubscriptionScopeOptionalParams,
  ): Promise<MetricsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { region, options },
      listAtSubscriptionScopeOperationSpec,
    );
  }

  /**
   * **Lists the metric data for a subscription**. Parameters can be specified on either query params or
   * the body.
   * @param region The region where the metrics you want reside.
   * @param options The options parameters.
   */
  listAtSubscriptionScopePost(
    region: string,
    options?: MetricsListAtSubscriptionScopePostOptionalParams,
  ): Promise<MetricsListAtSubscriptionScopePostResponse> {
    return this.client.sendOperationRequest(
      { region, options },
      listAtSubscriptionScopePostOperationSpec,
    );
  }

  /**
   * **Lists the metric values for a resource**.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: MetricsListOptionalParams,
  ): Promise<MetricsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Response,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.region,
    Parameters.metricnamespace,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType,
    Parameters.autoAdjustTimegrain,
    Parameters.validateDimensions,
    Parameters.rollupby,
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAtSubscriptionScopePostOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/metrics",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Response,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [
    Parameters.apiVersion,
    Parameters.region,
    Parameters.metricnamespace,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType,
    Parameters.autoAdjustTimegrain,
    Parameters.validateDimensions,
    Parameters.rollupby,
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Response,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.metricnamespace,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.autoAdjustTimegrain,
    Parameters.validateDimensions,
    Parameters.rollupby,
    Parameters.resultType1,
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
