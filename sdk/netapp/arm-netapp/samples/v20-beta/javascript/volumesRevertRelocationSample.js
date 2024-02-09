/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Reverts the volume relocation process, cleans up the new volume and starts using the former-existing volume.
 *
 * @summary Reverts the volume relocation process, cleans up the new volume and starts using the former-existing volume.
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2023-05-01-preview/examples/Volumes_RevertRelocation.json
 */
async function volumesRevertRelocation() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginRevertRelocationAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
  );
  console.log(result);
}

async function main() {
  volumesRevertRelocation();
}

main().catch(console.error);
