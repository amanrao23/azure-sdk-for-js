/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to get predictive autoscale metric future data
 *
 * @summary get predictive autoscale metric future data
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-10-01/examples/GetPredictiveMetric.json
 */
async function getMetricForData(): Promise<void> {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "myRG";
  const autoscaleSettingName = "vmss1-Autoscale-775";
  const timespan = "2021-10-14T22:00:00.000Z/2021-10-16T22:00:00.000Z";
  const interval = "PT1H";
  const metricNamespace = "Microsoft.Compute/virtualMachineScaleSets";
  const metricName = "PercentageCPU";
  const aggregation = "Total";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.predictiveMetric.get(
    resourceGroupName,
    autoscaleSettingName,
    timespan,
    interval,
    metricNamespace,
    metricName,
    aggregation,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getMetricForData();
}

main().catch(console.error);
