/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DeploymentStack } from "@azure/arm-resourcesdeploymentstacks";
import { DeploymentStacksClient } from "@azure/arm-resourcesdeploymentstacks";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Runs preflight validation on the Management Group scoped Deployment stack template to verify its acceptance to Azure Resource Manager.
 *
 * @summary Runs preflight validation on the Management Group scoped Deployment stack template to verify its acceptance to Azure Resource Manager.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2024-03-01/examples/DeploymentStackManagementGroupValidate.json
 */
async function deploymentStacksManagementGroupValidate(): Promise<void> {
  const managementGroupId = "myMg";
  const deploymentStackName = "simpleDeploymentStack";
  const deploymentStack: DeploymentStack = {
    location: "eastus",
    properties: {
      actionOnUnmanage: {
        managementGroups: "detach",
        resourceGroups: "detach",
        resources: "detach",
      },
      denySettings: {
        applyToChildScopes: false,
        excludedActions: ["action"],
        excludedPrincipals: ["principal"],
        mode: "denyDelete",
      },
      parameters: { parameter1: { value: "a string" } },
      templateLink: { uri: "https://example.com/exampleTemplate.json" },
    },
    tags: { tagkey: "tagVal" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DeploymentStacksClient(credential);
  const result = await client.deploymentStacks.beginValidateStackAtManagementGroupAndWait(
    managementGroupId,
    deploymentStackName,
    deploymentStack,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deploymentStacksManagementGroupValidate();
}

main().catch(console.error);
