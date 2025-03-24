/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PeeringRegisteredPrefix } from "@azure/arm-peering";
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new registered prefix with the specified name under the given subscription, resource group and peering.
 *
 * @summary Creates a new registered prefix with the specified name under the given subscription, resource group and peering.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreateRegisteredPrefix.json
 */
async function createOrUpdateARegisteredPrefixForThePeering(): Promise<void> {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const registeredPrefixName = "registeredPrefixName";
  const registeredPrefix: PeeringRegisteredPrefix = { prefix: "10.22.20.0/24" };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.registeredPrefixes.createOrUpdate(
    resourceGroupName,
    peeringName,
    registeredPrefixName,
    registeredPrefix,
  );
  console.log(result);
}

createOrUpdateARegisteredPrefixForThePeering().catch(console.error);
