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
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { DnsResolverManagementClient } from "../src/dnsResolverManagementClient.js";
import { DnsResolver } from "../src/models/index.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("dnsresolve test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: DnsResolverManagementClient;
  let resourceGroup: string;
  let parameters: DnsResolver;
  let dnsResolverName: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new DnsResolverManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    resourceGroup = "myjstest";
    dnsResolverName = "sampleDnsResolver";
    parameters = {
      location: "EastUS",
      tags: { key1: "value1" },
      virtualNetwork: {
        id:
          "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup + "/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork"
      }
    };
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("dnsResolvers create clusters", async function () {
    let res = await client.dnsResolvers.beginCreateOrUpdateAndWait(
      resourceGroup,
      dnsResolverName,
      parameters,
      testPollingOptions
    );
    assert.equal(res.name, dnsResolverName);
  });

  it("dnsResolvers get clusters", async function () {
    let res = await client.dnsResolvers.get(
      resourceGroup,
      dnsResolverName,
    );
    assert.equal(res.name, dnsResolverName);
  });

  it("dnsResolvers list clusters", async function () {
    const resArray = new Array();
    for await (const item of client.dnsResolvers.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("dnsResolvers delete clusters", async function () {
    const resArray = new Array();
    await client.dnsResolvers.beginDeleteAndWait(resourceGroup, dnsResolverName, testPollingOptions);
    for await (const item of client.dnsResolvers.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
