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
  ServerBlobAuditingPolicy,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or Update a workspace managed sql server's blob auditing policy.
 *
 * @summary Create or Update a workspace managed sql server's blob auditing policy.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateWorkspaceManagedSqlServerBlobAuditingSettingsWithAllParameters.json
 */
async function createOrUpdateBlobAuditingPolicyOfWorkspaceSqlServerWithAllParameters(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "wsg-7398";
  const workspaceName = "testWorkspace";
  const blobAuditingPolicyName = "default";
  const parameters: ServerBlobAuditingPolicy = {
    auditActionsAndGroups: [
      "SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP",
      "FAILED_DATABASE_AUTHENTICATION_GROUP",
      "BATCH_COMPLETED_GROUP"
    ],
    isAzureMonitorTargetEnabled: true,
    isStorageSecondaryKeyInUse: false,
    queueDelayMs: 4000,
    retentionDays: 6,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageAccountSubscriptionId: "00000000-1234-0000-5678-000000000000",
    storageEndpoint: "https://mystorage.blob.core.windows.net"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.workspaceManagedSqlServerBlobAuditingPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    blobAuditingPolicyName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or Update a workspace managed sql server's blob auditing policy.
 *
 * @summary Create or Update a workspace managed sql server's blob auditing policy.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateWorkspaceManagedSqlServerBlobAuditingSettingsWithMinParameters.json
 */
async function createOrUpdateBlobAuditingPolicyOfWorkspaceManagedSqlServerWithMinimalParameters(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "wsg-7398";
  const workspaceName = "testWorkspace";
  const blobAuditingPolicyName = "default";
  const parameters: ServerBlobAuditingPolicy = {
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.workspaceManagedSqlServerBlobAuditingPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    blobAuditingPolicyName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateBlobAuditingPolicyOfWorkspaceSqlServerWithAllParameters();
  createOrUpdateBlobAuditingPolicyOfWorkspaceManagedSqlServerWithMinimalParameters();
}

main().catch(console.error);
