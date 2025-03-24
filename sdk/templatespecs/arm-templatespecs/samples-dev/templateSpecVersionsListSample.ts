/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { TemplateSpecsClient } from "@azure/arm-templatespecs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all the Template Spec versions in the specified Template Spec.
 *
 * @summary Lists all the Template Spec versions in the specified Template Spec.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-05-01/examples/TemplateSpecVersionsList.json
 */
async function templateSpecVersionsList(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "templateSpecRG";
  const templateSpecName = "simpleTemplateSpec";
  const credential = new DefaultAzureCredential();
  const client = new TemplateSpecsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.templateSpecVersions.list(resourceGroupName, templateSpecName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

templateSpecVersionsList().catch(console.error);
