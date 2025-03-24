/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ExtendedServerBlobAuditingPolicy } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an extended server's blob auditing policy.
 *
 * @summary Creates or updates an extended server's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ExtendedServerBlobAuditingCreateMax.json
 */
async function updateAServerExtendedBlobAuditingPolicyWithAllParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "blobauditingtest-4799";
  const serverName = "blobauditingtest-6440";
  const parameters: ExtendedServerBlobAuditingPolicy = {
    auditActionsAndGroups: [
      "SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP",
      "FAILED_DATABASE_AUTHENTICATION_GROUP",
      "BATCH_COMPLETED_GROUP",
    ],
    isAzureMonitorTargetEnabled: true,
    isStorageSecondaryKeyInUse: false,
    predicateExpression: "object_name = 'SensitiveData'",
    queueDelayMs: 4000,
    retentionDays: 6,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageAccountSubscriptionId: "00000000-1234-0000-5678-000000000000",
    storageEndpoint: "https://mystorage.blob.core.windows.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedServerBlobAuditingPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an extended server's blob auditing policy.
 *
 * @summary Creates or updates an extended server's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ExtendedServerBlobAuditingCreateMin.json
 */
async function updateAServerExtendedBlobAuditingPolicyWithMinimalParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "blobauditingtest-4799";
  const serverName = "blobauditingtest-6440";
  const parameters: ExtendedServerBlobAuditingPolicy = {
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedServerBlobAuditingPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAServerExtendedBlobAuditingPolicyWithAllParameters();
  await updateAServerExtendedBlobAuditingPolicyWithMinimalParameters();
}

main().catch(console.error);
