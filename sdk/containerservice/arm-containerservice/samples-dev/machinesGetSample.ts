/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a specific machine in the specified agent pool.
 *
 * @summary Get a specific machine in the specified agent pool.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2024-09-01/examples/MachineGet.json
 */
async function getAMachineInAnAgentPoolsByManagedCluster() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "26fe00f8-9173-4872-9134-bb1d2e00343a";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const machineName = "aks-nodepool1-42263519-vmss00000t";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.machines.get(
    resourceGroupName,
    resourceName,
    agentPoolName,
    machineName,
  );
  console.log(result);
}

async function main() {
  getAMachineInAnAgentPoolsByManagedCluster();
}

main().catch(console.error);
