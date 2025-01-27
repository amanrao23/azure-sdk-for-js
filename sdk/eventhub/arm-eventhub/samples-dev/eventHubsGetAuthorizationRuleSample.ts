/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets an AuthorizationRule for an Event Hub by rule name.
 *
 * @summary Gets an AuthorizationRule for an Event Hub by rule name.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/EventHubs/EHEventHubAuthorizationRuleGet.json
 */
async function eventHubAuthorizationRuleGet(): Promise<void> {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName = process.env["EVENTHUB_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-Namespace-960";
  const eventHubName = "sdk-EventHub-532";
  const authorizationRuleName = "sdk-Authrules-2513";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.eventHubs.getAuthorizationRule(
    resourceGroupName,
    namespaceName,
    eventHubName,
    authorizationRuleName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await eventHubAuthorizationRuleGet();
}

main().catch(console.error);
