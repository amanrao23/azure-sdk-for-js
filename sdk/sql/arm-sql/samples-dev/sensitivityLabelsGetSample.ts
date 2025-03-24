/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the sensitivity label of a given column
 *
 * @summary Gets the sensitivity label of a given column
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ColumnSensitivityLabelGet.json
 */
async function getsTheSensitivityLabelOfAGivenColumn(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "myRG";
  const serverName = "myServer";
  const databaseName = "myDatabase";
  const schemaName = "dbo";
  const tableName = "myTable";
  const columnName = "myColumn";
  const sensitivityLabelSource = "current";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.sensitivityLabels.get(
    resourceGroupName,
    serverName,
    databaseName,
    schemaName,
    tableName,
    columnName,
    sensitivityLabelSource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getsTheSensitivityLabelOfAGivenColumn();
}

main().catch(console.error);
