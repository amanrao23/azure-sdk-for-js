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
 * This sample demonstrates how to Delete a CertificateObjectLocalRulestackResource
 *
 * @summary Delete a CertificateObjectLocalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/CertificateObjectLocalRulestack_Delete_MaximumSet_Gen.json
 */
async function certificateObjectLocalRulestackDeleteMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName = process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.certificateObjectLocalRulestack.beginDeleteAndWait(
    resourceGroupName,
    localRulestackName,
    name,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a CertificateObjectLocalRulestackResource
 *
 * @summary Delete a CertificateObjectLocalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/CertificateObjectLocalRulestack_Delete_MinimumSet_Gen.json
 */
async function certificateObjectLocalRulestackDeleteMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName = process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.certificateObjectLocalRulestack.beginDeleteAndWait(
    resourceGroupName,
    localRulestackName,
    name,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await certificateObjectLocalRulestackDeleteMaximumSetGen();
  await certificateObjectLocalRulestackDeleteMinimumSetGen();
}

main().catch(console.error);
