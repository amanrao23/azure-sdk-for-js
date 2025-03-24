/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RelocateVolumeRequest,
  VolumesRelocateOptionalParams,
  NetAppManagementClient,
} from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Relocates volume to a new stamp
 *
 * @summary Relocates volume to a new stamp
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2024-09-01/examples/Volumes_Relocate.json
 */
async function volumesRelocate(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const body: RelocateVolumeRequest = {};
  const options: VolumesRelocateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginRelocateAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await volumesRelocate();
}

main().catch(console.error);
