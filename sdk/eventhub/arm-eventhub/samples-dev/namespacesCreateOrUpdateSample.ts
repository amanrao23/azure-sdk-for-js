/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EHNamespace, EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
 *
 * @summary Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/preview/2022-10-01-preview/examples/NameSpaces/EHNameSpaceCreate.json
 */
async function namespaceCreate() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "SampleSubscription";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "ResurceGroupSample";
  const namespaceName = "NamespaceSample";
  const parameters: EHNamespace = {
    clusterArmId:
      "/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.EventHub/clusters/enc-test",
    encryption: {
      keySource: "Microsoft.KeyVault",
      keyVaultProperties: [
        {
          identity: {
            userAssignedIdentity:
              "/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud1"
          },
          keyName: "Samplekey",
          keyVaultUri: "https://aprao-keyvault-user.vault-int.azure-int.net/"
        }
      ]
    },
    identity: {
      type: "SystemAssigned, UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/MicrosoftManagedIdentity/userAssignedIdentities/ud1": {},
        "/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/MicrosoftManagedIdentity/userAssignedIdentities/ud2": {}
      }
    },
    location: "East US"
  };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.namespaces.beginCreateOrUpdateAndWait(
    resourceGroupName,
    namespaceName,
    parameters
  );
  console.log(result);
}

async function main() {
  namespaceCreate();
}

main().catch(console.error);
