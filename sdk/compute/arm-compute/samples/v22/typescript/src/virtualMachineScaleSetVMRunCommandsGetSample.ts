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
 * This sample demonstrates how to The operation to get the VMSS VM run command.
 *
 * @summary The operation to get the VMSS VM run command.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/runCommandExamples/VirtualMachineScaleSetVMRunCommand_Get.json
 */
async function getVirtualMachineScaleSetVMRunCommands(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const runCommandName = "myRunCommand";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMRunCommands.get(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    runCommandName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getVirtualMachineScaleSetVMRunCommands();
}

main().catch(console.error);
