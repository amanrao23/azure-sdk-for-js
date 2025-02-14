/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Finalizes the migration of an external volume by releasing the replication and breaking the external cluster peering if no other migration is active.
 *
 * @summary Finalizes the migration of an external volume by releasing the replication and breaking the external cluster peering if no other migration is active.
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/Volumes_FinalizeExternalReplication.json
 */
async function volumesFinalizeExternalReplication(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginFinalizeExternalReplicationAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  volumesFinalizeExternalReplication();
}

main().catch(console.error);
