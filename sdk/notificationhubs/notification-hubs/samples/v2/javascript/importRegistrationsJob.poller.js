// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how the createNotificationJob() method can be used to import registrations
 * descriptions from an existing set of exports.
 *
 * See https://learn.microsoft.com/azure/notification-hubs/export-modify-registrations-bulk
 * to learn about Export and Import Registrations in Azure Notification Hubs.
 *
 *
 * @summary Demonstrates how to import registrations into a Notification Hub.
 */

require("dotenv/config");
const {
  beginSubmitNotificationHubJob,
  createClientContext,
} = require("@azure/notification-hubs/api");

// Define connection string and hub name
const connectionString = process.env.NOTIFICATIONHUBS_CONNECTION_STRING || "<connection string>";
const hubName = process.env.NOTIFICATION_HUB_NAME || "<hub name>";

// Define export job parameters
const outputContainerUrl = process.env.OUTPUT_CONTAINER_URL || "<output container URL>";
const importFileUrl = process.env.IMPORT_FILE_URL || "<import file URL>";

async function main() {
  const context = createClientContext(connectionString, hubName);

  let importJob = {
    outputContainerUrl,
    importFileUrl,
    type: "ImportCreateRegistrations",
  };

  const poller = await beginSubmitNotificationHubJob(context, importJob);
  importJob = await poller.pollUntilDone();

  console.log(`Notification Hub Job status: ${importJob.status}`);
}

main().catch((err) => {
  console.log("exportRegistrationJob Sample: Error occurred: ", err);
  process.exit(1);
});
