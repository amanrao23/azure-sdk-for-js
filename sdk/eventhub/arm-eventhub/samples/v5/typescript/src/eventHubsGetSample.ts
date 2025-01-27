/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets an Event Hubs description for the specified Event Hub.
 *
 * @summary Gets an Event Hubs description for the specified Event Hub.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/EventHubs/EHEventHubGet.json
 */
async function eventHubGet(): Promise<void> {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "e2f361f0-3b27-4503-a9cc-21cfba380093";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] ||
    "Default-NotificationHubs-AustraliaEast";
  const namespaceName = "sdk-Namespace-716";
  const eventHubName = "sdk-EventHub-10";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.eventHubs.get(
    resourceGroupName,
    namespaceName,
    eventHubName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  eventHubGet();
}

main().catch(console.error);
