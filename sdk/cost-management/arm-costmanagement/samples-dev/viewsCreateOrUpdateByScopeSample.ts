/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { View } from "@azure/arm-costmanagement";
import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to create or update a view. Update operation requires latest eTag to be set in the request. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.
 *
 * @summary The operation to create or update a view. Update operation requires latest eTag to be set in the request. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ViewCreateOrUpdateByResourceGroup.json
 */
async function resourceGroupCreateOrUpdateView(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG";
  const viewName = "swaggerExample";
  const parameters: View = {
    typePropertiesQueryType: "Usage",
    accumulated: "true",
    chart: "Table",
    dataSet: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "Daily",
      grouping: [],
      sorting: [{ name: "UsageDate", direction: "Ascending" }],
    },
    displayName: "swagger Example",
    eTag: '"1d4ff9fe66f1d10"',
    kpis: [
      { type: "Forecast", enabled: true, id: undefined },
      {
        type: "Budget",
        enabled: true,
        id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Consumption/budgets/swaggerDemo",
      },
    ],
    metric: "ActualCost",
    pivots: [
      { name: "ServiceName", type: "Dimension" },
      { name: "MeterCategory", type: "Dimension" },
      { name: "swaggerTagKey", type: "TagKey" },
    ],
    timeframe: "MonthToDate",
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.views.createOrUpdateByScope(scope, viewName, parameters);
  console.log(result);
}

async function main(): Promise<void> {
  await resourceGroupCreateOrUpdateView();
}

main().catch(console.error);
