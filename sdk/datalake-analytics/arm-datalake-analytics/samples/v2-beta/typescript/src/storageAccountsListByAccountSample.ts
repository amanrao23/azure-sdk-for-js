/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  StorageAccountsListByAccountOptionalParams,
  DataLakeAnalyticsAccountManagementClient
} from "@azure/arm-datalake-analytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.
 *
 * @summary Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.
 * x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_ListByAccount.json
 */
async function getsTheFirstPageOfAzureStorageAccountsLinkedToTheSpecifiedDataLakeAnalyticsAccount(): Promise<void> {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "contosorg";
  const accountName = "contosoadla";
  const filter = "test_filter";
  const top = 1;
  const skip = 1;
  const select = "test_select";
  const orderby = "test_orderby";
  const count = false;
  const options: StorageAccountsListByAccountOptionalParams = {
    filter,
    top,
    skip,
    select,
    orderby,
    count
  };
  const credential = new DefaultAzureCredential();
  const client = new DataLakeAnalyticsAccountManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.storageAccounts.listByAccount(
    resourceGroupName,
    accountName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getsTheFirstPageOfAzureStorageAccountsLinkedToTheSpecifiedDataLakeAnalyticsAccount().catch(
  console.error
);
