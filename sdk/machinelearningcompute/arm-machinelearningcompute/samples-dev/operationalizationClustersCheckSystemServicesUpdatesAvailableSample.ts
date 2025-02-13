/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { MachineLearningComputeManagementClient } from "@azure/arm-machinelearningcompute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Checks if updates are available for system services in the cluster.
 *
 * @summary Checks if updates are available for system services in the cluster.
 * x-ms-original-file: specification/machinelearningcompute/resource-manager/Microsoft.MachineLearningCompute/preview/2017-08-01-preview/examples/OperationalizationClusters_CheckSystemServicesUpdatesAvailable.json
 */
async function checkUpdateForAnOperationalizationCluster(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const clusterName = "myCluster";
  const credential = new DefaultAzureCredential();
  const client = new MachineLearningComputeManagementClient(credential, subscriptionId);
  const result = await client.operationalizationClusters.checkSystemServicesUpdatesAvailable(
    resourceGroupName,
    clusterName,
  );
  console.log(result);
}

checkUpdateForAnOperationalizationCluster().catch(console.error);
