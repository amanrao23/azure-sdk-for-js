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
  VpnGatewayPacketCaptureStopParameters,
  VpnGatewaysStopPacketCaptureOptionalParams,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Stops packet capture on vpn gateway in the specified resource group.
 *
 * @summary Stops packet capture on vpn gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/VpnGatewayStopPacketCapture.json
 */
async function stopPacketCaptureOnVpnGateway(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const gatewayName = "vpngw";
  const parameters: VpnGatewayPacketCaptureStopParameters = {
    sasUrl:
      "https://teststorage.blob.core.windows.net/?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-09-13T07:44:05Z&st=2019-09-06T23:44:05Z&spr=https&sig=V1h9D1riltvZMI69d6ihENnFo%2FrCvTqGgjO2lf%2FVBhE%3D",
  };
  const options: VpnGatewaysStopPacketCaptureOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnGateways.beginStopPacketCaptureAndWait(
    resourceGroupName,
    gatewayName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  stopPacketCaptureOnVpnGateway();
}

main().catch(console.error);
