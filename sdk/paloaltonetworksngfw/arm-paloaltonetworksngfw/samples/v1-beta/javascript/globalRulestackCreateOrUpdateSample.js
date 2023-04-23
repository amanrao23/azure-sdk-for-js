/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a GlobalRulestackResource
 *
 * @summary Create a GlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/GlobalRulestack_CreateOrUpdate_MaximumSet_Gen.json
 */
async function globalRulestackCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const resource = {
    description: "global rulestacks",
    associatedSubscriptions: ["2bf4a339-294d-4c25-b0b2-ef649e9f5c27"],
    defaultMode: "IPS",
    identity: {
      type: "None",
      userAssignedIdentities: {
        key16: { clientId: "aaaa", principalId: "aaaaaaaaaaaaaaa" },
      },
    },
    location: "eastus",
    minAppIdVersion: "8.5.3",
    panEtag: "2bf4a339-294d-4c25-b0b2-ef649e9f5c12",
    panLocation: "eastus",
    provisioningState: "Accepted",
    scope: "GLOBAL",
    securityServices: {
      antiSpywareProfile: "default",
      antiVirusProfile: "default",
      dnsSubscription: "default",
      fileBlockingProfile: "default",
      outboundTrustCertificate: "default",
      outboundUnTrustCertificate: "default",
      urlFilteringProfile: "default",
      vulnerabilityProfile: "default",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.globalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a GlobalRulestackResource
 *
 * @summary Create a GlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/GlobalRulestack_CreateOrUpdate_MinimumSet_Gen.json
 */
async function globalRulestackCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const resource = { location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.globalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    resource
  );
  console.log(result);
}

async function main() {
  globalRulestackCreateOrUpdateMaximumSetGen();
  globalRulestackCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
