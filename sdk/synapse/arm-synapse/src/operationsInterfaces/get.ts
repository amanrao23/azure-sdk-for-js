/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GetIntegrationRuntimeStartOptionalParams,
  GetIntegrationRuntimeStartResponse,
  GetIntegrationRuntimeStopOptionalParams,
  GetIntegrationRuntimeStopResponse,
  GetIntegrationRuntimeEnableInteractivequeryOptionalParams,
  GetIntegrationRuntimeEnableInteractivequeryResponse
} from "../models/index.js";

/** Interface representing a Get. */
export interface Get {
  /**
   * Get an integration runtime start operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntimeOperationId Integration runtime Operation Id
   * @param options The options parameters.
   */
  integrationRuntimeStart(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    integrationRuntimeOperationId: string,
    options?: GetIntegrationRuntimeStartOptionalParams
  ): Promise<GetIntegrationRuntimeStartResponse>;
  /**
   * Get an integration runtime stop operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntimeOperationId Integration runtime Operation Id
   * @param options The options parameters.
   */
  integrationRuntimeStop(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    integrationRuntimeOperationId: string,
    options?: GetIntegrationRuntimeStopOptionalParams
  ): Promise<GetIntegrationRuntimeStopResponse>;
  /**
   * Get an integration runtime enable interactivequery operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntimeOperationId Integration runtime Operation Id
   * @param options The options parameters.
   */
  integrationRuntimeEnableInteractivequery(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    integrationRuntimeOperationId: string,
    options?: GetIntegrationRuntimeEnableInteractivequeryOptionalParams
  ): Promise<GetIntegrationRuntimeEnableInteractivequeryResponse>;
}
