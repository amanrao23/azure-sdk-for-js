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
 * This sample demonstrates how to Gets the authorization rules for a namespace.
 *
 * @summary Gets the authorization rules for a namespace.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/Namespaces/AuthorizationRuleList.json
 */
async function namespacesListAuthorizationRules() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] || "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.namespaces.listAuthorizationRules(
    resourceGroupName,
    namespaceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await namespacesListAuthorizationRules();
}

main().catch(console.error);
