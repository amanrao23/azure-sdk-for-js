/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This operation retrieves the details of a particular failover test performed on the gateway based on the test Guid
 *
 * @summary This operation retrieves the details of a particular failover test performed on the gateway based on the test Guid
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/VirtualNetworkGatewayGetFailoverSingleTestDetails.json
 */
async function virtualNetworkGatewayGetFailoverSingleTestDetails(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "ergw";
  const peeringLocation = "Vancouver";
  const failoverTestId = "fe458ae8-d2ae-4520-a104-44bc233bde7e";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginGetFailoverSingleTestDetailsAndWait(
    resourceGroupName,
    virtualNetworkGatewayName,
    peeringLocation,
    failoverTestId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await virtualNetworkGatewayGetFailoverSingleTestDetails();
}

main().catch(console.error);
