/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DevicePatch } from "@azure/arm-storsimple1200series";
import { StorSimpleManagementClient } from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Patches the device.
 *
 * @summary Patches the device.
 * x-ms-original-file: specification/storsimple1200series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/DevicesPatch.json
 */
async function devicesPatch(): Promise<void> {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-UGU4PITWNI";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const devicePatch: DevicePatch = {
    deviceDescription: "NewDescription8/14/2018 2:30:34 PM",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.devices.beginPatchAndWait(
    deviceName,
    resourceGroupName,
    managerName,
    devicePatch,
  );
  console.log(result);
}

devicesPatch().catch(console.error);
