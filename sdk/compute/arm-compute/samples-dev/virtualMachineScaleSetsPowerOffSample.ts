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
  VirtualMachineScaleSetVMInstanceIDs,
  VirtualMachineScaleSetsPowerOffOptionalParams} from "@azure/arm-compute";
import {
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges. Additionally, this operation is not allowed on virtual machines in a VM scale set that are being deallocated or have already been deallocated.
 *
 * @summary Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges. Additionally, this operation is not allowed on virtual machines in a VM scale set that are being deallocated or have already been deallocated.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_PowerOff_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetPowerOffMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaa";
  const skipShutdown = true;
  const vmInstanceIDs: VirtualMachineScaleSetVMInstanceIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaa"],
  };
  const options: VirtualMachineScaleSetsPowerOffOptionalParams = {
    skipShutdown,
    vmInstanceIDs,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginPowerOffAndWait(
    resourceGroupName,
    vmScaleSetName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges. Additionally, this operation is not allowed on virtual machines in a VM scale set that are being deallocated or have already been deallocated.
 *
 * @summary Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges. Additionally, this operation is not allowed on virtual machines in a VM scale set that are being deallocated or have already been deallocated.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_PowerOff_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetPowerOffMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "a";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginPowerOffAndWait(
    resourceGroupName,
    vmScaleSetName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  virtualMachineScaleSetPowerOffMaximumSetGen();
  virtualMachineScaleSetPowerOffMinimumSetGen();
}

main().catch(console.error);
