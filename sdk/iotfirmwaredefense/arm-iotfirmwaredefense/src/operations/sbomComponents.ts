/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { SbomComponents } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { IoTFirmwareDefenseClient } from "../ioTFirmwareDefenseClient.js";
import {
  SbomComponentResource,
  SbomComponentsListByFirmwareNextOptionalParams,
  SbomComponentsListByFirmwareOptionalParams,
  SbomComponentsListByFirmwareResponse,
  SbomComponentsListByFirmwareNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing SbomComponents operations. */
export class SbomComponentsImpl implements SbomComponents {
  private readonly client: IoTFirmwareDefenseClient;

  /**
   * Initialize a new instance of the class SbomComponents class.
   * @param client Reference to the service client
   */
  constructor(client: IoTFirmwareDefenseClient) {
    this.client = client;
  }

  /**
   * Lists SBOM analysis results of a firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  public listByFirmware(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: SbomComponentsListByFirmwareOptionalParams,
  ): PagedAsyncIterableIterator<SbomComponentResource> {
    const iter = this.listByFirmwarePagingAll(
      resourceGroupName,
      workspaceName,
      firmwareId,
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
        return this.listByFirmwarePagingPage(
          resourceGroupName,
          workspaceName,
          firmwareId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByFirmwarePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: SbomComponentsListByFirmwareOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SbomComponentResource[]> {
    let result: SbomComponentsListByFirmwareResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByFirmware(
        resourceGroupName,
        workspaceName,
        firmwareId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByFirmwareNext(
        resourceGroupName,
        workspaceName,
        firmwareId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByFirmwarePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: SbomComponentsListByFirmwareOptionalParams,
  ): AsyncIterableIterator<SbomComponentResource> {
    for await (const page of this.listByFirmwarePagingPage(
      resourceGroupName,
      workspaceName,
      firmwareId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists SBOM analysis results of a firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  private _listByFirmware(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: SbomComponentsListByFirmwareOptionalParams,
  ): Promise<SbomComponentsListByFirmwareResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, options },
      listByFirmwareOperationSpec,
    );
  }

  /**
   * ListByFirmwareNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param nextLink The nextLink from the previous successful call to the ListByFirmware method.
   * @param options The options parameters.
   */
  private _listByFirmwareNext(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    nextLink: string,
    options?: SbomComponentsListByFirmwareNextOptionalParams,
  ): Promise<SbomComponentsListByFirmwareNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, firmwareId, nextLink, options },
      listByFirmwareNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFirmwareOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}/sbomComponents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SbomComponentListResult,
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
const listByFirmwareNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SbomComponentListResult,
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
    Parameters.firmwareId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
