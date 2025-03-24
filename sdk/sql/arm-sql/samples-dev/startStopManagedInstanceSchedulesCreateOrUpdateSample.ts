/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { StartStopManagedInstanceSchedule } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates the managed instance's Start/Stop schedule.
 *
 * @summary Creates or updates the managed instance's Start/Stop schedule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/StartStopManagedInstanceScheduleCreateOrUpdateMax.json
 */
async function createsOrUpdatesTheManagedInstanceStartOrStopScheduleWithAllOptionalParametersSpecified(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "schedulerg";
  const managedInstanceName = "schedulemi";
  const startStopScheduleName = "default";
  const parameters: StartStopManagedInstanceSchedule = {
    description: "This is a schedule for our Dev/Test environment.",
    scheduleList: [
      {
        startDay: "Thursday",
        startTime: "18:00",
        stopDay: "Thursday",
        stopTime: "17:00",
      },
      {
        startDay: "Thursday",
        startTime: "15:00",
        stopDay: "Thursday",
        stopTime: "14:00",
      },
    ],
    timeZoneId: "Central European Standard Time",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.startStopManagedInstanceSchedules.createOrUpdate(
    resourceGroupName,
    managedInstanceName,
    startStopScheduleName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the managed instance's Start/Stop schedule.
 *
 * @summary Creates or updates the managed instance's Start/Stop schedule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/StartStopManagedInstanceScheduleCreateOrUpdateMin.json
 */
async function createsOrUpdatesTheManagedInstanceStartOrStopScheduleWithNoOptionalParametersSpecified(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "schedulerg";
  const managedInstanceName = "schedulemi";
  const startStopScheduleName = "default";
  const parameters: StartStopManagedInstanceSchedule = {
    scheduleList: [
      {
        startDay: "Thursday",
        startTime: "18:00",
        stopDay: "Thursday",
        stopTime: "17:00",
      },
      {
        startDay: "Thursday",
        startTime: "15:00",
        stopDay: "Thursday",
        stopTime: "14:00",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.startStopManagedInstanceSchedules.createOrUpdate(
    resourceGroupName,
    managedInstanceName,
    startStopScheduleName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesTheManagedInstanceStartOrStopScheduleWithAllOptionalParametersSpecified();
  await createsOrUpdatesTheManagedInstanceStartOrStopScheduleWithNoOptionalParametersSpecified();
}

main().catch(console.error);
