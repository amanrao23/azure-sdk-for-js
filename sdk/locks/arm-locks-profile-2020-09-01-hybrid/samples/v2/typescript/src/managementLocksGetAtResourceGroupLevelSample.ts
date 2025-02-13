/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ManagementLockClient } from "@azure/arm-locks-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a management lock at the resource group level.
 *
 * @summary Gets a management lock at the resource group level.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2016-09-01/examples/ManagementLocks_GetAtResourceGroupLevel.json
 */
async function getManagementLockAtResourceGroupLevel(): Promise<void> {
  const subscriptionId =
    process.env["LOCKS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["LOCKS_RESOURCE_GROUP"] || "resourcegroupname";
  const lockName = "testlock";
  const credential = new DefaultAzureCredential();
  const client = new ManagementLockClient(credential, subscriptionId);
  const result = await client.managementLocks.getAtResourceGroupLevel(
    resourceGroupName,
    lockName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getManagementLockAtResourceGroupLevel();
}

main().catch(console.error);
