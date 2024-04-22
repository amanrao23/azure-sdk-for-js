/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SearchManagementClient } = require("@azure/arm-search");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a list of all shared private link resources managed by the given service.
 *
 * @summary Gets a list of all shared private link resources managed by the given service.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/preview/2024-03-01-preview/examples/ListSharedPrivateLinkResourcesByService.json
 */
async function listSharedPrivateLinkResourcesByService() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sharedPrivateLinkResources.listByService(
    resourceGroupName,
    searchServiceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listSharedPrivateLinkResourcesByService();
}

main().catch(console.error);
