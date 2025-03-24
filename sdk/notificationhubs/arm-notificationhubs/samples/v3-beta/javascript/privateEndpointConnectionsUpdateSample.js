/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { NotificationHubsManagementClient } = require("@azure/arm-notificationhubs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Approves or rejects Private Endpoint Connection.
This is a public API that can be called directly by Notification Hubs users.
 *
 * @summary Approves or rejects Private Endpoint Connection.
This is a public API that can be called directly by Notification Hubs users.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/Namespaces/PrivateEndpointConnectionUpdate.json
 */
async function privateEndpointConnectionsUpdate() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] || "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const privateEndpointConnectionName = "nh-sdk-ns.1fa229cd-bf3f-47f0-8c49-afb36723997e";
  const parameters = {
    properties: {
      privateEndpoint: {},
      privateLinkServiceConnectionState: { status: "Approved" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginUpdateAndWait(
    resourceGroupName,
    namespaceName,
    privateEndpointConnectionName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await privateEndpointConnectionsUpdate();
}

main().catch(console.error);
