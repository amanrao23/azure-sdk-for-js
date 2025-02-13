/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for List Site Detector Responses
 *
 * @summary Description for List Site Detector Responses
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2024-04-01/examples/Diagnostics_ListSiteDetectorResponses.json
 */
async function getAppDetectorResponses(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.diagnostics.listSiteDetectorResponses(
    resourceGroupName,
    siteName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Description for List Site Detector Responses
 *
 * @summary Description for List Site Detector Responses
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2024-04-01/examples/Diagnostics_ListSiteDetectorResponsesSlot.json
 */
async function getAppSlotDetectorResponses(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.diagnostics.listSiteDetectorResponses(
    resourceGroupName,
    siteName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getAppDetectorResponses();
  await getAppSlotDetectorResponses();
}

main().catch(console.error);
