/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { HybridConnectivityManagementAPI } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the details about the service to the resource.
 *
 * @summary Gets the details about the service to the resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/ServiceConfigurationsGetSSH.json
 */
async function hybridConnectivityEndpointsServiceconfigurationsGetSsh(): Promise<void> {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine/providers/Microsoft.HybridConnectivity/endpoints/default";
  const endpointName = "default";
  const serviceConfigurationName = "SSH";
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.serviceConfigurations.get(
    resourceUri,
    endpointName,
    serviceConfigurationName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the details about the service to the resource.
 *
 * @summary Gets the details about the service to the resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/ServiceConfigurationsGetWAC.json
 */
async function hybridConnectivityEndpointsServiceconfigurationsGetWac(): Promise<void> {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine/providers/Microsoft.HybridConnectivity/endpoints/default";
  const endpointName = "default";
  const serviceConfigurationName = "WAC";
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.serviceConfigurations.get(
    resourceUri,
    endpointName,
    serviceConfigurationName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await hybridConnectivityEndpointsServiceconfigurationsGetSsh();
  await hybridConnectivityEndpointsServiceconfigurationsGetWac();
}

main().catch(console.error);
