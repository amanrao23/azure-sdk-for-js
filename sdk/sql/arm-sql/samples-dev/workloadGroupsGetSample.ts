/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a workload group
 *
 * @summary Gets a workload group
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/GetWorkloadGroup.json
 */
async function getsAWorkloadGroupForADataWarehouse(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const workloadGroupName = "smallrc";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.workloadGroups.get(
    resourceGroupName,
    serverName,
    databaseName,
    workloadGroupName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getsAWorkloadGroupForADataWarehouse();
}

main().catch(console.error);
