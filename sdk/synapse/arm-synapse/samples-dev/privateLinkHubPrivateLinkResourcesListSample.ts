/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get all private link resources for a private link hub
 *
 * @summary Get all private link resources for a private link hub
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/ListPrivateLinkHubPrivateLinkResources.json
 */
async function getPrivateLinkResourcesForPrivateLinkHub(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "ExampleResourceGroup";
  const privateLinkHubName = "ExamplePrivateLinkHub";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.privateLinkHubPrivateLinkResources.list(
    resourceGroupName,
    privateLinkHubName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getPrivateLinkResourcesForPrivateLinkHub();
}

main().catch(console.error);
