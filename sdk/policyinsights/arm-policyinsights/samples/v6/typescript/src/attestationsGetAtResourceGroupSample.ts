/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets an existing attestation at resource group scope.
 *
 * @summary Gets an existing attestation at resource group scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2024-10-01/examples/Attestations_GetResourceGroupScope.json
 */
async function getAttestationAtResourceGroupScope(): Promise<void> {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "35ee058e-5fa0-414c-8145-3ebb8d09b6e2";
  const resourceGroupName =
    process.env["POLICYINSIGHTS_RESOURCE_GROUP"] || "myRg";
  const attestationName = "790996e6-9871-4b1f-9cd9-ec42cd6ced1e";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.attestations.getAtResourceGroup(
    resourceGroupName,
    attestationName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getAttestationAtResourceGroupScope();
}

main().catch(console.error);
