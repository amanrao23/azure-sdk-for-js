/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BackupVaultPatch, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Patch the specified NetApp Backup Vault
 *
 * @summary Patch the specified NetApp Backup Vault
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2024-09-01/examples/BackupVaults_Update.json
 */
async function backupVaultsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const backupVaultName = "backupVault1";
  const body: BackupVaultPatch = { tags: { tag1: "Value1" } };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backupVaults.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    backupVaultName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await backupVaultsUpdate();
}

main().catch(console.error);
