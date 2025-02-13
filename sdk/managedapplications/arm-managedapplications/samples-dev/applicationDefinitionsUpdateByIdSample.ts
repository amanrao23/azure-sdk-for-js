/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ApplicationDefinitionPatchable } from "@azure/arm-managedapplications";
import { ApplicationClient } from "@azure/arm-managedapplications";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the managed application definition.
 *
 * @summary Updates the managed application definition.
 * x-ms-original-file: specification/solutions/resource-manager/Microsoft.Solutions/stable/2021-07-01/examples/updateApplicationDefinition.json
 */
async function updateManagedApplicationDefinition(): Promise<void> {
  const subscriptionId = process.env["MANAGEDAPPLICATIONS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MANAGEDAPPLICATIONS_RESOURCE_GROUP"] || "rg";
  const applicationDefinitionName = "myManagedApplicationDef";
  const parameters: ApplicationDefinitionPatchable = {
    tags: { department: "Finance" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationClient(credential, subscriptionId);
  const result = await client.applicationDefinitions.updateById(
    resourceGroupName,
    applicationDefinitionName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateManagedApplicationDefinition();
}

main().catch(console.error);
