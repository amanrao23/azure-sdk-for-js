/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets details for a specific file workspace.
 *
 * @summary Gets details for a specific file workspace.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2024-04-01/examples/GetFileWorkspaceDetails.json
 */
async function getDetailsOfAFileWorkspace(): Promise<void> {
  const fileWorkspaceName = "testworkspace";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential);
  const result =
    await client.fileWorkspacesNoSubscription.get(fileWorkspaceName);
  console.log(result);
}

async function main(): Promise<void> {
  getDetailsOfAFileWorkspace();
}

main().catch(console.error);
