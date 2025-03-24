/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureQuantumManagementClient } from "@azure/arm-quantum";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns the list of all provider offerings available for the given location.
 *
 * @summary Returns the list of all provider offerings available for the given location.
 * x-ms-original-file: specification/quantum/resource-manager/Microsoft.Quantum/preview/2023-11-13-preview/examples/offeringsList.json
 */
async function offeringsList(): Promise<void> {
  const subscriptionId =
    process.env["QUANTUM_SUBSCRIPTION_ID"] || "1C4B2828-7D49-494F-933D-061373BE28C2";
  const locationName = "westus2";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuantumManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.offerings.list(locationName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await offeringsList();
}

main().catch(console.error);
