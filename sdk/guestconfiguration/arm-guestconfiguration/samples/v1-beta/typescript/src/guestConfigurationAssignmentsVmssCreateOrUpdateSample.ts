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
  GuestConfigurationAssignment,
  GuestConfigurationClient,
} from "@azure/arm-guestconfiguration";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates an association between a VMSS and guest configuration
 *
 * @summary Creates an association between a VMSS and guest configuration
 * x-ms-original-file: specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/stable/2022-01-25/examples/createOrUpdateGuestConfigurationVMSSAssignment.json
 */
async function createOrUpdateGuestConfigurationAssignment(): Promise<void> {
  const subscriptionId =
    process.env["GUESTCONFIGURATION_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const resourceGroupName =
    process.env["GUESTCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroupName";
  const vmssName = "myVMSSName";
  const name = "NotInstalledApplicationForWindows";
  const parameters: GuestConfigurationAssignment = {
    name: "NotInstalledApplicationForWindows",
    location: "westcentralus",
    properties: {
      context: "Azure policy",
      guestConfiguration: {
        name: "NotInstalledApplicationForWindows",
        assignmentType: "ApplyAndAutoCorrect",
        configurationParameter: [
          {
            name: "[InstalledApplication]NotInstalledApplicationResource1;Name",
            value: "NotePad,sql",
          },
        ],
        contentHash: "123contenthash",
        contentUri: "https://thisisfake/pacakge",
        version: "1.0.0.3",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new GuestConfigurationClient(credential, subscriptionId);
  const result = await client.guestConfigurationAssignmentsVmss.createOrUpdate(
    resourceGroupName,
    vmssName,
    name,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateGuestConfigurationAssignment();
}

main().catch(console.error);
