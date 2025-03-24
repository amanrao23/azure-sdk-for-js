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
  AccessPolicyUpdateParameters,
  TimeSeriesInsightsClient
} from "@azure/arm-timeseriesinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the access policy with the specified name in the specified subscription, resource group, and environment.
 *
 * @summary Updates the access policy with the specified name in the specified subscription, resource group, and environment.
 * x-ms-original-file: specification/timeseriesinsights/resource-manager/Microsoft.TimeSeriesInsights/preview/2021-03-31-preview/examples/AccessPoliciesPatchRoles.json
 */
async function accessPoliciesUpdate(): Promise<void> {
  const subscriptionId =
    process.env["TIMESERIESINSIGHTS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["TIMESERIESINSIGHTS_RESOURCE_GROUP"] || "rg1";
  const environmentName = "env1";
  const accessPolicyName = "ap1";
  const accessPolicyUpdateParameters: AccessPolicyUpdateParameters = {
    roles: ["Reader", "Contributor"]
  };
  const credential = new DefaultAzureCredential();
  const client = new TimeSeriesInsightsClient(credential, subscriptionId);
  const result = await client.accessPolicies.update(
    resourceGroupName,
    environmentName,
    accessPolicyName,
    accessPolicyUpdateParameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  accessPoliciesUpdate();
}

main().catch(console.error);
