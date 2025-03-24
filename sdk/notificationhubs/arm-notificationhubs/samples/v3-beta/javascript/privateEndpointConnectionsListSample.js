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
 * This sample demonstrates how to Returns all Private Endpoint Connections that belong to the given Notification Hubs namespace.
This is a public API that can be called directly by Notification Hubs users.
 *
 * @summary Returns all Private Endpoint Connections that belong to the given Notification Hubs namespace.
This is a public API that can be called directly by Notification Hubs users.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/Namespaces/PrivateEndpointConnectionList.json
 */
async function privateEndpointConnectionsList() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] || "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const resArray = [];
  for await (const item of client.privateEndpointConnections.list(
    resourceGroupName,
    namespaceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await privateEndpointConnectionsList();
}

main().catch(console.error);
