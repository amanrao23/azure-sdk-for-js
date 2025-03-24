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
  DryrunPatch,
  ServiceLinkerManagementClient,
} from "@azure/arm-servicelinker";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to update a dryrun job to do necessary check before actual creation
 *
 * @summary update a dryrun job to do necessary check before actual creation
 * x-ms-original-file: specification/servicelinker/resource-manager/Microsoft.ServiceLinker/preview/2024-07-01-preview/examples/ConnectorDryrunUpdate.json
 */
async function connectorDryrunUpdate(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICELINKER_RESOURCE_GROUP"] || "test-rg";
  const location = "westus";
  const dryrunName = "dryrunName";
  const parameters: DryrunPatch = {
    parameters: {
      actionName: "createOrUpdate",
      authInfo: {
        name: "name",
        authType: "secret",
        secretInfo: { secretType: "rawValue", value: "secret" },
      },
      targetService: {
        type: "AzureResource",
        id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DocumentDb/databaseAccounts/test-acc/mongodbDatabases/test-db",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceLinkerManagementClient(credential);
  const result = await client.connector.beginUpdateDryrunAndWait(
    subscriptionId,
    resourceGroupName,
    location,
    dryrunName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  connectorDryrunUpdate();
}

main().catch(console.error);
