/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { Catalog, DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a catalog.
 *
 * @summary Creates or updates a catalog.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/Catalogs_CreateAdo.json
 */
async function catalogsCreateOrUpdateAdo(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const devCenterName = "Contoso";
  const catalogName = "CentralCatalog";
  const body: Catalog = {
    adoGit: {
      path: "/templates",
      branch: "main",
      secretIdentifier:
        "https://contosokv.vault.azure.net/secrets/CentralRepoPat",
      uri: "https://contoso@dev.azure.com/contoso/contosoOrg/_git/centralrepo-fakecontoso",
    },
    syncType: "Scheduled",
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.catalogs.beginCreateOrUpdateAndWait(
    resourceGroupName,
    devCenterName,
    catalogName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a catalog.
 *
 * @summary Creates or updates a catalog.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/Catalogs_CreateGitHub.json
 */
async function catalogsCreateOrUpdateGitHub(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const devCenterName = "Contoso";
  const catalogName = "CentralCatalog";
  const body: Catalog = {
    gitHub: {
      path: "/templates",
      branch: "main",
      secretIdentifier:
        "https://contosokv.vault.azure.net/secrets/CentralRepoPat",
      uri: "https://github.com/Contoso/centralrepo-fake.git",
    },
    syncType: "Manual",
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.catalogs.beginCreateOrUpdateAndWait(
    resourceGroupName,
    devCenterName,
    catalogName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  catalogsCreateOrUpdateAdo();
  catalogsCreateOrUpdateGitHub();
}

main().catch(console.error);
