/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { OperationsManagementClient } from "@azure/arm-operations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves the user ManagementConfiguration.
 *
 * @summary Retrieves the user ManagementConfiguration.
 * x-ms-original-file: specification/operationsmanagement/resource-manager/Microsoft.OperationsManagement/preview/2015-11-01-preview/examples/ManagementConfigurationGet.json
 */
async function solutionGet(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const managementConfigurationName = "managementConfigurationName";
  const credential = new DefaultAzureCredential();
  const client = new OperationsManagementClient(credential, subscriptionId);
  const result = await client.managementConfigurations.get(
    resourceGroupName,
    managementConfigurationName,
  );
  console.log(result);
}

solutionGet().catch(console.error);
