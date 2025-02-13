/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get all the IoT hubs in a resource group.
 *
 * @summary Get all the IoT hubs in a resource group.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2023-06-30/examples/iothub_listbyrg.json
 */
async function iotHubResourceListByResourceGroup(): Promise<void> {
  const subscriptionId =
    process.env["IOTHUB_SUBSCRIPTION_ID"] || "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName = process.env["IOTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.iotHubResource.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await iotHubResourceListByResourceGroup();
}

main().catch(console.error);
