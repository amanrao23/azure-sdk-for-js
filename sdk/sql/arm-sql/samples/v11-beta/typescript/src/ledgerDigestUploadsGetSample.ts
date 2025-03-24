/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the current ledger digest upload configuration for a database.
 *
 * @summary Gets the current ledger digest upload configuration for a database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/LedgerDigestUploadsGet.json
 */
async function getsTheCurrentLedgerDigestUploadConfigurationForADatabase(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "ledgertestrg";
  const serverName = "ledgertestserver";
  const databaseName = "testdb";
  const ledgerDigestUploads = "current";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.ledgerDigestUploadsOperations.get(
    resourceGroupName,
    serverName,
    databaseName,
    ledgerDigestUploads,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getsTheCurrentLedgerDigestUploadConfigurationForADatabase();
}

main().catch(console.error);
