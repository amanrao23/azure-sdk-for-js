/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SiteRecoveryManagementClient } = require("@azure/arm-recoveryservices-siterecovery");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The operation to update a registered vCenter.
 *
 * @summary The operation to update a registered vCenter.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationvCenters_Update.json
 */
async function updateVCenterOperation() {
  const subscriptionId = "7c943c1b-5122-4097-90c8-861411bdd574";
  const resourceName = "MadhaviVault";
  const resourceGroupName = "MadhaviVRG";
  const fabricName = "MadhaviFabric";
  const vcenterName = "esx-78";
  const updateVCenterRequest = {
    properties: { ipAddress: "10.150.109.25" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationvCenters.beginUpdateAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    vcenterName,
    updateVCenterRequest
  );
  console.log(result);
}

updateVCenterOperation().catch(console.error);
