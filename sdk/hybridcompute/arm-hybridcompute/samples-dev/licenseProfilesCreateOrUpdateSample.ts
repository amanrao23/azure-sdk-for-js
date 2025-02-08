/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { LicenseProfile } from "@azure/arm-hybridcompute";
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to create or update a license profile.
 *
 * @summary The operation to create or update a license profile.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-07-31-preview/examples/licenseProfile/LicenseProfile_CreateOrUpdate.json
 */
async function createOrUpdateALicenseProfile(): Promise<void> {
  const subscriptionId = process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName = process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const machineName = "myMachine";
  const parameters: LicenseProfile = {
    assignedLicense: "{LicenseResourceId}",
    location: "eastus2euap",
    productFeatures: [{ name: "Hotpatch", subscriptionStatus: "Enabled" }],
    productType: "WindowsServer",
    softwareAssuranceCustomer: true,
    subscriptionStatus: "Enabled",
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.licenseProfiles.beginCreateOrUpdateAndWait(
    resourceGroupName,
    machineName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateALicenseProfile();
}

main().catch(console.error);
