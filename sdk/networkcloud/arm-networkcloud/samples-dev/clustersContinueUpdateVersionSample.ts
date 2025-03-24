/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type {
  ClusterContinueUpdateVersionParameters} from "@azure/arm-networkcloud";
import {
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Trigger the continuation of an update for a cluster with a matching update strategy that has paused after completing a segment of the update.
 *
 * @summary Trigger the continuation of an update for a cluster with a matching update strategy that has paused after completing a segment of the update.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/stable/2024-07-01/examples/Clusters_ContinueUpdateVersion.json
 */
async function continueUpdateClusterVersion(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const clusterContinueUpdateVersionParameters: ClusterContinueUpdateVersionParameters =
    { machineGroupTargetingMode: "AlphaByRack" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.clusters.beginContinueUpdateVersionAndWait(
    resourceGroupName,
    clusterName,
    clusterContinueUpdateVersionParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await continueUpdateClusterVersion();
}

main().catch(console.error);
