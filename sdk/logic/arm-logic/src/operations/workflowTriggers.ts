/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { WorkflowTriggers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { LogicManagementClient } from "../logicManagementClient.js";
import {
  WorkflowTrigger,
  WorkflowTriggersListNextOptionalParams,
  WorkflowTriggersListOptionalParams,
  WorkflowTriggersListResponse,
  WorkflowTriggersGetOptionalParams,
  WorkflowTriggersGetResponse,
  WorkflowTriggersResetOptionalParams,
  WorkflowTriggersRunOptionalParams,
  WorkflowTriggersGetSchemaJsonOptionalParams,
  WorkflowTriggersGetSchemaJsonResponse,
  SetTriggerStateActionDefinition,
  WorkflowTriggersSetStateOptionalParams,
  WorkflowTriggersListCallbackUrlOptionalParams,
  WorkflowTriggersListCallbackUrlResponse,
  WorkflowTriggersListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkflowTriggers operations. */
export class WorkflowTriggersImpl implements WorkflowTriggers {
  private readonly client: LogicManagementClient;

  /**
   * Initialize a new instance of the class WorkflowTriggers class.
   * @param client Reference to the service client
   */
  constructor(client: LogicManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of workflow triggers.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workflowName: string,
    options?: WorkflowTriggersListOptionalParams
  ): PagedAsyncIterableIterator<WorkflowTrigger> {
    const iter = this.listPagingAll(resourceGroupName, workflowName, options);
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
          workflowName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workflowName: string,
    options?: WorkflowTriggersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<WorkflowTrigger[]> {
    let result: WorkflowTriggersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workflowName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workflowName,
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
    workflowName: string,
    options?: WorkflowTriggersListOptionalParams
  ): AsyncIterableIterator<WorkflowTrigger> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workflowName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of workflow triggers.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workflowName: string,
    options?: WorkflowTriggersListOptionalParams
  ): Promise<WorkflowTriggersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersGetOptionalParams
  ): Promise<WorkflowTriggersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, triggerName, options },
      getOperationSpec
    );
  }

  /**
   * Resets a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The options parameters.
   */
  reset(
    resourceGroupName: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersResetOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, triggerName, options },
      resetOperationSpec
    );
  }

  /**
   * Runs a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The options parameters.
   */
  run(
    resourceGroupName: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersRunOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, triggerName, options },
      runOperationSpec
    );
  }

  /**
   * Get the trigger schema as JSON.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The options parameters.
   */
  getSchemaJson(
    resourceGroupName: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersGetSchemaJsonOptionalParams
  ): Promise<WorkflowTriggersGetSchemaJsonResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, triggerName, options },
      getSchemaJsonOperationSpec
    );
  }

  /**
   * Sets the state of a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param setState The workflow trigger state.
   * @param options The options parameters.
   */
  setState(
    resourceGroupName: string,
    workflowName: string,
    triggerName: string,
    setState: SetTriggerStateActionDefinition,
    options?: WorkflowTriggersSetStateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, triggerName, setState, options },
      setStateOperationSpec
    );
  }

  /**
   * Get the callback URL for a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The options parameters.
   */
  listCallbackUrl(
    resourceGroupName: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersListCallbackUrlOptionalParams
  ): Promise<WorkflowTriggersListCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, triggerName, options },
      listCallbackUrlOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workflowName: string,
    nextLink: string,
    options?: WorkflowTriggersListNextOptionalParams
  ): Promise<WorkflowTriggersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workflowName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTrigger
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
    Parameters.workflowName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resetOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/reset",
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
    Parameters.workflowName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const runOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/run",
  httpMethod: "POST",
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSchemaJsonOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/schemas/json",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JsonSchema
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
    Parameters.workflowName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const setStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/setState",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.setState,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listCallbackUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/listCallbackUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerCallbackUrl
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
    Parameters.workflowName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
