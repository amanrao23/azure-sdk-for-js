/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NetworkSecurityPerimeterConfigurationOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { EventHubManagementClient } from "../eventHubManagementClient.js";
import {
  NetworkSecurityPerimeterConfigurationListOptionalParams,
  NetworkSecurityPerimeterConfigurationListResponse,
} from "../models/index.js";

/** Class containing NetworkSecurityPerimeterConfigurationOperations operations. */
export class NetworkSecurityPerimeterConfigurationOperationsImpl
  implements NetworkSecurityPerimeterConfigurationOperations
{
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class NetworkSecurityPerimeterConfigurationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Gets list of current NetworkSecurityPerimeterConfiguration for Namespace
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    namespaceName: string,
    options?: NetworkSecurityPerimeterConfigurationListOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfigurationList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
