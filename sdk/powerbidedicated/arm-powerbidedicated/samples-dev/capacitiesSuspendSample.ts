/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PowerBIDedicated } from "@azure/arm-powerbidedicated";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Suspends operation of the specified dedicated capacity instance.
 *
 * @summary Suspends operation of the specified dedicated capacity instance.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/suspendCapacity.json
 */
async function suspendCapacity(): Promise<void> {
  const subscriptionId =
    process.env["POWERBIDEDICATED_SUBSCRIPTION_ID"] || "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName = process.env["POWERBIDEDICATED_RESOURCE_GROUP"] || "TestRG";
  const dedicatedCapacityName = "azsdktest";
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.capacities.beginSuspendAndWait(
    resourceGroupName,
    dedicatedCapacityName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await suspendCapacity();
}

main().catch(console.error);
