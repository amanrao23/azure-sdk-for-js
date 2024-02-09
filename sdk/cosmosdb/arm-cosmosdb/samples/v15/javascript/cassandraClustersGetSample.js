/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get the properties of a managed Cassandra cluster.
 *
 * @summary Get the properties of a managed Cassandra cluster.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-11-15/examples/CosmosDBManagedCassandraClusterGet.json
 */
async function cosmosDbManagedCassandraClusterGet() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.get(resourceGroupName, clusterName);
  console.log(result);
}

async function main() {
  cosmosDbManagedCassandraClusterGet();
}

main().catch(console.error);
