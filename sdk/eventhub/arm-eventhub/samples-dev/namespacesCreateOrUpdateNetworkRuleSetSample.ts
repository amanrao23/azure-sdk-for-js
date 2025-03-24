/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkRuleSet, EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update NetworkRuleSet for a Namespace.
 *
 * @summary Create or update NetworkRuleSet for a Namespace.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/preview/2024-05-01-preview/examples/NameSpaces/VirtualNetworkRule/EHNetworkRuleSetCreate.json
 */
async function nameSpaceNetworkRuleSetCreate(): Promise<void> {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "Subscription";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "ResourceGroup";
  const namespaceName = "sdk-Namespace-6019";
  const parameters: NetworkRuleSet = {
    defaultAction: "Deny",
    ipRules: [
      { action: "Allow", ipMask: "1.1.1.1" },
      { action: "Allow", ipMask: "1.1.1.2" },
      { action: "Allow", ipMask: "1.1.1.3" },
      { action: "Allow", ipMask: "1.1.1.4" },
      { action: "Allow", ipMask: "1.1.1.5" },
    ],
    virtualNetworkRules: [
      {
        ignoreMissingVnetServiceEndpoint: true,
        subnet: {
          id: "/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet2",
        },
      },
      {
        ignoreMissingVnetServiceEndpoint: false,
        subnet: {
          id: "/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet3",
        },
      },
      {
        ignoreMissingVnetServiceEndpoint: false,
        subnet: {
          id: "/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet6",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.namespaces.createOrUpdateNetworkRuleSet(
    resourceGroupName,
    namespaceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await nameSpaceNetworkRuleSetCreate();
}

main().catch(console.error);
