/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ServiceLinkerManagementClient } from "@azure/arm-servicelinker";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to get a dryrun job
 *
 * @summary get a dryrun job
 * x-ms-original-file: specification/servicelinker/resource-manager/Microsoft.ServiceLinker/preview/2024-07-01-preview/examples/ConnectorDryrunGet.json
 */
async function connectorDryrunGet(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SERVICELINKER_RESOURCE_GROUP"] || "test-rg";
  const location = "westus";
  const dryrunName = "dryrunName";
  const credential = new DefaultAzureCredential();
  const client = new ServiceLinkerManagementClient(credential);
  const result = await client.connector.getDryrun(
    subscriptionId,
    resourceGroupName,
    location,
    dryrunName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await connectorDryrunGet();
}

main().catch(console.error);
