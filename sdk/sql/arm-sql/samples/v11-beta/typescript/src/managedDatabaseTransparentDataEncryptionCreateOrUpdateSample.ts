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
  ManagedTransparentDataEncryption,
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a database's transparent data encryption configuration.
 *
 * @summary Updates a database's transparent data encryption configuration.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedTransparentDataEncryptionUpdate.json
 */
async function updateADatabaseTransparentDataEncryptionStateWithMinimalParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "securitytde-42-rg";
  const managedInstanceName = "securitytde-42";
  const databaseName = "testdb";
  const tdeName = "current";
  const parameters: ManagedTransparentDataEncryption = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.managedDatabaseTransparentDataEncryption.createOrUpdate(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      tdeName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  updateADatabaseTransparentDataEncryptionStateWithMinimalParameters();
}

main().catch(console.error);
