/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import { SerialPortsImpl } from "./operations";
import { SerialPorts } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  MicrosoftSerialConsoleClientOptionalParams,
  ListOperationsOptionalParams,
  ListOperationsResponse,
  GetConsoleStatusOptionalParams,
  GetConsoleStatusResponse,
  DisableConsoleOptionalParams,
  DisableConsoleResponse,
  EnableConsoleOptionalParams,
  EnableConsoleResponse
} from "./models";

export class MicrosoftSerialConsoleClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the MicrosoftSerialConsoleClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription ID which uniquely identifies the Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call requiring it.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MicrosoftSerialConsoleClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MicrosoftSerialConsoleClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-serialconsole/2.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2018-05-01";
    this.serialPorts = new SerialPortsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Gets a list of Serial Console API operations.
   * @param options The options parameters.
   */
  listOperations(
    options?: ListOperationsOptionalParams
  ): Promise<ListOperationsResponse> {
    return this.sendOperationRequest({ options }, listOperationsOperationSpec);
  }

  /**
   * Gets whether or not Serial Console is disabled for a given subscription
   * @param defaultParam Default parameter. Leave the value as "default".
   * @param options The options parameters.
   */
  getConsoleStatus(
    defaultParam: string,
    options?: GetConsoleStatusOptionalParams
  ): Promise<GetConsoleStatusResponse> {
    return this.sendOperationRequest(
      { defaultParam, options },
      getConsoleStatusOperationSpec
    );
  }

  /**
   * Disables the Serial Console service for all VMs and VM scale sets in the provided subscription
   * @param defaultParam Default parameter. Leave the value as "default".
   * @param options The options parameters.
   */
  disableConsole(
    defaultParam: string,
    options?: DisableConsoleOptionalParams
  ): Promise<DisableConsoleResponse> {
    return this.sendOperationRequest(
      { defaultParam, options },
      disableConsoleOperationSpec
    );
  }

  /**
   * Enables the Serial Console service for all VMs and VM scale sets in the provided subscription
   * @param defaultParam Default parameter. Leave the value as "default".
   * @param options The options parameters.
   */
  enableConsole(
    defaultParam: string,
    options?: EnableConsoleOptionalParams
  ): Promise<EnableConsoleResponse> {
    return this.sendOperationRequest(
      { defaultParam, options },
      enableConsoleOperationSpec
    );
  }

  serialPorts: SerialPorts;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.SerialConsole/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SerialConsoleOperations
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getConsoleStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SerialConsoleStatus
    },
    404: {
      bodyMapper: Mappers.GetSerialConsoleSubscriptionNotFound
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.defaultParam
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableConsoleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/disableConsole",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DisableSerialConsoleResult
    },
    404: {
      bodyMapper: Mappers.GetSerialConsoleSubscriptionNotFound
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.defaultParam
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enableConsoleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/enableConsole",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EnableSerialConsoleResult
    },
    404: {
      bodyMapper: Mappers.GetSerialConsoleSubscriptionNotFound
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.defaultParam
  ],
  headerParameters: [Parameters.accept],
  serializer
};
