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
  GenerateUploadUrlRequest,
  IoTFirmwareDefenseClient,
} from "@azure/arm-iotfirmwaredefense";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to get a url for file upload.
 *
 * @summary The operation to get a url for file upload.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Workspaces_GenerateUploadUrl_MaximumSet_Gen.json
 */
async function workspacesGenerateUploadUrlMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "5443A01A-5242-4950-AC1A-2DD362180254";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces";
  const workspaceName = "E___-3";
  const generateUploadUrl: GenerateUploadUrlRequest = {
    firmwareId: "ytsfprbywi",
  };
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.workspaces.generateUploadUrl(
    resourceGroupName,
    workspaceName,
    generateUploadUrl,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get a url for file upload.
 *
 * @summary The operation to get a url for file upload.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Workspaces_GenerateUploadUrl_MinimumSet_Gen.json
 */
async function workspacesGenerateUploadUrlMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "5443A01A-5242-4950-AC1A-2DD362180254";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces";
  const workspaceName = "E___-3";
  const generateUploadUrl: GenerateUploadUrlRequest = {};
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.workspaces.generateUploadUrl(
    resourceGroupName,
    workspaceName,
    generateUploadUrl,
  );
  console.log(result);
}

async function main(): Promise<void> {
  workspacesGenerateUploadUrlMaximumSetGen();
  workspacesGenerateUploadUrlMinimumSetGen();
}

main().catch(console.error);
