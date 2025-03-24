/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Recall a server endpoint.
 *
 * @summary Recall a server endpoint.
 * x-ms-original-file: specification/storagesync/resource-manager/Microsoft.StorageSync/stable/2020-09-01/examples/ServerEndpoints_Recall.json
 */
import type { RecallActionParameters } from "@azure/arm-storagesync";
import { MicrosoftStorageSync } from "@azure/arm-storagesync";
import { DefaultAzureCredential } from "@azure/identity";

async function serverEndpointsRecallAction(): Promise<void> {
  const subscriptionId = "52b8da2f-61e0-4a1f-8dde-336911f367fb";
  const resourceGroupName = "SampleResourceGroup_1";
  const storageSyncServiceName = "SampleStorageSyncService_1";
  const syncGroupName = "SampleSyncGroup_1";
  const serverEndpointName = "SampleServerEndpoint_1";
  const parameters: RecallActionParameters = { pattern: "", recallPath: "" };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftStorageSync(credential, subscriptionId);
  const result = await client.serverEndpoints.beginRecallActionAndWait(
    resourceGroupName,
    storageSyncServiceName,
    syncGroupName,
    serverEndpointName,
    parameters,
  );
  console.log(result);
}

serverEndpointsRecallAction().catch(console.error);
