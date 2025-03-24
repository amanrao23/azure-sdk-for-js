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
  FunctionModel,
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a function or replaces an already existing function under an existing streaming job.
 *
 * @summary Creates a function or replaces an already existing function under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Function_Create_CSharp.json
 */
async function createAClrUdfFunction(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const functionName = "function588";
  const functionParam: FunctionModel = {
    properties: {
      type: "Scalar",
      binding: {
        type: "Microsoft.StreamAnalytics/CLRUdf",
        method: "SquareFunction",
        class: "ASAEdgeUDFDemo.Class1",
        dllPath: "ASAEdgeApplication2_CodeBehind",
        updateMode: "Static",
      },
      inputs: [{ dataType: "nvarchar(max)" }],
      output: { dataType: "nvarchar(max)" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.functions.createOrReplace(
    resourceGroupName,
    jobName,
    functionName,
    functionParam,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a function or replaces an already existing function under an existing streaming job.
 *
 * @summary Creates a function or replaces an already existing function under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Function_Create_JavaScript.json
 */
async function createAJavaScriptFunction(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg1637";
  const jobName = "sj8653";
  const functionName = "function8197";
  const functionParam: FunctionModel = {
    properties: {
      type: "Scalar",
      binding: {
        type: "Microsoft.StreamAnalytics/JavascriptUdf",
        script: "function (x, y) { return x + y; }",
      },
      inputs: [{ dataType: "Any" }],
      output: { dataType: "Any" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.functions.createOrReplace(
    resourceGroupName,
    jobName,
    functionName,
    functionParam,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a function or replaces an already existing function under an existing streaming job.
 *
 * @summary Creates a function or replaces an already existing function under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Function_Create_AzureMLService.json
 */
async function createAnAzureMlServiceFunction(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const functionName = "function588";
  const functionParam: FunctionModel = {
    properties: {
      type: "Scalar",
      binding: {
        type: "Microsoft.MachineLearningServices",
        apiKey: "someApiKey==",
        batchSize: 1000,
        endpoint: "someAzureMLEndpointURL",
        inputRequestName: "Inputs",
        inputs: [{ name: "data", dataType: "array", mapTo: 0 }],
        numberOfParallelRequests: 1,
        outputResponseName: "Results",
        outputs: [{ name: "Sentiment", dataType: "string" }],
      },
      inputs: [{ dataType: "nvarchar(max)" }],
      output: { dataType: "nvarchar(max)" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.functions.createOrReplace(
    resourceGroupName,
    jobName,
    functionName,
    functionParam,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a function or replaces an already existing function under an existing streaming job.
 *
 * @summary Creates a function or replaces an already existing function under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Function_Create_AzureML.json
 */
async function createAnAzureMlFunction(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7";
  const jobName = "sj9093";
  const functionName = "function588";
  const functionParam: FunctionModel = {
    properties: {
      type: "Scalar",
      binding: {
        type: "Microsoft.MachineLearning/WebService",
        apiKey: "someApiKey==",
        batchSize: 1000,
        endpoint: "someAzureMLEndpointURL",
        inputs: {
          name: "input1",
          columnNames: [{ name: "tweet", dataType: "string", mapTo: 0 }],
        },
        outputs: [{ name: "Sentiment", dataType: "string" }],
      },
      inputs: [{ dataType: "nvarchar(max)" }],
      output: { dataType: "nvarchar(max)" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.functions.createOrReplace(
    resourceGroupName,
    jobName,
    functionName,
    functionParam,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createAClrUdfFunction();
  createAJavaScriptFunction();
  createAnAzureMlServiceFunction();
  createAnAzureMlFunction();
}

main().catch(console.error);
