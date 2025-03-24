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
  SecuritySettings,
  StorSimpleManagementClient
} from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the security settings.
 *
 * @summary Creates or updates the security settings.
 * x-ms-original-file: specification/storsimple1200series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/DevicesCreateOrUpdateSecuritySettings.json
 */
async function devicesCreateOrUpdateSecuritySettings(): Promise<void> {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-T4ZA3EAJFR";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const securitySettings: SecuritySettings = {
    deviceAdminPassword: {
      encryptionAlgorithm: "RSAES_PKCS1_v_1_5",
      encryptionCertificateThumbprint:
        "D73DB57C4CDD6761E159F8D1E8A7D759424983FD",
      value: "<value>"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.devices.beginCreateOrUpdateSecuritySettingsAndWait(
    deviceName,
    resourceGroupName,
    managerName,
    securitySettings
  );
  console.log(result);
}

devicesCreateOrUpdateSecuritySettings().catch(console.error);
