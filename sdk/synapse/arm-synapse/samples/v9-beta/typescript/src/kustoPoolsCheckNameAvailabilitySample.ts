/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  KustoPoolCheckNameRequest,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks that the kusto pool name is valid and is not already in use.
 *
 * @summary Checks that the kusto pool name is valid and is not already in use.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolsCheckNameAvailability.json
 */
async function kustoPoolsCheckNameAvailability(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const location = "westus";
  const kustoPoolName: KustoPoolCheckNameRequest = {
    name: "kustoclusterrptest4",
    type: "Microsoft.Synapse/workspaces/kustoPools"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPools.checkNameAvailability(
    location,
    kustoPoolName
  );
  console.log(result);
}

async function main(): Promise<void> {
  kustoPoolsCheckNameAvailability();
}

main().catch(console.error);
