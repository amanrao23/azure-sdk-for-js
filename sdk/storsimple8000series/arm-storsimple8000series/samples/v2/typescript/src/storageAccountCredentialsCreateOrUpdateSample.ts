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
  StorageAccountCredential,
  StorSimple8000SeriesManagementClient
} from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the storage account credential.
 *
 * @summary Creates or updates the storage account credential.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/StorageAccountCredentialsCreateOrUpdate.json
 */
async function storageAccountCredentialsCreateOrUpdate(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const storageAccountCredentialName = "SACForTest";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const parameters: StorageAccountCredential = {
    accessKey: {
      encryptionAlgorithm: "RSAES_PKCS1_v_1_5",
      encryptionCertThumbprint: "A872A2DF196AC7682EE24791E7DE2E2A360F5926",
      value:
        "ATuJSkmrFk4h8r1jrZ4nd3nthLSddcguEO5QLO/NECUtTuB9kL4dNv3/jC4WOvFkeVr3x1UvfhlIeMmJBF1SMr6hR1JzD0xNU/TtQqUeXN7V3jk7I+2l67P9StuHWR6OMd3XOLwvznxOEQtEWpweDiobZU1ZiY03WafcGZFpV5j6tEoHeopoZ1J/GhPtkYmx+TqxzUN6qnir5rP3NSYiZciImP/qu8U9yUV/xpVRv39KvFc2Yr5SpKpMMRUj55XW10UnPer63M6KovF8X9Wi/fNnrZAs1Esl5XddZETGrW/e5B++VMJ6w0Q/uvPR+UBwrOU0804l0SzwdIe3qVVd0Q=="
    },
    endPoint: "blob.core.windows.net",
    sslStatus: "Enabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.storageAccountCredentials.beginCreateOrUpdateAndWait(
    storageAccountCredentialName,
    resourceGroupName,
    managerName,
    parameters
  );
  console.log(result);
}

storageAccountCredentialsCreateOrUpdate().catch(console.error);
