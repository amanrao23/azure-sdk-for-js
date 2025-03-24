/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { MobileNetwork } from "@azure/arm-mobilenetwork";
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a mobile network.
 *
 * @summary Creates or updates a mobile network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2024-04-01/examples/MobileNetworkCreate.json
 */
async function createMobileNetwork(): Promise<void> {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const parameters: MobileNetwork = {
    location: "eastus",
    publicLandMobileNetworkIdentifier: { mcc: "001", mnc: "01" },
    publicLandMobileNetworks: [
      {
        homeNetworkPublicKeys: {
          profileA: [
            {
              id: 1,
              url: "https://contosovault.vault.azure.net/secrets/exampleHnpk",
            },
            {
              id: 2,
              url: "https://contosovault.vault.azure.net/secrets/exampleHnpk2/5e4876e9140e4e16bfe6e2cf92e0cbd2",
            },
          ],
          profileB: [
            {
              id: 1,
              url: "https://contosovault.vault.azure.net/secrets/exampleHnpkProfileB",
            },
          ],
        },
        mcc: "001",
        mnc: "01",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.mobileNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    mobileNetworkName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createMobileNetwork();
}

main().catch(console.error);
