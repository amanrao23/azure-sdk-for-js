/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete a custom entity store assignment by name for a provided subscription
 *
 * @summary Delete a custom entity store assignment by name for a provided subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-07-01-preview/examples/CustomEntityStoreAssignments/customEntityStoreAssignmentDelete_example.json
 */
async function deleteACustomEntityStoreAssignment(): Promise<void> {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "e5d1b86c-3051-44d5-8802-aa65d45a279b";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "TestResourceGroup";
  const customEntityStoreAssignmentName = "33e7cc6e-a139-4723-a0e5-76993aee0771";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.customEntityStoreAssignments.delete(
    resourceGroupName,
    customEntityStoreAssignmentName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteACustomEntityStoreAssignment();
}

main().catch(console.error);
