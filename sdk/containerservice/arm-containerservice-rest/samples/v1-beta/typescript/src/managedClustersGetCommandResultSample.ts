/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import ContainerServiceManagementClient from "@azure-rest/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the results of a command which has been run on the Managed Cluster.
 *
 * @summary Gets the results of a command which has been run on the Managed Cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/RunCommandResultFailed.json
 */
async function commandFailedResult(): Promise<void> {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const commandId = "def7b3ea71bd4f7e9d226ddbc0f00ad9";
  const credential = new DefaultAzureCredential();
  const client = ContainerServiceManagementClient(credential);
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/commandResults/{commandId}",
      subscriptionId,
      resourceGroupName,
      resourceName,
      commandId,
    )
    .get();
  console.log(result);
}

commandFailedResult().catch(console.error);

/**
 * This sample demonstrates how to Gets the results of a command which has been run on the Managed Cluster.
 *
 * @summary Gets the results of a command which has been run on the Managed Cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/RunCommandResultSucceed.json
 */
async function commandSucceedResult(): Promise<void> {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const commandId = "def7b3ea71bd4f7e9d226ddbc0f00ad9";
  const credential = new DefaultAzureCredential();
  const client = ContainerServiceManagementClient(credential);
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/commandResults/{commandId}",
      subscriptionId,
      resourceGroupName,
      resourceName,
      commandId,
    )
    .get();
  console.log(result);
  console.log(result);
}

commandSucceedResult().catch(console.error);
