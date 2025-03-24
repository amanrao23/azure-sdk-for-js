/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LongRunningBackup } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MySQLManagementFlexibleServerClient } from "../mySQLManagementFlexibleServerClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  LongRunningBackupCreateOptionalParams,
  LongRunningBackupCreateResponse,
} from "../models/index.js";

/** Class containing LongRunningBackup operations. */
export class LongRunningBackupImpl implements LongRunningBackup {
  private readonly client: MySQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class LongRunningBackup class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Create backup for a given server with specified backup name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: LongRunningBackupCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LongRunningBackupCreateResponse>,
      LongRunningBackupCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<LongRunningBackupCreateResponse> => {
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
      args: { resourceGroupName, serverName, backupName, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      LongRunningBackupCreateResponse,
      OperationState<LongRunningBackupCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create backup for a given server with specified backup name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: LongRunningBackupCreateOptionalParams,
  ): Promise<LongRunningBackupCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      serverName,
      backupName,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backupsV2/{backupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerBackupV2,
    },
    201: {
      bodyMapper: Mappers.ServerBackupV2,
    },
    202: {
      bodyMapper: Mappers.ServerBackupV2,
    },
    204: {
      bodyMapper: Mappers.ServerBackupV2,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.backupName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
