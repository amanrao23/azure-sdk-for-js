/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LogicManagementClient } from "@azure/arm-logic";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the integration service environment network health.
 *
 * @summary Gets the integration service environment network health.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationServiceEnvironments_NetworkHealth.json
 */
async function getsTheIntegrationServiceEnvironmentNetworkHealth(): Promise<void> {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] ||
    "f34b22a3-2202-4fb1-b040-1332bd928c84";
  const resourceGroup = "testResourceGroup";
  const integrationServiceEnvironmentName = "testIntegrationServiceEnvironment";
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationServiceEnvironmentNetworkHealth.get(
    resourceGroup,
    integrationServiceEnvironmentName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getsTheIntegrationServiceEnvironmentNetworkHealth();
}

main().catch(console.error);
