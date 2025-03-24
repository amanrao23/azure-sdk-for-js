/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RecoveryServices } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesClient } from "../recoveryServicesClient.js";
import {
  CheckNameAvailabilityParameters,
  RecoveryServicesCheckNameAvailabilityOptionalParams,
  RecoveryServicesCheckNameAvailabilityResponse,
  ResourceCapabilities,
  RecoveryServicesCapabilitiesOptionalParams,
  RecoveryServicesCapabilitiesResponse,
} from "../models/index.js";

/** Class containing RecoveryServices operations. */
export class RecoveryServicesImpl implements RecoveryServices {
  private readonly client: RecoveryServicesClient;

  /**
   * Initialize a new instance of the class RecoveryServices class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesClient) {
    this.client = client;
  }

  /**
   * API to check for resource name availability.
   * A name is available if no other resource exists that has the same SubscriptionId, Resource Name and
   * Type
   * or if one or more such resources exist, each of these must be GC'd and their time of deletion be
   * more than 24 Hours Ago
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location Location of the resource
   * @param input Contains information about Resource type and Resource name
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    location: string,
    input: CheckNameAvailabilityParameters,
    options?: RecoveryServicesCheckNameAvailabilityOptionalParams,
  ): Promise<RecoveryServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, location, input, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * API to get details about capabilities provided by Microsoft.RecoveryServices RP
   * @param location Location of the resource
   * @param input Contains information about Resource type and properties to get capabilities
   * @param options The options parameters.
   */
  capabilities(
    location: string,
    input: ResourceCapabilities,
    options?: RecoveryServicesCapabilitiesOptionalParams,
  ): Promise<RecoveryServicesCapabilitiesResponse> {
    return this.client.sendOperationRequest(
      { location, input, options },
      capabilitiesOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.input,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.location,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const capabilitiesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{location}/capabilities",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.input1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
