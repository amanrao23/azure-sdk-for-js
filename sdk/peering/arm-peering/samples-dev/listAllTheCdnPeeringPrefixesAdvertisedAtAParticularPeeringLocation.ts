/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Lists all of the advertised prefixes for the specified peering location
 *
 * @summary Lists all of the advertised prefixes for the specified peering location
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/ListCdnPeeringPrefixes.json
 */
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function listAllTheCdnPeeringPrefixesAdvertisedAtAParticularPeeringLocation(): Promise<void> {
  const subscriptionId = "subId";
  const peeringLocation = "peeringLocation0";
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.cdnPeeringPrefixes.list(peeringLocation)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllTheCdnPeeringPrefixesAdvertisedAtAParticularPeeringLocation().catch(console.error);
