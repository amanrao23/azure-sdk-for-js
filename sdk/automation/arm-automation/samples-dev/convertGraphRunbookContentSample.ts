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
  GraphicalRunbookContent,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Post operation to serialize or deserialize GraphRunbookContent
 *
 * @summary Post operation to serialize or deserialize GraphRunbookContent
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2021-06-22/examples/serializeGraphRunbookContent.json
 */
async function getGraphicalRawRunbookContentFromGraphicalRunbookJsonObject() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "MyAutomationAccount";
  const parameters: GraphicalRunbookContent = {
    graphRunbookJson: "<GraphRunbookJSON>"
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.convertGraphRunbookContent(
    resourceGroupName,
    automationAccountName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Post operation to serialize or deserialize GraphRunbookContent
 *
 * @summary Post operation to serialize or deserialize GraphRunbookContent
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2021-06-22/examples/deserializeGraphRunbookContent.json
 */
async function getGraphicalRunbookContentFromRawContent() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "MyAutomationAccount";
  const parameters: GraphicalRunbookContent = {
    rawContent: {
      runbookDefinition:
        "AAEAAADAQAAAAAAAAAMAgAAAGJPcmNoZXN0cmF0b3IuR3JhcGhSdW5ib29rLk1vZGVsLCBWZXJzaW9uPTcuMy4wLjAsIEN1bHR....",
      runbookType: "GraphPowerShell",
      schemaVersion: "1.10"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.convertGraphRunbookContent(
    resourceGroupName,
    automationAccountName,
    parameters
  );
  console.log(result);
}

async function main() {
  getGraphicalRawRunbookContentFromGraphicalRunbookJsonObject();
  getGraphicalRunbookContentFromRawContent();
}

main().catch(console.error);