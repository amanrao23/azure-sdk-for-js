/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CsmSlotEntity } from "@azure/arm-appservice";
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Applies the configuration settings from the target slot onto the current slot.
 *
 * @summary Description for Applies the configuration settings from the target slot onto the current slot.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2024-04-01/examples/ApplySlotConfig.json
 */
async function applyWebAppSlotConfig(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const slotSwapEntity: CsmSlotEntity = {
    preserveVnet: true,
    targetSlot: "staging",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.applySlotConfigToProduction(
    resourceGroupName,
    name,
    slotSwapEntity,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await applyWebAppSlotConfig();
}

main().catch(console.error);
