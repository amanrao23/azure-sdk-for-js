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
  BackupResourceConfigResource,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates vault storage model type.
 *
 * @summary Updates vault storage model type.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-06-01/examples/Common/BackupStorageConfig_Put.json
 */
async function updateVaultStorageConfiguration() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "PySDKBackupTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] ||
    "PythonSDKBackupTestRg";
  const parameters: BackupResourceConfigResource = {
    properties: {
      storageType: "LocallyRedundant",
      storageTypeState: "Unlocked"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceStorageConfigsNonCRR.update(
    vaultName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateVaultStorageConfiguration();
}

main().catch(console.error);
