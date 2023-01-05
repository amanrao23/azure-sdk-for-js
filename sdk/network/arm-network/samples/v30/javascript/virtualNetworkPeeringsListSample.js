/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets all virtual network peerings in a virtual network.
 *
 * @summary Gets all virtual network peerings in a virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkPeeringList.json
 */
async function listPeerings() {
  const subscriptionId = "subid";
  const resourceGroupName = "peerTest";
  const virtualNetworkName = "vnet1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualNetworkPeerings.list(
    resourceGroupName,
    virtualNetworkName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPeerings().catch(console.error);

/**
 * This sample demonstrates how to Gets all virtual network peerings in a virtual network.
 *
 * @summary Gets all virtual network peerings in a virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkPeeringListWithRemoteVirtualNetworkEncryption.json
 */
async function listPeeringsWithRemoteVirtualNetworkEncryption() {
  const subscriptionId = "subid";
  const resourceGroupName = "peerTest";
  const virtualNetworkName = "vnet1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualNetworkPeerings.list(
    resourceGroupName,
    virtualNetworkName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPeeringsWithRemoteVirtualNetworkEncryption().catch(console.error);
