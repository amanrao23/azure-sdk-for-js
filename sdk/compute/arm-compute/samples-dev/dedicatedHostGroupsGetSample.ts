// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves information about a dedicated host group.
 *
 * @summary Retrieves information about a dedicated host group.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/dedicatedHostExamples/DedicatedHostGroup_Get.json
 */
async function createADedicatedHostGroup(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const hostGroupName = "myDedicatedHostGroup";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHostGroups.get(
    resourceGroupName,
    hostGroupName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Retrieves information about a dedicated host group.
 *
 * @summary Retrieves information about a dedicated host group.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/dedicatedHostExamples/DedicatedHostGroup_Get_UltraSSDEnabledDedicatedHostGroup.json
 */
async function createAnUltraSsdEnabledDedicatedHostGroup(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const hostGroupName = "myDedicatedHostGroup";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHostGroups.get(
    resourceGroupName,
    hostGroupName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createADedicatedHostGroup();
  createAnUltraSsdEnabledDedicatedHostGroup();
}

main().catch(console.error);
