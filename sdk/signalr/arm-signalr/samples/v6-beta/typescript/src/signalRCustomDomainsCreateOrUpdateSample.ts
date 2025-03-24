/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CustomDomain, SignalRManagementClient } from "@azure/arm-signalr";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a custom domain.
 *
 * @summary Create or update a custom domain.
 * x-ms-original-file: specification/signalr/resource-manager/Microsoft.SignalRService/preview/2023-08-01-preview/examples/SignalRCustomDomains_CreateOrUpdate.json
 */
async function signalRCustomDomainsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["SIGNALR_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SIGNALR_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "mySignalRService";
  const name = "myDomain";
  const parameters: CustomDomain = {
    customCertificate: {
      id:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.SignalRService/SignalR/mySignalRService/customCertificates/myCert"
    },
    domainName: "example.com"
  };
  const credential = new DefaultAzureCredential();
  const client = new SignalRManagementClient(credential, subscriptionId);
  const result = await client.signalRCustomDomains.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    name,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  signalRCustomDomainsCreateOrUpdate();
}

main().catch(console.error);
