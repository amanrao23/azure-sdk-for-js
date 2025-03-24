/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the long term retention backups for a given server based on resource groups.
 *
 * @summary Lists the long term retention backups for a given server based on resource groups.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/ResourceGroupBasedLongTermRetentionBackupListByServer.json
 */
async function getAllLongTermRetentionBackupsUnderTheServerBasedOnResourceGroup(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "testResourceGroup";
  const locationName = "japaneast";
  const longTermRetentionServerName = "testserver";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.longTermRetentionBackups.listByResourceGroupServer(
    resourceGroupName,
    locationName,
    longTermRetentionServerName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  getAllLongTermRetentionBackupsUnderTheServerBasedOnResourceGroup();
}

main().catch(console.error);
