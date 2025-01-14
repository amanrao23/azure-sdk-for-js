/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WorkloadsClient } from "@azure/arm-workloads";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/Db2ProviderInstances_Get.json
 */
async function getPropertiesOfADb2Provider(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    resourceGroupName,
    monitorName,
    providerInstanceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/MsSqlServerProviderInstance_Get.json
 */
async function getPropertiesOfAMSSqlServerProvider(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    resourceGroupName,
    monitorName,
    providerInstanceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/PrometheusOSProviderInstances_Get.json
 */
async function getPropertiesOfAOSProvider(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    resourceGroupName,
    monitorName,
    providerInstanceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/PrometheusHaClusterProviderInstances_Get.json
 */
async function getPropertiesOfAPrometheusHaClusterProvider(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    resourceGroupName,
    monitorName,
    providerInstanceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/ProviderInstances_Get.json
 */
async function getPropertiesOfASapMonitorHanaProvider(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    resourceGroupName,
    monitorName,
    providerInstanceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/NetWeaverProviderInstances_Get.json
 */
async function getPropertiesOfASapMonitorNetWeaverProvider(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    resourceGroupName,
    monitorName,
    providerInstanceName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getPropertiesOfADb2Provider();
  getPropertiesOfAMSSqlServerProvider();
  getPropertiesOfAOSProvider();
  getPropertiesOfAPrometheusHaClusterProvider();
  getPropertiesOfASapMonitorHanaProvider();
  getPropertiesOfASapMonitorNetWeaverProvider();
}

main().catch(console.error);
