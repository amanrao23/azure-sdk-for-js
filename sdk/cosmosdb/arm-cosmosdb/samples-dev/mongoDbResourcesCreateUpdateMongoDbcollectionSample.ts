/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  MongoDBCollectionCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB MongoDB Collection
 *
 * @summary Create or update an Azure Cosmos DB MongoDB Collection
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-02-15-preview/examples/CosmosDBMongoDBCollectionCreateUpdate.json
 */
async function cosmosDbMongoDbcollectionCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const createUpdateMongoDBCollectionParameters: MongoDBCollectionCreateUpdateParameters =
    {
      location: "West US",
      options: {},
      resource: {
        analyticalStorageTtl: 500,
        id: "collectionName",
        indexes: [
          {
            key: { keys: ["_ts"] },
            options: { expireAfterSeconds: 100, unique: true },
          },
          { key: { keys: ["_id"] } },
        ],
        shardKey: { testKey: "Hash" },
      },
      tags: {},
    };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.mongoDBResources.beginCreateUpdateMongoDBCollectionAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      collectionName,
      createUpdateMongoDBCollectionParameters,
    );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB MongoDB Collection
 *
 * @summary Create or update an Azure Cosmos DB MongoDB Collection
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-02-15-preview/examples/CosmosDBMongoDBCollectionRestore.json
 */
async function cosmosDbMongoDbcollectionRestore() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const createUpdateMongoDBCollectionParameters: MongoDBCollectionCreateUpdateParameters =
    {
      location: "West US",
      options: {},
      resource: {
        createMode: "Restore",
        id: "collectionName",
        restoreParameters: {
          restoreSource:
            "/subscriptions/subid/providers/Microsoft.DocumentDB/locations/WestUS/restorableDatabaseAccounts/restorableDatabaseAccountId",
          restoreTimestampInUtc: new Date("2022-07-20T18:28:00Z"),
          restoreWithTtlDisabled: false,
        },
      },
      tags: {},
    };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.mongoDBResources.beginCreateUpdateMongoDBCollectionAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      collectionName,
      createUpdateMongoDBCollectionParameters,
    );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbcollectionCreateUpdate();
  cosmosDbMongoDbcollectionRestore();
}

main().catch(console.error);
