/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftStorageSync } from "@azure/arm-storagesync";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a given CloudEndpoint.
 *
 * @summary Delete a given CloudEndpoint.
 * x-ms-original-file: specification/storagesync/resource-manager/Microsoft.StorageSync/stable/2020-09-01/examples/CloudEndpoints_Delete.json
 */
async function cloudEndpointsDelete(): Promise<void> {
  const subscriptionId = "52b8da2f-61e0-4a1f-8dde-336911f367fb";
  const resourceGroupName = "SampleResourceGroup_1";
  const storageSyncServiceName = "SampleStorageSyncService_1";
  const syncGroupName = "SampleSyncGroup_1";
  const cloudEndpointName = "SampleCloudEndpoint_1";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftStorageSync(credential, subscriptionId);
  const result = await client.cloudEndpoints.beginDeleteAndWait(
    resourceGroupName,
    storageSyncServiceName,
    syncGroupName,
    cloudEndpointName
  );
  console.log(result);
}

cloudEndpointsDelete().catch(console.error);
