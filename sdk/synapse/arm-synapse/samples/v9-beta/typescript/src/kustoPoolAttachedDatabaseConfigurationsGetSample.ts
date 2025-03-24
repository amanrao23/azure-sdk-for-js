/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns an attached database configuration.
 *
 * @summary Returns an attached database configuration.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolAttachedDatabaseConfigurationsGet.json
 */
async function kustoPoolAttachedDatabaseConfigurationsGet(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const workspaceName = "kustorptest";
  const kustoPoolName = "kustoclusterrptest4";
  const attachedDatabaseConfigurationName = "attachedDatabaseConfigurations1";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "kustorptest";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolAttachedDatabaseConfigurations.get(
    workspaceName,
    kustoPoolName,
    attachedDatabaseConfigurationName,
    resourceGroupName
  );
  console.log(result);
}

async function main(): Promise<void> {
  kustoPoolAttachedDatabaseConfigurationsGet();
}

main().catch(console.error);
