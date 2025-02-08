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
  FhirServicePatchResource,
  HealthcareApisManagementClient,
} from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Patch FHIR Service details.
 *
 * @summary Patch FHIR Service details.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2024-03-31/examples/fhirservices/FhirServices_Patch.json
 */
async function updateAFhirService(): Promise<void> {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const fhirServiceName = "fhirservice1";
  const workspaceName = "workspace1";
  const fhirservicePatchResource: FhirServicePatchResource = {
    tags: { tagKey: "tagValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.fhirServices.beginUpdateAndWait(
    resourceGroupName,
    fhirServiceName,
    workspaceName,
    fhirservicePatchResource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateAFhirService();
}

main().catch(console.error);
