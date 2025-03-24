/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get applicable `Reservation`s that are applied to this subscription or a resource group under this subscription.
 *
 * @summary Get applicable `Reservation`s that are applied to this subscription or a resource group under this subscription.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/GetAppliedReservations.json
 */
async function appliedReservationList(): Promise<void> {
  const subscriptionId = "23bc208b-083f-4901-ae85-4f98c0c3b4b6";
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.getAppliedReservationList(subscriptionId);
  console.log(result);
}

async function main(): Promise<void> {
  appliedReservationList();
}

main().catch(console.error);
