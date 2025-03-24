/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { MigrationConfigs } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ServiceBusManagementClient } from "../serviceBusManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  MigrationConfigProperties,
  MigrationConfigsListNextOptionalParams,
  MigrationConfigsListOptionalParams,
  MigrationConfigsListResponse,
  MigrationConfigurationName,
  MigrationConfigsCreateAndStartMigrationOptionalParams,
  MigrationConfigsCreateAndStartMigrationResponse,
  MigrationConfigsDeleteOptionalParams,
  MigrationConfigsGetOptionalParams,
  MigrationConfigsGetResponse,
  MigrationConfigsCompleteMigrationOptionalParams,
  MigrationConfigsRevertOptionalParams,
  MigrationConfigsListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing MigrationConfigs operations. */
export class MigrationConfigsImpl implements MigrationConfigs {
  private readonly client: ServiceBusManagementClient;

  /**
   * Initialize a new instance of the class MigrationConfigs class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceBusManagementClient) {
    this.client = client;
  }

  /**
   * Gets all migrationConfigurations
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    namespaceName: string,
    options?: MigrationConfigsListOptionalParams
  ): PagedAsyncIterableIterator<MigrationConfigProperties> {
    const iter = this.listPagingAll(resourceGroupName, namespaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          namespaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: MigrationConfigsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<MigrationConfigProperties[]> {
    let result: MigrationConfigsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, namespaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: MigrationConfigsListOptionalParams
  ): AsyncIterableIterator<MigrationConfigProperties> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      namespaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all migrationConfigurations
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    namespaceName: string,
    options?: MigrationConfigsListOptionalParams
  ): Promise<MigrationConfigsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listOperationSpec
    );
  }

  /**
   * Creates Migration configuration and starts migration of entities from Standard to Premium namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param parameters Parameters required to create Migration Configuration
   * @param options The options parameters.
   */
  async beginCreateAndStartMigration(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    parameters: MigrationConfigProperties,
    options?: MigrationConfigsCreateAndStartMigrationOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MigrationConfigsCreateAndStartMigrationResponse>,
      MigrationConfigsCreateAndStartMigrationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MigrationConfigsCreateAndStartMigrationResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, namespaceName, configName, parameters, options },
      createAndStartMigrationOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates Migration configuration and starts migration of entities from Standard to Premium namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param parameters Parameters required to create Migration Configuration
   * @param options The options parameters.
   */
  async beginCreateAndStartMigrationAndWait(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    parameters: MigrationConfigProperties,
    options?: MigrationConfigsCreateAndStartMigrationOptionalParams
  ): Promise<MigrationConfigsCreateAndStartMigrationResponse> {
    const poller = await this.beginCreateAndStartMigration(
      resourceGroupName,
      namespaceName,
      configName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a MigrationConfiguration
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, configName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves Migration Config
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsGetOptionalParams
  ): Promise<MigrationConfigsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, configName, options },
      getOperationSpec
    );
  }

  /**
   * This operation Completes Migration of entities by pointing the connection strings to Premium
   * namespace and any entities created after the operation will be under Premium Namespace.
   * CompleteMigration operation will fail when entity migration is in-progress.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  completeMigration(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsCompleteMigrationOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, configName, options },
      completeMigrationOperationSpec
    );
  }

  /**
   * This operation reverts Migration
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  revert(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsRevertOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, configName, options },
      revertOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: MigrationConfigsListNextOptionalParams
  ): Promise<MigrationConfigsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MigrationConfigListResult
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
    Parameters.namespaceName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createAndStartMigrationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MigrationConfigProperties
    },
    201: {
      bodyMapper: Mappers.MigrationConfigProperties
    },
    202: {
      bodyMapper: Mappers.MigrationConfigProperties
    },
    204: {
      bodyMapper: Mappers.MigrationConfigProperties
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MigrationConfigProperties
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
    Parameters.namespaceName1,
    Parameters.configName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const completeMigrationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/upgrade",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const revertOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/revert",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MigrationConfigListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
