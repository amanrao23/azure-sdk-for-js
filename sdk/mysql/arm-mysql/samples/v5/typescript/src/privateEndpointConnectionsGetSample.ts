/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MySQLManagementClient } from "@azure/arm-mysql";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a private endpoint connection.
 *
 * @summary Gets a private endpoint connection.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2018-06-01/examples/PrivateEndpointConnectionGet.json
 */
async function getsPrivateEndpointConnection(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "Default";
  const serverName = "test-svr";
  const privateEndpointConnectionName = "private-endpoint-connection-name";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.get(
    resourceGroupName,
    serverName,
    privateEndpointConnectionName
  );
  console.log(result);
}

getsPrivateEndpointConnection().catch(console.error);
