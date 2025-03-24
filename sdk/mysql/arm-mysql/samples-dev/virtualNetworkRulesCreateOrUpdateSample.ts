/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { VirtualNetworkRule } from "@azure/arm-mysql";
import { MySQLManagementClient } from "@azure/arm-mysql";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates an existing virtual network rule.
 *
 * @summary Creates or updates an existing virtual network rule.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2017-12-01/examples/VirtualNetworkRulesCreateOrUpdate.json
 */
async function createOrUpdateAVirtualNetworkRule(): Promise<void> {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "TestGroup";
  const serverName = "vnet-test-svr";
  const virtualNetworkRuleName = "vnet-firewall-rule";
  const parameters: VirtualNetworkRule = {
    ignoreMissingVnetServiceEndpoint: false,
    virtualNetworkSubnetId:
      "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestGroup/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet",
  };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkRules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    virtualNetworkRuleName,
    parameters,
  );
  console.log(result);
}

createOrUpdateAVirtualNetworkRule().catch(console.error);
