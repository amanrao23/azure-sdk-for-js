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
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineImageExamples/VirtualMachineImage_ListSkus_MaximumSet_Gen.json
 */
async function virtualMachineImageListSkusMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const offer = "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.listSkus(
    location,
    publisherName,
    offer,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineImageExamples/VirtualMachineImage_ListSkus_MinimumSet_Gen.json
 */
async function virtualMachineImageListSkusMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaa";
  const publisherName = "aaaaaaaaaaaaa";
  const offer = "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.listSkus(
    location,
    publisherName,
    offer,
  );
  console.log(result);
}

async function main(): Promise<void> {
  virtualMachineImageListSkusMaximumSetGen();
  virtualMachineImageListSkusMinimumSetGen();
}

main().catch(console.error);
