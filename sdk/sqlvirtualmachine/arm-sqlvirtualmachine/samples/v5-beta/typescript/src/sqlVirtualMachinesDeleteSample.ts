/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlVirtualMachineManagementClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a SQL virtual machine.
 *
 * @summary Deletes a SQL virtual machine.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2022-08-01-preview/examples/DeleteSqlVirtualMachine.json
 */
async function deletesASqlVirtualMachine(): Promise<void> {
  const subscriptionId =
    process.env["SQLVIRTUALMACHINE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQLVIRTUALMACHINE_RESOURCE_GROUP"] || "testrg";
  const sqlVirtualMachineName = "testvm1";
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.sqlVirtualMachines.beginDeleteAndWait(
    resourceGroupName,
    sqlVirtualMachineName
  );
  console.log(result);
}

async function main(): Promise<void> {
  deletesASqlVirtualMachine();
}

main().catch(console.error);
