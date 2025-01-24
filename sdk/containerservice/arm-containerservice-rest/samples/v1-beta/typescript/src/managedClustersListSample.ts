/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import ContainerServiceManagementClient, { paginate } from "@azure-rest/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of managed clusters in the specified subscription.
 *
 * @summary Gets a list of managed clusters in the specified subscription.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersList.json
 */
async function listManagedClusters(): Promise<void> {
  const subscriptionId = "subid1";
  const credential = new DefaultAzureCredential();
  const client = ContainerServiceManagementClient(credential);
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters",
      subscriptionId,
    )
    .get();
  const result = paginate(client, initialResponse);
  const resArray = new Array();
  for await (let item of result) {
    resArray.push(item);
  }
  console.log(resArray);
}

listManagedClusters().catch(console.error);
