/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Configuration } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventHubManagementClient } from "../eventHubManagementClient";
import {
  ClusterQuotaConfigurationProperties,
  ConfigurationPatchOptionalParams,
  ConfigurationPatchResponse,
  ConfigurationGetOptionalParams,
  ConfigurationGetResponse
} from "../models";

/** Class containing Configuration operations. */
export class ConfigurationImpl implements Configuration {
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class Configuration class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Replace all specified Event Hubs Cluster settings with those contained in the request body. Leaves
   * the settings not specified in the request body unmodified.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param parameters Parameters for creating an Event Hubs Cluster resource.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterQuotaConfigurationProperties,
    options?: ConfigurationPatchOptionalParams
  ): Promise<ConfigurationPatchResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, parameters, options },
      patchOperationSpec
    );
  }

  /**
   * Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and
   * settings imposed on the cluster.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationGetOptionalParams
  ): Promise<ConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const patchOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/quotaConfiguration/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterQuotaConfigurationProperties
    },
    201: {
      bodyMapper: Mappers.ClusterQuotaConfigurationProperties
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/quotaConfiguration/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterQuotaConfigurationProperties
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
