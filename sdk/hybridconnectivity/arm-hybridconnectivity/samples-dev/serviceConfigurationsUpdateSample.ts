/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ServiceConfigurationResourcePatch } from "@azure/arm-hybridconnectivity";
import { HybridConnectivityManagementAPI } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update the service details in the service configurations of the target resource.
 *
 * @summary Update the service details in the service configurations of the target resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/ServiceConfigurationsPatchSSH.json
 */
async function serviceConfigurationsPatchSsh(): Promise<void> {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine/providers/Microsoft.HybridConnectivity/endpoints/default";
  const endpointName = "default";
  const serviceConfigurationName = "SSH";
  const serviceConfigurationResource: ServiceConfigurationResourcePatch = {
    port: 22,
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.serviceConfigurations.update(
    resourceUri,
    endpointName,
    serviceConfigurationName,
    serviceConfigurationResource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await serviceConfigurationsPatchSsh();
}

main().catch(console.error);
