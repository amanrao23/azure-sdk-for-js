/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Lists all of the peering services under the given subscription and resource group.
 *
 * @summary Lists all of the peering services under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/ListPeeringServicesByResourceGroup.json
 */
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function listPeeringServicesInAResourceGroup(): Promise<void> {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.peeringServices.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPeeringServicesInAResourceGroup().catch(console.error);
