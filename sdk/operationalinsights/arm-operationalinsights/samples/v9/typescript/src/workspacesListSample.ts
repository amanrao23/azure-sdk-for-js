/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OperationalInsightsManagementClient } from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the workspaces in a subscription.
 *
 * @summary Gets the workspaces in a subscription.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2022-10-01/examples/WorkspacesSubscriptionList.json
 */
async function workspacesSubscriptionList(): Promise<void> {
  const subscriptionId =
    process.env["OPERATIONALINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.workspaces.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  workspacesSubscriptionList();
}

main().catch(console.error);
