/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { RedisEnterpriseManagementClient } from "@azure/arm-redisenterprisecache";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Upgrades the database Redis version to the latest available.
 *
 * @summary Upgrades the database Redis version to the latest available.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/preview/2024-09-01-preview/examples/RedisEnterpriseDatabasesUpgradeDBRedisVersion.json
 */
async function howToUpgradeYourDatabaseRedisVersion(): Promise<void> {
  const subscriptionId =
    process.env["REDISENTERPRISE_SUBSCRIPTION_ID"] || "e7b5a9d2-6b6a-4d2f-9143-20d9a10f5b8f";
  const resourceGroupName = process.env["REDISENTERPRISE_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(credential, subscriptionId);
  const result = await client.databases.beginUpgradeDBRedisVersionAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await howToUpgradeYourDatabaseRedisVersion();
}

main().catch(console.error);
