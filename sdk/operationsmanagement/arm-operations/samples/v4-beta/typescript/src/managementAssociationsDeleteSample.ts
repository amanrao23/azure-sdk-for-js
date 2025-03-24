/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OperationsManagementClient } from "@azure/arm-operations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the ManagementAssociation in the subscription.
 *
 * @summary Deletes the ManagementAssociation in the subscription.
 * x-ms-original-file: specification/operationsmanagement/resource-manager/Microsoft.OperationsManagement/preview/2015-11-01-preview/examples/ManagementAssociationDelete.json
 */
async function solutionDelete(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const providerName = "providerName";
  const resourceType = "resourceType";
  const resourceName = "resourceName";
  const managementAssociationName = "managementAssociationName";
  const credential = new DefaultAzureCredential();
  const client = new OperationsManagementClient(credential, subscriptionId);
  const result = await client.managementAssociations.delete(
    resourceGroupName,
    providerName,
    resourceType,
    resourceName,
    managementAssociationName
  );
  console.log(result);
}

solutionDelete().catch(console.error);
