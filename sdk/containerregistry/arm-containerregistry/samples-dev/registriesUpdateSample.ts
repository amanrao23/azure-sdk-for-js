/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RegistryUpdateParameters,
  ContainerRegistryManagementClient,
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a container registry with the specified parameters.
 *
 * @summary Updates a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2024-11-01-preview/examples/RegistryUpdate.json
 */
async function registryUpdate(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const registryUpdateParameters: RegistryUpdateParameters = {
    adminUserEnabled: true,
    sku: { name: "Standard" },
    tags: { key: "value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.registries.beginUpdateAndWait(
    resourceGroupName,
    registryName,
    registryUpdateParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await registryUpdate();
}

main().catch(console.error);
