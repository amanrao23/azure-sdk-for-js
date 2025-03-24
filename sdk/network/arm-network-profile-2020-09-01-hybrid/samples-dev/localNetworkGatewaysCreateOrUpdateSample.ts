/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { LocalNetworkGateway } from "@azure/arm-network-profile-2020-09-01-hybrid";
import { NetworkManagementClient } from "@azure/arm-network-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a local network gateway in the specified resource group.
 *
 * @summary Creates or updates a local network gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LocalNetworkGatewayCreate.json
 */
async function createLocalNetworkGateway(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const localNetworkGatewayName = "localgw";
  const parameters: LocalNetworkGateway = {
    gatewayIpAddress: "x.x.x.x",
    localNetworkAddressSpace: { addressPrefixes: ["10.1.0.0/16"] },
    location: "Central US",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.localNetworkGateways.beginCreateOrUpdateAndWait(
    resourceGroupName,
    localNetworkGatewayName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createLocalNetworkGateway();
}

main().catch(console.error);
