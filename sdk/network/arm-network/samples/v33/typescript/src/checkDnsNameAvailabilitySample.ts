/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks whether a domain name in the cloudapp.azure.com zone is available for use.
 *
 * @summary Checks whether a domain name in the cloudapp.azure.com zone is available for use.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/CheckDnsNameAvailability.json
 */
async function checkDnsNameAvailability(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const location = "westus";
  const domainNameLabel = "testdns";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.checkDnsNameAvailability(
    location,
    domainNameLabel,
  );
  console.log(result);
}

async function main(): Promise<void> {
  checkDnsNameAvailability();
}

main().catch(console.error);
