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
 * This sample demonstrates how to Migrate an Azure Cosmos DB SQL container from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB SQL container from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-03-15/examples/CosmosDBSqlContainerMigrateToManualThroughput.json
 */
async function cosmosDbSqlContainerMigrateToManualThroughput() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginMigrateSqlContainerToManualThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlContainerMigrateToManualThroughput();
}

main().catch(console.error);
