/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IoTFirmwareDefenseClient } from "@azure/arm-iotfirmwaredefense";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to a url for tar file download.
 *
 * @summary The operation to a url for tar file download.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Firmwares_GenerateFilesystemDownloadUrl_MaximumSet_Gen.json
 */
async function firmwaresGenerateFilesystemDownloadUrlMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] ||
    "rgworkspaces-firmwares";
  const workspaceName = "A7";
  const firmwareId = "umrkdttp";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwares.generateFilesystemDownloadUrl(
    resourceGroupName,
    workspaceName,
    firmwareId,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to a url for tar file download.
 *
 * @summary The operation to a url for tar file download.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Firmwares_GenerateFilesystemDownloadUrl_MinimumSet_Gen.json
 */
async function firmwaresGenerateFilesystemDownloadUrlMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] ||
    "rgworkspaces-firmwares";
  const workspaceName = "A7";
  const firmwareId = "umrkdttp";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwares.generateFilesystemDownloadUrl(
    resourceGroupName,
    workspaceName,
    firmwareId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  firmwaresGenerateFilesystemDownloadUrlMaximumSetGen();
  firmwaresGenerateFilesystemDownloadUrlMinimumSetGen();
}

main().catch(console.error);
