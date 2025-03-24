/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { HardwareComponentGroups } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorSimple8000SeriesManagementClient } from "../storSimple8000SeriesManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  HardwareComponentGroup,
  HardwareComponentGroupsListByDeviceOptionalParams,
  HardwareComponentGroupsListByDeviceResponse,
  ControllerPowerStateChangeRequest,
  HardwareComponentGroupsChangeControllerPowerStateOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing HardwareComponentGroups operations. */
export class HardwareComponentGroupsImpl implements HardwareComponentGroups {
  private readonly client: StorSimple8000SeriesManagementClient;

  /**
   * Initialize a new instance of the class HardwareComponentGroups class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimple8000SeriesManagementClient) {
    this.client = client;
  }

  /**
   * Lists the hardware component groups at device-level.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: HardwareComponentGroupsListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<HardwareComponentGroup> {
    const iter = this.listByDevicePagingAll(
      deviceName,
      resourceGroupName,
      managerName,
      options
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
        return this.listByDevicePagingPage(
          deviceName,
          resourceGroupName,
          managerName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: HardwareComponentGroupsListByDeviceOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<HardwareComponentGroup[]> {
    let result: HardwareComponentGroupsListByDeviceResponse;
    result = await this._listByDevice(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: HardwareComponentGroupsListByDeviceOptionalParams
  ): AsyncIterableIterator<HardwareComponentGroup> {
    for await (const page of this.listByDevicePagingPage(
      deviceName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the hardware component groups at device-level.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: HardwareComponentGroupsListByDeviceOptionalParams
  ): Promise<HardwareComponentGroupsListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Changes the power state of the controller.
   * @param deviceName The device name
   * @param hardwareComponentGroupName The hardware component group name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The controller power state change request.
   * @param options The options parameters.
   */
  async beginChangeControllerPowerState(
    deviceName: string,
    hardwareComponentGroupName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: ControllerPowerStateChangeRequest,
    options?: HardwareComponentGroupsChangeControllerPowerStateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      {
        deviceName,
        hardwareComponentGroupName,
        resourceGroupName,
        managerName,
        parameters,
        options
      },
      changeControllerPowerStateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Changes the power state of the controller.
   * @param deviceName The device name
   * @param hardwareComponentGroupName The hardware component group name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The controller power state change request.
   * @param options The options parameters.
   */
  async beginChangeControllerPowerStateAndWait(
    deviceName: string,
    hardwareComponentGroupName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: ControllerPowerStateChangeRequest,
    options?: HardwareComponentGroupsChangeControllerPowerStateOptionalParams
  ): Promise<void> {
    const poller = await this.beginChangeControllerPowerState(
      deviceName,
      hardwareComponentGroupName,
      resourceGroupName,
      managerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/hardwareComponentGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HardwareComponentGroupList
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const changeControllerPowerStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/hardwareComponentGroups/{hardwareComponentGroupName}/changeControllerPowerState",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.parameters19,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.hardwareComponentGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
