/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ConnectorSetting,
  ConnectorsListOptionalParams,
  ConnectorsGetOptionalParams,
  ConnectorsGetResponse,
  ConnectorsCreateOrUpdateOptionalParams,
  ConnectorsCreateOrUpdateResponse,
  ConnectorsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Connectors. */
export interface Connectors {
  /**
   * Cloud accounts connectors of a subscription
   * @param options The options parameters.
   */
  list(
    options?: ConnectorsListOptionalParams,
  ): PagedAsyncIterableIterator<ConnectorSetting>;
  /**
   * Details of a specific cloud account connector
   * @param connectorName Name of the cloud account connector
   * @param options The options parameters.
   */
  get(
    connectorName: string,
    options?: ConnectorsGetOptionalParams,
  ): Promise<ConnectorsGetResponse>;
  /**
   * Create a cloud account connector or update an existing one. Connect to your cloud account. For AWS,
   * use either account credentials or role-based authentication. For GCP, use account organization
   * credentials.
   * @param connectorName Name of the cloud account connector
   * @param connectorSetting Settings for the cloud account connector
   * @param options The options parameters.
   */
  createOrUpdate(
    connectorName: string,
    connectorSetting: ConnectorSetting,
    options?: ConnectorsCreateOrUpdateOptionalParams,
  ): Promise<ConnectorsCreateOrUpdateResponse>;
  /**
   * Delete a cloud account connector from a subscription
   * @param connectorName Name of the cloud account connector
   * @param options The options parameters.
   */
  delete(
    connectorName: string,
    options?: ConnectorsDeleteOptionalParams,
  ): Promise<void>;
}
