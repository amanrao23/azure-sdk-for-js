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
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB Mongo Role Definition.
 *
 * @summary Deletes an existing Azure Cosmos DB Mongo Role Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-03-15/examples/CosmosDBMongoDBRoleDefinitionDelete.json
 */
async function cosmosDbMongoDbroleDefinitionDelete() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const mongoRoleDefinitionId = "myMongoRoleDefinitionId";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginDeleteMongoRoleDefinitionAndWait(
    mongoRoleDefinitionId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbroleDefinitionDelete();
}

main().catch(console.error);
