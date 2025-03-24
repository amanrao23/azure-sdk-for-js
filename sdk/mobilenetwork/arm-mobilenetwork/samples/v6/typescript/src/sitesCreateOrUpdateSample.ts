/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Site, MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a mobile network site. Must be created in the same location as its parent mobile network.
 *
 * @summary Creates or updates a mobile network site. Must be created in the same location as its parent mobile network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2024-04-01/examples/SiteCreate.json
 */
async function createMobileNetworkSite(): Promise<void> {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const siteName = "testSite";
  const parameters: Site = { location: "testLocation" };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.sites.beginCreateOrUpdateAndWait(
    resourceGroupName,
    mobileNetworkName,
    siteName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createMobileNetworkSite();
}

main().catch(console.error);
