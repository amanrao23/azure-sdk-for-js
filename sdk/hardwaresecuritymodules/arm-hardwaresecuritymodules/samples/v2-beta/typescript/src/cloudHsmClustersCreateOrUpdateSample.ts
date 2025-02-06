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
  CloudHsmClustersCreateOrUpdateOptionalParams,
  AzureHSMResourceProvider,
  CloudHsmClusterSku,
} from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or Update a Cloud HSM Cluster in the specified subscription.
 *
 * @summary Create or Update a Cloud HSM Cluster in the specified subscription.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/CloudHsmCluster_CreateOrUpdate_MaximumSet_Gen.json
 */
async function cloudHsmClusterCreateOrUpdateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "rgcloudhsm";
  const cloudHsmClusterName = "chsm1";
  const tags = { dept: "hsm", environment: "dogfood" };
  const location = "eastus2";
  const identity = {
    type: "UserAssigned",
    userAssignedIdentities: {
      "/subscriptions/00000000000000000000000000000000/resourceGroups/contosoResources/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity1":
        {},
    },
  };
  const sku: CloudHsmClusterSku = { name: "Standard_B1", family: "B" };
  const options: CloudHsmClustersCreateOrUpdateOptionalParams = {
    tags,
    identity,
    sku,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.cloudHsmClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudHsmClusterName,
    location,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  cloudHsmClusterCreateOrUpdateMaximumSetGen();
}

main().catch(console.error);
