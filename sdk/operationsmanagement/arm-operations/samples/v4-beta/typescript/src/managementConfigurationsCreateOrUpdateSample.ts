/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ManagementConfiguration,
  OperationsManagementClient
} from "@azure/arm-operations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the ManagementConfiguration.
 *
 * @summary Creates or updates the ManagementConfiguration.
 * x-ms-original-file: specification/operationsmanagement/resource-manager/Microsoft.OperationsManagement/preview/2015-11-01-preview/examples/ManagementConfigurationCreate.json
 */
async function managementConfigurationCreate(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const managementConfigurationName = "managementConfiguration1";
  const parameters: ManagementConfiguration = { location: "East US" };
  const credential = new DefaultAzureCredential();
  const client = new OperationsManagementClient(credential, subscriptionId);
  const result = await client.managementConfigurations.createOrUpdate(
    resourceGroupName,
    managementConfigurationName,
    parameters
  );
  console.log(result);
}

managementConfigurationCreate().catch(console.error);
