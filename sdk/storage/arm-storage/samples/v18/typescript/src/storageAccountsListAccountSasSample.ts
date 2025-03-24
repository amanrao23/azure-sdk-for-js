/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AccountSasParameters,
  StorageManagementClient,
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List SAS credentials of a storage account.
 *
 * @summary List SAS credentials of a storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2024-01-01/examples/StorageAccountListAccountSAS.json
 */
async function storageAccountListAccountSas(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res7985";
  const accountName = "sto8588";
  const parameters: AccountSasParameters = {
    keyToSign: "key1",
    sharedAccessExpiryTime: new Date("2017-05-24T11:42:03.1567373Z"),
    permissions: "r",
    protocols: "https,http",
    resourceTypes: "s",
    services: "b",
    sharedAccessStartTime: new Date("2017-05-24T10:42:03.1567373Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.listAccountSAS(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await storageAccountListAccountSas();
}

main().catch(console.error);
