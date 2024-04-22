/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { LargeInstanceManagementClient } = require("@azure/arm-largeinstance");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to start an Azure Large Instance (only for compute instances)
 *
 * @summary The operation to start an Azure Large Instance (only for compute instances)
 * x-ms-original-file: specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/preview/2023-07-20-preview/examples/AzureLargeInstance_Start.json
 */
async function azureLargeInstanceStart() {
  const subscriptionId =
    process.env["LARGEINSTANCE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["LARGEINSTANCE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureLargeInstanceName = "myALInstance";
  const credential = new DefaultAzureCredential();
  const client = new LargeInstanceManagementClient(credential, subscriptionId);
  const result = await client.azureLargeInstanceOperations.beginStartAndWait(
    resourceGroupName,
    azureLargeInstanceName,
  );
  console.log(result);
}

async function main() {
  azureLargeInstanceStart();
}

main().catch(console.error);
