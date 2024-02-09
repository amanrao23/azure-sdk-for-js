/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete backup policy
 *
 * @summary Delete backup policy
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2023-05-01/examples/BackupPolicies_Delete.json
 */
async function backupsDelete() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName =
    process.env["NETAPP_RESOURCE_GROUP"] || "resourceGroup";
  const accountName = "accountName";
  const backupPolicyName = "backupPolicyName";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backupPolicies.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    backupPolicyName
  );
  console.log(result);
}

async function main() {
  backupsDelete();
}

main().catch(console.error);
