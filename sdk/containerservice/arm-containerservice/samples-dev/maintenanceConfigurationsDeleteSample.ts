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
 * This sample demonstrates how to Deletes a maintenance configuration.
 *
 * @summary Deletes a maintenance configuration.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2023-02-02-preview/examples/MaintenanceConfigurationsDelete.json
 */
async function deleteMaintenanceConfiguration() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const configName = "default";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.maintenanceConfigurations.delete(
    resourceGroupName,
    resourceName,
    configName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes a maintenance configuration.
 *
 * @summary Deletes a maintenance configuration.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2023-02-02-preview/examples/MaintenanceConfigurationsDelete_MaintenanceWindow.json
 */
async function deleteMaintenanceConfigurationForNodeOSUpgrade() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const configName = "aksManagedNodeOSUpgradeSchedule";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.maintenanceConfigurations.delete(
    resourceGroupName,
    resourceName,
    configName
  );
  console.log(result);
}

async function main() {
  deleteMaintenanceConfiguration();
  deleteMaintenanceConfigurationForNodeOSUpgrade();
}

main().catch(console.error);
