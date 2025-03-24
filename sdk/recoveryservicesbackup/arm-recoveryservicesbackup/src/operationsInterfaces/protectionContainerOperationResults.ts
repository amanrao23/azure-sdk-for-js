/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ProtectionContainerOperationResultsGetOptionalParams,
  ProtectionContainerOperationResultsGetResponse,
} from "../models/index.js";

/** Interface representing a ProtectionContainerOperationResults. */
export interface ProtectionContainerOperationResults {
  /**
   * Fetches the result of any operation on the container.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Container name whose information should be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    operationId: string,
    options?: ProtectionContainerOperationResultsGetOptionalParams,
  ): Promise<ProtectionContainerOperationResultsGetResponse>;
}
