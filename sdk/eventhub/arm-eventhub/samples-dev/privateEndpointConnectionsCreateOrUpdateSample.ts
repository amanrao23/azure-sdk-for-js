/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PrivateEndpointConnection } from "@azure/arm-eventhub";
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates PrivateEndpointConnections of service namespace.
 *
 * @summary Creates or updates PrivateEndpointConnections of service namespace.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/NameSpaces/PrivateEndPointConnectionCreate.json
 */
async function nameSpacePrivateEndPointConnectionCreate(): Promise<void> {
  const subscriptionId = process.env["EVENTHUB_SUBSCRIPTION_ID"] || "subID";
  const resourceGroupName = process.env["EVENTHUB_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-Namespace-2924";
  const privateEndpointConnectionName = "privateEndpointConnectionName";
  const parameters: PrivateEndpointConnection = {
    privateEndpoint: {
      id: "/subscriptions/dbedb4e0-40e6-4145-81f3-f1314c150774/resourceGroups/SDK-EventHub-8396/providers/Microsoft.Network/privateEndpoints/sdk-Namespace-2847",
    },
    privateLinkServiceConnectionState: {
      description: "testing",
      status: "Rejected",
    },
    provisioningState: "Succeeded",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.createOrUpdate(
    resourceGroupName,
    namespaceName,
    privateEndpointConnectionName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await nameSpacePrivateEndPointConnectionCreate();
}

main().catch(console.error);
