/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VMwareCloudSimple } from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns dedicated cloud node
 *
 * @summary Returns dedicated cloud node
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/GetDedicatedCloudNode.json
 */
async function getDedicatedCloudNode(): Promise<void> {
  const subscriptionId =
    process.env["VMWARECLOUDSIMPLE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["VMWARECLOUDSIMPLE_RESOURCE_GROUP"] || "myResourceGroup";
  const dedicatedCloudNodeName = "myNode";
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.dedicatedCloudNodes.get(
    resourceGroupName,
    dedicatedCloudNodeName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getDedicatedCloudNode();
}

main().catch(console.error);
