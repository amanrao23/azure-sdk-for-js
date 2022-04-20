/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyDefinition, PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation creates or updates a policy definition in the given subscription with the given name.
 *
 * @summary This operation creates or updates a policy definition in the given subscription with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createOrUpdatePolicyDefinition.json
 */
async function createOrUpdateAPolicyDefinition() {
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyDefinitionName = "ResourceNaming";
  const parameters: PolicyDefinition = {
    description:
      "Force resource names to begin with given 'prefix' and/or end with given 'suffix'",
    displayName: "Enforce resource naming convention",
    metadata: { category: "Naming" },
    mode: "All",
    parameters: {
      prefix: {
        type: "String",
        metadata: { description: "Resource name prefix", displayName: "Prefix" }
      },
      suffix: {
        type: "String",
        metadata: { description: "Resource name suffix", displayName: "Suffix" }
      }
    },
    policyRule: {
      if: {
        not: {
          field: "name",
          like: "[concat(parameters('prefix'), '*', parameters('suffix'))]"
        }
      },
      then: { effect: "deny" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyDefinitions.createOrUpdate(
    policyDefinitionName,
    parameters
  );
  console.log(result);
}

createOrUpdateAPolicyDefinition().catch(console.error);

/**
 * This sample demonstrates how to This operation creates or updates a policy definition in the given subscription with the given name.
 *
 * @summary This operation creates or updates a policy definition in the given subscription with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createOrUpdatePolicyDefinitionAdvancedParams.json
 */
async function createOrUpdateAPolicyDefinitionWithAdvancedParameters() {
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyDefinitionName = "EventHubDiagnosticLogs";
  const parameters: PolicyDefinition = {
    description:
      "Audit enabling of logs and retain them up to a year. This enables recreation of activity trails for investigation purposes when a security incident occurs or your network is compromised",
    displayName: "Event Hubs should have diagnostic logging enabled",
    metadata: { category: "Event Hub" },
    mode: "Indexed",
    parameters: {
      requiredRetentionDays: {
        type: "Integer",
        metadata: {
          description: "The required diagnostic logs retention in days",
          displayName: "Required retention (days)"
        }
      }
    },
    policyRule: {
      if: { equals: "Microsoft.EventHub/namespaces", field: "type" },
      then: {
        effect: "AuditIfNotExists",
        details: {
          type: "Microsoft.Insights/diagnosticSettings",
          existenceCondition: {
            allOf: [
              {
                equals: "true",
                field:
                  "Microsoft.Insights/diagnosticSettings/logs[*].retentionPolicy.enabled"
              },
              {
                equals: "[parameters('requiredRetentionDays')]",
                field:
                  "Microsoft.Insights/diagnosticSettings/logs[*].retentionPolicy.days"
              }
            ]
          }
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyDefinitions.createOrUpdate(
    policyDefinitionName,
    parameters
  );
  console.log(result);
}

createOrUpdateAPolicyDefinitionWithAdvancedParameters().catch(console.error);
