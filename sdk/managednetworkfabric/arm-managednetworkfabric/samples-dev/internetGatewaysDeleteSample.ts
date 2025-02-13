/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureNetworkFabricManagementServiceAPI } from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Execute a delete on Network Fabric Service Internet Gateway.
 *
 * @summary Execute a delete on Network Fabric Service Internet Gateway.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/InternetGateways_Delete_MaximumSet_Gen.json
 */
async function internetGatewaysDeleteMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName = process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const internetGatewayName = "example-internetGateway";
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.internetGateways.beginDeleteAndWait(
    resourceGroupName,
    internetGatewayName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await internetGatewaysDeleteMaximumSetGen();
}

main().catch(console.error);
