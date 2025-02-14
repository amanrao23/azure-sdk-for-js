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
  BreakFileLocksRequest,
  VolumesBreakFileLocksOptionalParams,
  NetAppManagementClient,
} from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Break all the file locks on a volume
 *
 * @summary Break all the file locks on a volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/Volumes_BreakFileLocks.json
 */
async function volumesBreakFileLocks(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const body: BreakFileLocksRequest = {
    clientIp: "101.102.103.104",
    confirmRunningDisruptiveOperation: true,
  };
  const options: VolumesBreakFileLocksOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginBreakFileLocksAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  volumesBreakFileLocks();
}

main().catch(console.error);
