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
 * This sample demonstrates how to Gets a virtual machine image.
 *
 * @summary Gets a virtual machine image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineImageExamples/VirtualMachineImage_Get_MaximumSet_Gen.json
 */
async function virtualMachineImageGetMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaaaa";
  const publisherName = "aaa";
  const offer = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const skus = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const version = "aaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.get(
    location,
    publisherName,
    offer,
    skus,
    version,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets a virtual machine image.
 *
 * @summary Gets a virtual machine image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineImageExamples/VirtualMachineImage_Get_MinimumSet_Gen.json
 */
async function virtualMachineImageGetMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaa";
  const offer = "aa";
  const skus = "aaaaaaaaa";
  const version = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.get(
    location,
    publisherName,
    offer,
    skus,
    version,
  );
  console.log(result);
}

async function main(): Promise<void> {
  virtualMachineImageGetMaximumSetGen();
  virtualMachineImageGetMinimumSetGen();
}

main().catch(console.error);
