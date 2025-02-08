/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HDInsightManagementClient } from "@azure/arm-hdinsight";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Restarts the specified HDInsight cluster hosts.
 *
 * @summary Restarts the specified HDInsight cluster hosts.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/preview/2024-08-01-preview/examples/RestartVirtualMachinesOperation.json
 */
async function restartsTheSpecifiedHdInsightClusterHosts(): Promise<void> {
  const subscriptionId = process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cluster1";
  const hosts = ["gateway1", "gateway3"];
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginRestartHostsAndWait(
    resourceGroupName,
    clusterName,
    hosts,
  );
  console.log(result);
}

async function main(): Promise<void> {
  restartsTheSpecifiedHdInsightClusterHosts();
}

main().catch(console.error);
