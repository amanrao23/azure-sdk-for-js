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
 * This sample demonstrates how to Delete a gallery inVMAccessControlProfile.
 *
 * @summary Delete a gallery inVMAccessControlProfile.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryResourceProfileExamples/GalleryInVMAccessControlProfile_Delete.json
 */
async function deleteAGalleryInVMAccessControlProfile(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const inVMAccessControlProfileName = "myInVMAccessControlProfileName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.galleryInVMAccessControlProfiles.beginDeleteAndWait(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  deleteAGalleryInVMAccessControlProfile();
}

main().catch(console.error);
