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
 * This sample demonstrates how to Gets a list of virtual machine image offers for the specified location, edge zone and publisher.
 *
 * @summary Gets a list of virtual machine image offers for the specified location, edge zone and publisher.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_ListOffers_MaximumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneListOffersMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaaaaaaaaaaaaaaaa";
  const edgeZone = "aaaaaaaaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImagesEdgeZone.listOffers(
    location,
    edgeZone,
    publisherName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets a list of virtual machine image offers for the specified location, edge zone and publisher.
 *
 * @summary Gets a list of virtual machine image offers for the specified location, edge zone and publisher.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_ListOffers_MinimumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneListOffersMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaaaaaaaaaaaa";
  const edgeZone = "aaaaaaaaaaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImagesEdgeZone.listOffers(
    location,
    edgeZone,
    publisherName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  virtualMachineImagesEdgeZoneListOffersMaximumSetGen();
  virtualMachineImagesEdgeZoneListOffersMinimumSetGen();
}

main().catch(console.error);
