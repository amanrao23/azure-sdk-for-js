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
  PrivateEndpointConnection,
  EventGridManagementClient,
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a specific private endpoint connection under a topic, domain or partner namespace.
 *
 * @summary Update a specific private endpoint connection under a topic, domain or partner namespace.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/PrivateEndpointConnections_Update.json
 */
async function privateEndpointConnectionsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const parentType = "topics";
  const parentName = "exampletopic1";
  const privateEndpointConnectionName =
    "BMTPE5.8A30D251-4C61-489D-A1AA-B37C4A329B8B";
  const privateEndpointConnection: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "approving connection",
      actionsRequired: "None",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginUpdateAndWait(
    resourceGroupName,
    parentType,
    parentName,
    privateEndpointConnectionName,
    privateEndpointConnection,
  );
  console.log(result);
}

async function main(): Promise<void> {
  privateEndpointConnectionsUpdate();
}

main().catch(console.error);
