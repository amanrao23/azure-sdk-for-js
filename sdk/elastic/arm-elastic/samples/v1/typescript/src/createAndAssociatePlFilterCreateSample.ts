/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CreateAndAssociatePLFilterCreateOptionalParams,
  MicrosoftElastic,
} from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create and Associate private link traffic filter for the given deployment.
 *
 * @summary Create and Associate private link traffic filter for the given deployment.
 * x-ms-original-file: specification/elastic/resource-manager/Microsoft.Elastic/stable/2024-03-01/examples/PrivateLinkTrafficFilters_Create.json
 */
async function createAndAssociatePlFilterCreate(): Promise<void> {
  const subscriptionId =
    process.env["ELASTIC_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ELASTIC_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const privateEndpointGuid = "fdb54d3b-e85e-4d08-8958-0d2f7g523df9";
  const privateEndpointName = "myPrivateEndpoint";
  const options: CreateAndAssociatePLFilterCreateOptionalParams = {
    privateEndpointGuid,
    privateEndpointName,
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftElastic(credential, subscriptionId);
  const result = await client.createAndAssociatePLFilter.beginCreateAndWait(
    resourceGroupName,
    monitorName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createAndAssociatePlFilterCreate();
}

main().catch(console.error);
