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
  ResourceGuardProxyBaseResource,
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Add or Update ResourceGuardProxy under vault
Secures vault critical operations
 *
 * @summary Add or Update ResourceGuardProxy under vault
Secures vault critical operations
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/ResourceGuardProxyCRUD/PutResourceGuardProxy.json
 */
async function createResourceGuardProxy(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const vaultName = "sampleVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] ||
    "SampleResourceGroup";
  const resourceGuardProxyName = "swaggerExample";
  const parameters: ResourceGuardProxyBaseResource = {
    properties: {
      resourceGuardResourceId:
        "/subscriptions/c999d45b-944f-418c-a0d8-c3fcfd1802c8/resourceGroups/vaultguardRGNew/providers/Microsoft.DataProtection/resourceGuards/VaultGuardTestNew",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.resourceGuardProxy.put(
    vaultName,
    resourceGroupName,
    resourceGuardProxyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createResourceGuardProxy();
}

main().catch(console.error);
