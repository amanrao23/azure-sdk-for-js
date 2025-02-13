/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to The PATCH operation can be used to update only the tags for a cluster. Use PUT operation to update other properties.
 *
 * @summary The PATCH operation can be used to update only the tags for a cluster. Use PUT operation to update other properties.
 * x-ms-original-file: specification/machinelearningcompute/resource-manager/Microsoft.MachineLearningCompute/preview/2017-08-01-preview/examples/OperationalizationClusters_Update.json
 */
import type { OperationalizationClusterUpdateParameters } from "@azure/arm-machinelearningcompute";
import { MachineLearningComputeManagementClient } from "@azure/arm-machinelearningcompute";
import { DefaultAzureCredential } from "@azure/identity";

async function patchOperationalizationCluster(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const clusterName = "myCluster";
  const parameters: OperationalizationClusterUpdateParameters = {
    tags: { key1: "value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new MachineLearningComputeManagementClient(credential, subscriptionId);
  const result = await client.operationalizationClusters.update(
    resourceGroupName,
    clusterName,
    parameters,
  );
  console.log(result);
}

patchOperationalizationCluster().catch(console.error);
