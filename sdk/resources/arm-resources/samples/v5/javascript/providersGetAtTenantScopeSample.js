/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ResourceManagementClient } = require("@azure/arm-resources");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the specified resource provider at the tenant level.
 *
 * @summary Gets the specified resource provider at the tenant level.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/GetNamedProviderAtTenant.json
 */
async function getAResourceProviderAtTenantScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const expand = "resourceTypes/aliases";
  const resourceProviderNamespace = "Microsoft.Storage";
  const options = { expand };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.providers.getAtTenantScope(resourceProviderNamespace, options);
  console.log(result);
}

getAResourceProviderAtTenantScope().catch(console.error);
