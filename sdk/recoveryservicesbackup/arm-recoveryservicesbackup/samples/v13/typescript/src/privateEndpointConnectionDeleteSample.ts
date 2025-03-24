/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete Private Endpoint requests. This call is made by Backup Admin.
 *
 * @summary Delete Private Endpoint requests. This call is made by Backup Admin.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/PrivateEndpointConnection/DeletePrivateEndpointConnection.json
 */
async function deletePrivateEndpointConnection(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const vaultName = "gaallavaultbvtd2msi";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "gaallaRG";
  const privateEndpointConnectionName =
    "gaallatestpe2.5704c932-249a-490b-a142-1396838cd3b";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result =
    await client.privateEndpointConnectionOperations.beginDeleteAndWait(
      vaultName,
      resourceGroupName,
      privateEndpointConnectionName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  deletePrivateEndpointConnection();
}

main().catch(console.error);
