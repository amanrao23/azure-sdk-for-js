/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Volume, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update the specified volume within the capacity pool
 *
 * @summary Create or update the specified volume within the capacity pool
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/Volumes_CreateOrUpdate.json
 */
async function volumesCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const body: Volume = {
    creationToken: "my-unique-file-path",
    location: "eastus",
    serviceLevel: "Premium",
    subnetId:
      "/subscriptions/9760acf5-4638-11e7-9bdb-020073ca7778/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
    usageThreshold: 107374182400,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  volumesCreateOrUpdate();
}

main().catch(console.error);
