/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get properties of a partner topic.
 *
 * @summary Get properties of a partner topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/PartnerTopics_Get.json
 */
async function partnerTopicsGet(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const partnerTopicName = "examplePartnerTopicName1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopics.get(
    resourceGroupName,
    partnerTopicName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  partnerTopicsGet();
}

main().catch(console.error);
