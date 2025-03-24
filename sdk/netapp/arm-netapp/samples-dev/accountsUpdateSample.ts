/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NetAppAccountPatch, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Patch the specified NetApp account
 *
 * @summary Patch the specified NetApp account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2024-09-01/examples/Accounts_Update.json
 */
async function accountsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const body: NetAppAccountPatch = { tags: { tag1: "Value1" } };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.accounts.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await accountsUpdate();
}

main().catch(console.error);
