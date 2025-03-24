/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List CertificateObjectGlobalRulestackResource resources by Tenant
 *
 * @summary List CertificateObjectGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/CertificateObjectGlobalRulestack_List_MaximumSet_Gen.json
 */
async function certificateObjectGlobalRulestackListMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const resArray = new Array();
  for await (const item of client.certificateObjectGlobalRulestack.list(globalRulestackName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List CertificateObjectGlobalRulestackResource resources by Tenant
 *
 * @summary List CertificateObjectGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/CertificateObjectGlobalRulestack_List_MinimumSet_Gen.json
 */
async function certificateObjectGlobalRulestackListMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const resArray = new Array();
  for await (const item of client.certificateObjectGlobalRulestack.list(globalRulestackName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await certificateObjectGlobalRulestackListMaximumSetGen();
  await certificateObjectGlobalRulestackListMinimumSetGen();
}

main().catch(console.error);
