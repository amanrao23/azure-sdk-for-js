/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Firmwares } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { IoTFirmwareDefenseClient } from "../ioTFirmwareDefenseClient.js";
import {
  Firmware,
  FirmwaresListByWorkspaceNextOptionalParams,
  FirmwaresListByWorkspaceOptionalParams,
  FirmwaresListByWorkspaceResponse,
  FirmwaresCreateOptionalParams,
  FirmwaresCreateResponse,
  FirmwareUpdateDefinition,
  FirmwaresUpdateOptionalParams,
  FirmwaresUpdateResponse,
  FirmwaresDeleteOptionalParams,
  FirmwaresGetOptionalParams,
  FirmwaresGetResponse,
  FirmwaresGenerateDownloadUrlOptionalParams,
  FirmwaresGenerateDownloadUrlResponse,
  FirmwaresGenerateFilesystemDownloadUrlOptionalParams,
  FirmwaresGenerateFilesystemDownloadUrlResponse,
  FirmwaresListByWorkspaceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Firmwares operations. */
export class FirmwaresImpl implements Firmwares {
  private readonly client: IoTFirmwareDefenseClient;

  /**
   * Initialize a new instance of the class Firmwares class.
   * @param client Reference to the service client
   */
  constructor(client: IoTFirmwareDefenseClient) {
    this.client = client;
  }

  /**
   * Lists all of firmwares inside a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: FirmwaresListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<Firmware> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: FirmwaresListByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Firmware[]> {
    let result: FirmwaresListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: FirmwaresListByWorkspaceOptionalParams,
  ): AsyncIterableIterator<Firmware> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of firmwares inside a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: FirmwaresListByWorkspaceOptionalParams,
  ): Promise<FirmwaresListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec,
    );
  }

  /**
   * The operation to create a firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param firmware Details of the firmware being created or updated.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    firmware: Firmware,
    options?: FirmwaresCreateOptionalParams,
  ): Promise<FirmwaresCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, firmware, options },
      createOperationSpec,
    );
  }

  /**
   * The operation to update firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param firmware Details of the firmware being created or updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    firmware: FirmwareUpdateDefinition,
    options?: FirmwaresUpdateOptionalParams,
  ): Promise<FirmwaresUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, firmware, options },
      updateOperationSpec,
    );
  }

  /**
   * The operation to delete a firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: FirmwaresDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, options },
      deleteOperationSpec,
    );
  }

  /**
   * Get firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: FirmwaresGetOptionalParams,
  ): Promise<FirmwaresGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, options },
      getOperationSpec,
    );
  }

  /**
   * The operation to a url for file download.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  generateDownloadUrl(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: FirmwaresGenerateDownloadUrlOptionalParams,
  ): Promise<FirmwaresGenerateDownloadUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, options },
      generateDownloadUrlOperationSpec,
    );
  }

  /**
   * The operation to a url for tar file download.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  generateFilesystemDownloadUrl(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: FirmwaresGenerateFilesystemDownloadUrlOptionalParams,
  ): Promise<FirmwaresGenerateFilesystemDownloadUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, options },
      generateFilesystemDownloadUrlOperationSpec,
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: FirmwaresListByWorkspaceNextOptionalParams,
  ): Promise<FirmwaresListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirmwareList,
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
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Firmware,
    },
    201: {
      bodyMapper: Mappers.Firmware,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.firmware,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.firmwareId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Firmware,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.firmware1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.firmwareId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.firmwareId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Firmware,
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
    Parameters.workspaceName,
    Parameters.firmwareId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const generateDownloadUrlOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}/generateDownloadUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UrlToken,
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
    Parameters.workspaceName,
    Parameters.firmwareId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const generateFilesystemDownloadUrlOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}/generateFilesystemDownloadUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UrlToken,
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
    Parameters.workspaceName,
    Parameters.firmwareId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirmwareList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
