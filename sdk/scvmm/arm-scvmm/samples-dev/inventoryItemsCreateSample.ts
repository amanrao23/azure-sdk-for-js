/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { InventoryItem } from "@azure/arm-scvmm";
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create Or Update InventoryItem.
 *
 * @summary Create Or Update InventoryItem.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/InventoryItems_Create_MaximumSet_Gen.json
 */
async function inventoryItemsCreateMaximumSet(): Promise<void> {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const vmmServerName = "O";
  const inventoryItemResourceName = "1BdDc2Ab-bDd9-Ebd6-bfdb-C0dbbdB5DEDf";
  const resource: InventoryItem = {
    kind: "M\\d_,V.",
    properties: { inventoryType: "Cloud" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    resource,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create Or Update InventoryItem.
 *
 * @summary Create Or Update InventoryItem.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/InventoryItems_Create_MinimumSet_Gen.json
 */
async function inventoryItemsCreateMinimumSet(): Promise<void> {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const vmmServerName = ".";
  const inventoryItemResourceName = "bbFb0cBb-50ce-4bfc-3eeD-bC26AbCC257a";
  const resource: InventoryItem = {};
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    resource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await inventoryItemsCreateMaximumSet();
  await inventoryItemsCreateMinimumSet();
}

main().catch(console.error);
