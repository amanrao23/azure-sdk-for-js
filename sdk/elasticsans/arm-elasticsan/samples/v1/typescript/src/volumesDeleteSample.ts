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
  VolumesDeleteOptionalParams,
  ElasticSanManagement,
} from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete an Volume.
 *
 * @summary Delete an Volume.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/stable/2024-05-01/examples/Volumes_Delete_MaximumSet_Gen.json
 */
async function volumesDeleteMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName =
    process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const volumeName = "volumename";
  const xMsDeleteSnapshots = "true";
  const xMsForceDelete = "true";
  const options: VolumesDeleteOptionalParams = {
    xMsDeleteSnapshots,
    xMsForceDelete,
  };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumes.beginDeleteAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    volumeName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete an Volume.
 *
 * @summary Delete an Volume.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/stable/2024-05-01/examples/Volumes_Delete_MinimumSet_Gen.json
 */
async function volumesDeleteMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName =
    process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const volumeName = "volumename";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumes.beginDeleteAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    volumeName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  volumesDeleteMaximumSetGen();
  volumesDeleteMinimumSetGen();
}

main().catch(console.error);
