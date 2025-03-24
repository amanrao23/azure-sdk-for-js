/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { StorageAccountRegenerateKeyParameters } from "@azure/arm-storage-profile-2020-09-01-hybrid";
import { StorageManagementClient } from "@azure/arm-storage-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Regenerates one of the access keys or Kerberos keys for the specified storage account.
 *
 * @summary Regenerates one of the access keys or Kerberos keys for the specified storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2019-06-01/examples/StorageAccountRegenerateKerbKey.json
 */
async function storageAccountRegenerateKerbKey(): Promise<void> {
  const subscriptionId = process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res4167";
  const accountName = "sto3539";
  const regenerateKey: StorageAccountRegenerateKeyParameters = {
    keyName: "kerb1",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.regenerateKey(
    resourceGroupName,
    accountName,
    regenerateKey,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Regenerates one of the access keys or Kerberos keys for the specified storage account.
 *
 * @summary Regenerates one of the access keys or Kerberos keys for the specified storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2019-06-01/examples/StorageAccountRegenerateKey.json
 */
async function storageAccountRegenerateKey(): Promise<void> {
  const subscriptionId = process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res4167";
  const accountName = "sto3539";
  const regenerateKey: StorageAccountRegenerateKeyParameters = {
    keyName: "key2",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.regenerateKey(
    resourceGroupName,
    accountName,
    regenerateKey,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await storageAccountRegenerateKerbKey();
  await storageAccountRegenerateKey();
}

main().catch(console.error);
