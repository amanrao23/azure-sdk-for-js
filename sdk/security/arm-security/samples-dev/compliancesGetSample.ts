/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Details of a specific Compliance.
 *
 * @summary Details of a specific Compliance.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/Compliances/GetCompliance_example.json
 */
async function getSecurityComplianceDataForADay(): Promise<void> {
  const scope = "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const complianceName = "2018-01-01Z";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.compliances.get(scope, complianceName);
  console.log(result);
}

async function main(): Promise<void> {
  await getSecurityComplianceDataForADay();
}

main().catch(console.error);
