/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { DeploymentStacksClient } from "@azure/arm-resourcesdeploymentstacks";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a Deployment stack with a given name at Management Group scope.
 *
 * @summary Gets a Deployment stack with a given name at Management Group scope.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2024-03-01/examples/DeploymentStackManagementGroupGet.json
 */
async function deploymentStacksManagementGroupGet(): Promise<void> {
  const managementGroupId = "myMg";
  const deploymentStackName = "simpleDeploymentStack";
  const credential = new DefaultAzureCredential();
  const client = new DeploymentStacksClient(credential);
  const result = await client.deploymentStacks.getAtManagementGroup(
    managementGroupId,
    deploymentStackName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deploymentStacksManagementGroupGet();
}

main().catch(console.error);
