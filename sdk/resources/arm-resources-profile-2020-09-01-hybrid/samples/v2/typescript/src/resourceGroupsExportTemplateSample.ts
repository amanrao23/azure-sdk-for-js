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
  ExportTemplateRequest,
  ResourceManagementClient
} from "@azure/arm-resources-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Captures the specified resource group as a template.
 *
 * @summary Captures the specified resource group as a template.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2019-10-01/examples/ExportResourceGroup.json
 */
async function exportAResourceGroup(): Promise<void> {
  const subscriptionId =
    process.env["RESOURCES_SUBSCRIPTION_ID"] ||
    "eaee6a92-e973-4922-9471-3a0a6abf81cd";
  const resourceGroupName =
    process.env["RESOURCES_RESOURCE_GROUP"] || "myResourceGroup";
  const parameters: ExportTemplateRequest = {
    options: "IncludeParameterDefaultValue,IncludeComments",
    resources: ["*"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.resourceGroups.beginExportTemplateAndWait(
    resourceGroupName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Captures the specified resource group as a template.
 *
 * @summary Captures the specified resource group as a template.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2019-10-01/examples/ExportResourceGroupWithFiltering.json
 */
async function exportAResourceGroupWithFiltering(): Promise<void> {
  const subscriptionId =
    process.env["RESOURCES_SUBSCRIPTION_ID"] ||
    "eaee6a92-e973-4922-9471-3a0a6abf81cd";
  const resourceGroupName =
    process.env["RESOURCES_RESOURCE_GROUP"] || "myResourceGroup";
  const parameters: ExportTemplateRequest = {
    options: "SkipResourceNameParameterization",
    resources: [
      "/subscriptions/eaee6a92-e973-4922-9471-3a0a6abf81cd/resourceGroups/myResourceGroup/providers/My.RP/myResourceType/myFirstResource"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.resourceGroups.beginExportTemplateAndWait(
    resourceGroupName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  exportAResourceGroup();
  exportAResourceGroupWithFiltering();
}

main().catch(console.error);
