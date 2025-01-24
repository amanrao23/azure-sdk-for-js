/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { ScheduledActionsListByScopeOptionalParams } from "@azure/arm-costmanagement";
import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List all shared scheduled actions within the given scope.
 *
 * @summary List all shared scheduled actions within the given scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledActions-list-shared.json
 */
async function scheduledActionsListByScope(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.scheduledActions.listByScope(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List all shared scheduled actions within the given scope.
 *
 * @summary List all shared scheduled actions within the given scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledActions-listWithFilter-shared.json
 */
async function scheduledActionsListByScopeFilterByViewId(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const filter = "properties/viewId eq '/providers/Microsoft.CostManagement/views/swaggerExample'";
  const options: ScheduledActionsListByScopeOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.scheduledActions.listByScope(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await scheduledActionsListByScope();
  await scheduledActionsListByScopeFilterByViewId();
}

main().catch(console.error);
