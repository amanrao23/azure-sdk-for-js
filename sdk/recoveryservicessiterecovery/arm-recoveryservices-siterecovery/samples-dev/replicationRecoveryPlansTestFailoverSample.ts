/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { RecoveryPlanTestFailoverInput } from "@azure/arm-recoveryservices-siterecovery";
import { SiteRecoveryManagementClient } from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to start the test failover of a recovery plan.
 *
 * @summary The operation to start the test failover of a recovery plan.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationRecoveryPlans_TestFailover.json
 */
async function executeTestFailoverOfTheRecoveryPlan(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] || "resourceGroupPS1";
  const recoveryPlanName = "RPtest1";
  const input: RecoveryPlanTestFailoverInput = {
    properties: {
      failoverDirection: "PrimaryToRecovery",
      networkId:
        "/subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/siterecoveryProd1/providers/Microsoft.Network/virtualNetworks/vnetavrai",
      networkType: "VmNetworkAsInput",
      providerSpecificDetails: [{ instanceType: "HyperVReplicaAzure" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationRecoveryPlans.beginTestFailoverAndWait(
    resourceName,
    resourceGroupName,
    recoveryPlanName,
    input,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await executeTestFailoverOfTheRecoveryPlan();
}

main().catch(console.error);
