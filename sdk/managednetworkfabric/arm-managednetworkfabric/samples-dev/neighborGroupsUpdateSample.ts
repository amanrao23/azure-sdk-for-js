/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { NeighborGroupPatch } from "@azure/arm-managednetworkfabric";
import { AzureNetworkFabricManagementServiceAPI } from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the Neighbor Group.
 *
 * @summary Updates the Neighbor Group.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NeighborGroups_Update_MaximumSet_Gen.json
 */
async function neighborGroupsUpdateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName = process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const neighborGroupName = "example-neighborGroup";
  const body: NeighborGroupPatch = {
    annotation: "Updating",
    destination: {
      ipv4Addresses: [
        "10.10.10.10",
        "20.10.10.10",
        "30.10.10.10",
        "40.10.10.10",
        "50.10.10.10",
        "60.10.10.10",
        "70.10.10.10",
        "80.10.10.10",
        "90.10.10.10",
      ],
      ipv6Addresses: ["2F::/100"],
    },
    tags: { key8107: "2345" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.neighborGroups.beginUpdateAndWait(
    resourceGroupName,
    neighborGroupName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await neighborGroupsUpdateMaximumSetGen();
}

main().catch(console.error);
