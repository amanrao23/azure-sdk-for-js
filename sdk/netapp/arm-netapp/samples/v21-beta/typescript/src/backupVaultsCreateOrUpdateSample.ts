/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BackupVault, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update the specified Backup Vault in the NetApp account
 *
 * @summary Create or update the specified Backup Vault in the NetApp account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/BackupVaults_Create.json
 */
async function backupVaultCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const backupVaultName = "backupVault1";
  const body: BackupVault = { location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backupVaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    backupVaultName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  backupVaultCreateOrUpdate();
}

main().catch(console.error);
