/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { BareMetalInfrastructureClient } from "@azure/arm-baremetalinfrastructure";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of AzureBareMetal instances in the specified subscription. The operations returns various properties of each Azure BareMetal instance.
 *
 * @summary Gets a list of AzureBareMetal instances in the specified subscription. The operations returns various properties of each Azure BareMetal instance.
 * x-ms-original-file: specification/baremetalinfrastructure/resource-manager/Microsoft.BareMetalInfrastructure/stable/2021-08-09/examples/AzureBareMetalInstances_ListBySubscription.json
 */
async function listAllAzureBareMetalInstancesInASubscription() {
  const subscriptionId =
    process.env["BAREMETALINFRASTRUCTURE_SUBSCRIPTION_ID"] ||
    "f0f4887f-d13c-4943-a8ba-d7da28d2a3fd";
  const credential = new DefaultAzureCredential();
  const client = new BareMetalInfrastructureClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.azureBareMetalInstances.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllAzureBareMetalInstancesInASubscription();
}

main().catch(console.error);
