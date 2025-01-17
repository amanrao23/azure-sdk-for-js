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
import type { SharingUpdate} from "@azure/arm-compute";
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update sharing profile of a gallery.
 *
 * @summary Update sharing profile of a gallery.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/Gallery_AddToSharingProfile.json
 */
async function addSharingIdToTheSharingProfileOfAGallery(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const sharingUpdate: SharingUpdate = {
    groups: [
      {
        type: "Subscriptions",
        ids: [
          "34a4ab42-0d72-47d9-bd1a-aed207386dac",
          "380fd389-260b-41aa-bad9-0a83108c370b",
        ],
      },
      { type: "AADTenants", ids: ["c24c76aa-8897-4027-9b03-8f7928b54ff6"] },
    ],
    operationType: "Add",
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.gallerySharingProfile.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    sharingUpdate,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update sharing profile of a gallery.
 *
 * @summary Update sharing profile of a gallery.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/Gallery_ResetSharingProfile.json
 */
async function resetSharingProfileOfAGallery(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const sharingUpdate: SharingUpdate = { operationType: "Reset" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.gallerySharingProfile.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    sharingUpdate,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update sharing profile of a gallery.
 *
 * @summary Update sharing profile of a gallery.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/Gallery_EnableCommunityGallery.json
 */
async function shareAGalleryToCommunity(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const sharingUpdate: SharingUpdate = { operationType: "EnableCommunity" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.gallerySharingProfile.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    sharingUpdate,
  );
  console.log(result);
}

async function main(): Promise<void> {
  addSharingIdToTheSharingProfileOfAGallery();
  resetSharingProfileOfAGallery();
  shareAGalleryToCommunity();
}

main().catch(console.error);
