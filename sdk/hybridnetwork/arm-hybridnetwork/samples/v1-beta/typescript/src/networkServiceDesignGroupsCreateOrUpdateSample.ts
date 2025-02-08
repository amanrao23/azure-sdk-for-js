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
  NetworkServiceDesignGroup,
  HybridNetworkManagementClient
} from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a network service design group.
 *
 * @summary Creates or updates a network service design group.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/NetworkServiceDesignGroupCreate.json
 */
async function createOrUpdateTheNetworkServiceDesignGroup(): Promise<void> {
  const subscriptionId =
    process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg";
  const publisherName = "TestPublisher";
  const networkServiceDesignGroupName = "TestNetworkServiceDesignGroupName";
  const parameters: NetworkServiceDesignGroup = { location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publisherName,
    networkServiceDesignGroupName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateTheNetworkServiceDesignGroup();
}

main().catch(console.error);
