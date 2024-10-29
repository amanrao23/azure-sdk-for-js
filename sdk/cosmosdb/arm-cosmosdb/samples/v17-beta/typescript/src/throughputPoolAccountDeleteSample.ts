/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Removes an existing Azure Cosmos DB database account from a throughput pool.
 *
 * @summary Removes an existing Azure Cosmos DB database account from a throughput pool.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-09-01-preview/examples/throughputPool/CosmosDBThroughputPoolAccountDelete.json
 */
async function cosmosDbThroughputPoolAccountDelete() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rgName";
  const throughputPoolName = "tp1";
  const throughputPoolAccountName = "db1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.throughputPoolAccount.beginDeleteAndWait(
    resourceGroupName,
    throughputPoolName,
    throughputPoolAccountName,
  );
  console.log(result);
}

async function main() {
  cosmosDbThroughputPoolAccountDelete();
}

main().catch(console.error);
