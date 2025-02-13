/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SandboxCustomImagesCheckNameRequest } from "@azure/arm-kusto";
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks that the sandbox custom image resource name is valid and is not already in use.
 *
 * @summary Checks that the sandbox custom image resource name is valid and is not already in use.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-08-15/examples/KustoSandboxCustomImagesCheckNameAvailability.json
 */
async function kustoSandboxCustomImagesCheckNameAvailability(): Promise<void> {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const resourceName: SandboxCustomImagesCheckNameRequest = {
    name: "sandboxCustomImage1",
    type: "Microsoft.Kusto/clusters/sandboxCustomImages",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.sandboxCustomImages.checkNameAvailability(
    resourceGroupName,
    clusterName,
    resourceName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await kustoSandboxCustomImagesCheckNameAvailability();
}

main().catch(console.error);
