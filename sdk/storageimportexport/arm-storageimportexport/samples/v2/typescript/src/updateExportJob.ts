/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.
 *
 * @summary Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.
 * x-ms-original-file: specification/storageimportexport/resource-manager/Microsoft.ImportExport/preview/2021-01-01/examples/UpdateExportJob.json
 */
import {
  UpdateJobParameters,
  StorageImportExport
} from "@azure/arm-storageimportexport";
import { DefaultAzureCredential } from "@azure/identity";

async function updateExportJob(): Promise<void> {
  const subscriptionId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const jobName = "myExportJob";
  const resourceGroupName = "myResourceGroup";
  const body: UpdateJobParameters = {
    backupDriveManifest: true,
    logLevel: "Verbose",
    state: ""
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageImportExport(credential, subscriptionId);
  const result = await client.jobs.update(jobName, resourceGroupName, body);
  console.log(result);
}

updateExportJob().catch(console.error);
