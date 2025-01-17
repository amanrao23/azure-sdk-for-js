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
import type {
  VirtualMachineScaleSetsDeleteOptionalParams} from "@azure/arm-compute";
import {
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a VM scale set.
 *
 * @summary Deletes a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Delete_Force.json
 */
async function forceDeleteAVMScaleSet(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const forceDeletion = true;
  const options: VirtualMachineScaleSetsDeleteOptionalParams = {
    forceDeletion,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteAndWait(
    resourceGroupName,
    vmScaleSetName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  forceDeleteAVMScaleSet();
}

main().catch(console.error);
