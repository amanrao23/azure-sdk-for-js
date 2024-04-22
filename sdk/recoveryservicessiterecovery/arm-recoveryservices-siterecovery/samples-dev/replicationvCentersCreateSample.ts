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
  AddVCenterRequest,
  SiteRecoveryManagementClient,
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create a vCenter object..
 *
 * @summary The operation to create a vCenter object..
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationvCenters_Create.json
 */
async function addVCenter() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "7c943c1b-5122-4097-90c8-861411bdd574";
  const resourceName = "MadhaviVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] || "MadhaviVRG";
  const fabricName = "MadhaviFabric";
  const vcenterName = "esx-78";
  const addVCenterRequest: AddVCenterRequest = {
    properties: {
      friendlyName: "esx-78",
      ipAddress: "inmtest78",
      port: "443",
      processServerId: "5A720CAB-39CB-F445-BD1662B0B33164B5",
      runAsAccountId: "2",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationvCenters.beginCreateAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    vcenterName,
    addVCenterRequest,
  );
  console.log(result);
}

async function main() {
  addVCenter();
}

main().catch(console.error);
