/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation deletes the policy set definition in the given subscription with the given name.
 *
 * @summary This operation deletes the policy set definition in the given subscription with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/deletePolicySetDefinition.json
 */
async function deleteAPolicySetDefinition() {
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policySetDefinitionName = "CostManagement";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policySetDefinitions.delete(
    policySetDefinitionName
  );
  console.log(result);
}

deleteAPolicySetDefinition().catch(console.error);
