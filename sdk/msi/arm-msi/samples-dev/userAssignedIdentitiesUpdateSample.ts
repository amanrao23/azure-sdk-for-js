/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { IdentityUpdate } from "@azure/arm-msi";
import { ManagedServiceIdentityClient } from "@azure/arm-msi";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an identity in the specified subscription and resource group.
 *
 * @summary Update an identity in the specified subscription and resource group.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/stable/2023-01-31/examples/IdentityUpdate.json
 */
async function identityUpdate(): Promise<void> {
  const subscriptionId = process.env["MSI_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MSI_RESOURCE_GROUP"] || "rgName";
  const resourceName = "resourceName";
  const parameters: IdentityUpdate = {
    location: "eastus",
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const result = await client.userAssignedIdentities.update(
    resourceGroupName,
    resourceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await identityUpdate();
}

main().catch(console.error);
