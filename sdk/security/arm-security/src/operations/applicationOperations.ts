/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ApplicationOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  ApplicationGetOptionalParams,
  ApplicationGetResponse,
  Application,
  ApplicationCreateOrUpdateOptionalParams,
  ApplicationCreateOrUpdateResponse,
  ApplicationDeleteOptionalParams
} from "../models";

/** Class containing ApplicationOperations operations. */
export class ApplicationOperationsImpl implements ApplicationOperations {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class ApplicationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get a specific application for the requested scope by applicationId
   * @param applicationId The security Application key - unique key for the standard application
   * @param options The options parameters.
   */
  get(
    applicationId: string,
    options?: ApplicationGetOptionalParams
  ): Promise<ApplicationGetResponse> {
    return this.client.sendOperationRequest(
      { applicationId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or update a security application on the given subscription.
   * @param applicationId The security Application key - unique key for the standard application
   * @param application Application over a subscription scope
   * @param options The options parameters.
   */
  createOrUpdate(
    applicationId: string,
    application: Application,
    options?: ApplicationCreateOrUpdateOptionalParams
  ): Promise<ApplicationCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { applicationId, application, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete an Application over a given scope
   * @param applicationId The security Application key - unique key for the standard application
   * @param options The options parameters.
   */
  delete(
    applicationId: string,
    options?: ApplicationDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationId, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/applications/{applicationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion17],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.applicationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/applications/{applicationId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    201: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.application,
  queryParameters: [Parameters.apiVersion17],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.applicationId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/applications/{applicationId}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion17],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.applicationId
  ],
  serializer
};
