/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.
 *
 * @summary Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/PrivateZoneGet.json
 */
async function getPrivateDnsZone(): Promise<void> {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.privateZones.get(
    resourceGroupName,
    privateZoneName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getPrivateDnsZone();
}

main().catch(console.error);
