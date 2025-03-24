/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Implements VirtualNetwork GET method.
 *
 * @summary Implements VirtualNetwork GET method.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualNetworks_Get_MaximumSet_Gen.json
 */
async function virtualNetworksGetMaximumSet(): Promise<void> {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const virtualNetworkName = "2";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.virtualNetworks.get(
    resourceGroupName,
    virtualNetworkName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Implements VirtualNetwork GET method.
 *
 * @summary Implements VirtualNetwork GET method.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualNetworks_Get_MinimumSet_Gen.json
 */
async function virtualNetworksGetMinimumSet(): Promise<void> {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const virtualNetworkName = "-";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.virtualNetworks.get(
    resourceGroupName,
    virtualNetworkName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  virtualNetworksGetMaximumSet();
  virtualNetworksGetMinimumSet();
}

main().catch(console.error);
