/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List ScriptCmdlet resources by ScriptPackage
 *
 * @summary List ScriptCmdlet resources by ScriptPackage
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/ScriptCmdlets_List.json
 */
async function scriptCmdletsList() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const scriptPackageName = "package@1.0.2";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.scriptCmdlets.list(
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  scriptCmdletsList();
}

main().catch(console.error);
