/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  CreateDataFlowDebugSessionRequest,
  DataFactoryManagementClient,
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a data flow debug session.
 *
 * @summary Creates a data flow debug session.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/DataFlowDebugSession_Create.json
 */
async function dataFlowDebugSessionCreate(): Promise<void> {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const request: CreateDataFlowDebugSessionRequest = {
    integrationRuntime: {
      name: "ir1",
      properties: {
        type: "Managed",
        computeProperties: {
          dataFlowProperties: {
            computeType: "General",
            coreCount: 48,
            timeToLive: 10,
          },
          location: "AutoResolve",
        },
      },
    },
    timeToLive: 60,
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.dataFlowDebugSession.beginCreateAndWait(
    resourceGroupName,
    factoryName,
    request,
  );
  console.log(result);
}

async function main(): Promise<void> {
  dataFlowDebugSessionCreate();
}

main().catch(console.error);
