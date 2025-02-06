/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AccountPatchResource, GraphServices } from "@azure/arm-graphservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update account details.
 *
 * @summary Update account details.
 * x-ms-original-file: specification/graphservicesprod/resource-manager/Microsoft.GraphServices/stable/2023-04-13/examples/Accounts_Update.json
 */
async function updateAccountResource(): Promise<void> {
  const subscriptionId =
    process.env["GRAPHSERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["GRAPHSERVICES_RESOURCE_GROUP"] || "testResourceGroupGRAM";
  const resourceName = "11111111-aaaa-1111-bbbb-111111111111";
  const accountResource: AccountPatchResource = {
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new GraphServices(credential, subscriptionId);
  const result = await client.accounts.update(
    resourceGroupName,
    resourceName,
    accountResource
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateAccountResource();
}

main().catch(console.error);
