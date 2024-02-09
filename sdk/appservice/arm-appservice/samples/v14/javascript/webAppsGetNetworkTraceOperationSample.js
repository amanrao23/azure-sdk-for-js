/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
 *
 * @summary Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-01-01/examples/GetWebSiteNetworkTraceOperation.json
 */
async function getTheCurrentStatusOfANetworkTraceOperationForASite() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "SampleApp";
  const operationId = "c291433b-53ad-4c49-8cae-0a293eae1c6d";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.getNetworkTraceOperation(
    resourceGroupName,
    name,
    operationId
  );
  console.log(result);
}

async function main() {
  getTheCurrentStatusOfANetworkTraceOperationForASite();
}

main().catch(console.error);
