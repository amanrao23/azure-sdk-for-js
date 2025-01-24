/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the status of a specific operation in the specified agent pool.
 *
 * @summary Get the status of a specific operation in the specified agent pool.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2024-09-02-preview/examples/OperationStatusResultGetByAgentPool.json
 */
async function getOperationStatusResult(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const operationId = "00000000-0000-0000-0000-000000000001";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.operationStatusResultOperations.getByAgentPool(
    resourceGroupName,
    resourceName,
    agentPoolName,
    operationId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getOperationStatusResult();
}

main().catch(console.error);
