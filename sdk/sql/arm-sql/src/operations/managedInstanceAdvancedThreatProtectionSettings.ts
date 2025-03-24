/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ManagedInstanceAdvancedThreatProtectionSettings } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SqlManagementClient } from "../sqlManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ManagedInstanceAdvancedThreatProtection,
  ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceNextOptionalParams,
  ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceOptionalParams,
  ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceResponse,
  AdvancedThreatProtectionName,
  ManagedInstanceAdvancedThreatProtectionSettingsGetOptionalParams,
  ManagedInstanceAdvancedThreatProtectionSettingsGetResponse,
  ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse,
  ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedInstanceAdvancedThreatProtectionSettings operations. */
export class ManagedInstanceAdvancedThreatProtectionSettingsImpl
  implements ManagedInstanceAdvancedThreatProtectionSettings
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedInstanceAdvancedThreatProtectionSettings class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Get the managed instance's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceOptionalParams,
  ): PagedAsyncIterableIterator<ManagedInstanceAdvancedThreatProtection> {
    const iter = this.listByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
      options,
    );
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
        return this.listByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ManagedInstanceAdvancedThreatProtection[]> {
    let result: ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInstance(
        resourceGroupName,
        managedInstanceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceOptionalParams,
  ): AsyncIterableIterator<ManagedInstanceAdvancedThreatProtection> {
    for await (const page of this.listByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the managed instance's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceOptionalParams,
  ): Promise<ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByInstanceOperationSpec,
    );
  }

  /**
   * Get a managed instance's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsGetOptionalParams,
  ): Promise<ManagedInstanceAdvancedThreatProtectionSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        advancedThreatProtectionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The managed instance Advanced Threat Protection state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: ManagedInstanceAdvancedThreatProtection,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse>,
      ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        managedInstanceName,
        advancedThreatProtectionName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse,
      OperationState<ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The managed instance Advanced Threat Protection state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: ManagedInstanceAdvancedThreatProtection,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<ManagedInstanceAdvancedThreatProtectionSettingsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      advancedThreatProtectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  private _listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceNextOptionalParams,
  ): Promise<ManagedInstanceAdvancedThreatProtectionSettingsListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByInstanceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/advancedThreatProtectionSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtectionListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtection,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtection,
    },
    201: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtection,
    },
    202: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtection,
    },
    204: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtection,
    },
    default: {},
  },
  requestBody: Parameters.parameters77,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAdvancedThreatProtectionListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
