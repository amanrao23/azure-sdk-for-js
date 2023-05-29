/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Cluster, EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an instance of an Event Hubs Cluster.
 *
 * @summary Creates or updates an instance of an Event Hubs Cluster.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/preview/2022-10-01-preview/examples/Clusters/ClusterPut.json
 */
async function clusterPut() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const clusterName = "testCluster";
  const parameters: Cluster = {
    location: "South Central US",
    sku: { name: "Dedicated", capacity: 1 },
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    parameters
  );
  console.log(result);
}

async function main() {
  clusterPut();
}

main().catch(console.error);
