/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PostgreSQLManagementClient } from "@azure/arm-postgresql";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List all the configurations in a given server.
 *
 * @summary List all the configurations in a given server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2017-12-01/examples/ConfigurationListByServer.json
 */
async function configurationList(): Promise<void> {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "TestGroup";
  const serverName = "testserver";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.configurations.listByServer(resourceGroupName, serverName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

configurationList().catch(console.error);
