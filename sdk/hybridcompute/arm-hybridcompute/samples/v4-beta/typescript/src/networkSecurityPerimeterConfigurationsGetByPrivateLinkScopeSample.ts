/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the network security perimeter configuration for a private link scope.
 *
 * @summary Gets the network security perimeter configuration for a private link scope.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-07-31-preview/examples/networkSecurityPerimeterConfiguration/NetworkSecurityPerimeterConfigurationGet.json
 */
async function getsTheNetworkSecurityPerimeterConfigurationOfThePrivateLinkScope(): Promise<void> {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const perimeterName = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee.myAssociation";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result =
    await client.networkSecurityPerimeterConfigurations.getByPrivateLinkScope(
      resourceGroupName,
      scopeName,
      perimeterName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  getsTheNetworkSecurityPerimeterConfigurationOfThePrivateLinkScope();
}

main().catch(console.error);
