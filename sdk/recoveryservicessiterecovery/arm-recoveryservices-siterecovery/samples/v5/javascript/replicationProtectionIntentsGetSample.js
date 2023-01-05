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
 * This sample demonstrates how to Gets the details of an ASR replication protection intent.
 *
 * @summary Gets the details of an ASR replication protection intent.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationProtectionIntents_Get.json
 */
async function getsTheDetailsOfAReplicationProtectionIntentItem() {
  const subscriptionId = "509099b2-9d2c-4636-b43e-bd5cafb6be69";
  const resourceName = "vault1";
  const resourceGroupName = "resourceGroupPS1";
  const intentObjectName = "vm1";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationProtectionIntents.get(
    resourceName,
    resourceGroupName,
    intentObjectName
  );
  console.log(result);
}

getsTheDetailsOfAReplicationProtectionIntentItem().catch(console.error);
