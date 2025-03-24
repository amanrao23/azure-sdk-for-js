/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { GlobalRulestackListAppIdsOptionalParams } from "@azure/arm-paloaltonetworksngfw";
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List of AppIds for GlobalRulestack ApiVersion
 *
 * @summary List of AppIds for GlobalRulestack ApiVersion
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_listAppIds_MaximumSet_Gen.json
 */
async function globalRulestackListAppIdsMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const appIdVersion = "8543";
  const appPrefix = "pref";
  const skip = "a6a321";
  const top = 20;
  const options: GlobalRulestackListAppIdsOptionalParams = {
    appIdVersion,
    appPrefix,
    skip,
    top,
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.listAppIds(globalRulestackName, options);
  console.log(result);
}

/**
 * This sample demonstrates how to List of AppIds for GlobalRulestack ApiVersion
 *
 * @summary List of AppIds for GlobalRulestack ApiVersion
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_listAppIds_MinimumSet_Gen.json
 */
async function globalRulestackListAppIdsMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.listAppIds(globalRulestackName);
  console.log(result);
}

async function main(): Promise<void> {
  await globalRulestackListAppIdsMaximumSetGen();
  await globalRulestackListAppIdsMinimumSetGen();
}

main().catch(console.error);
