/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a Metadata.
 *
 * @summary Get a Metadata.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/metadata/GetMetadata.json
 */
async function getSingleMetadataByName(): Promise<void> {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] ||
    "2e1dc338-d04d-4443-b721-037eff4fdcac";
  const resourceGroupName =
    process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const metadataName = "metadataName";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.metadata.get(
    resourceGroupName,
    workspaceName,
    metadataName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getSingleMetadataByName();
}

main().catch(console.error);
