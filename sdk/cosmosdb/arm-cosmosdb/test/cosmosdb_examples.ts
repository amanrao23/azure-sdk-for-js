/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { CosmosDBManagementClient } from "../src/cosmosDBManagementClient";



const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};


export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Cosmosdb test", () => {
  let recorder: Recorder;
  let client: CosmosDBManagementClient;
  let subscriptionId: string;
  let location: string;
  let resourceGroupName: string;
  let accountName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new CosmosDBManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroupName = "czwjstest";
    accountName = "myaccountxxyy2";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("databaseAccounts create test", async function () {
    const res = await client.databaseAccounts.beginCreateOrUpdateAndWait(resourceGroupName, accountName, {
      databaseAccountOfferType: "Standard",
      locations: [
        {
          failoverPriority: 2,
          locationName: "southcentralus",
          isZoneRedundant: false
        },
        {
          locationName: "eastus",
          failoverPriority: 1
        },
        {
          locationName: "westus",
          failoverPriority: 0
        }
      ],
      location: location,
      createMode: "Default"
    }, testPollingOptions);
    assert.equal(res.name, accountName);
  });

  it("databaseAccounts get test", async function () {
    const res = await client.databaseAccounts.get(resourceGroupName, accountName);
    assert.equal(res.name, accountName);
  });

  it("databaseAccounts list test", async function () {
    const resArray = new Array();
    for await (let item of client.databaseAccounts.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("databaseAccounts delete test", async function () {
    await client.databaseAccounts.beginDeleteAndWait(resourceGroupName, accountName, testPollingOptions);
    const resArray = new Array();
    for await (let item of client.databaseAccounts.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  }).timeout(3600000);
});
