/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SbomComponentResource,
  SbomComponentsListByFirmwareOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SbomComponents. */
export interface SbomComponents {
  /**
   * Lists SBOM analysis results of a firmware.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the firmware analysis workspace.
   * @param firmwareId The id of the firmware.
   * @param options The options parameters.
   */
  listByFirmware(
    resourceGroupName: string,
    workspaceName: string,
    firmwareId: string,
    options?: SbomComponentsListByFirmwareOptionalParams,
  ): PagedAsyncIterableIterator<SbomComponentResource>;
}
