/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes an IPv6 firewall rule.
 *
 * @summary Deletes an IPv6 firewall rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-11-01-preview/examples/IPv6FirewallRuleDelete.json
 */
async function deleteAnIPv6FirewallRule(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "firewallrulecrudtest-9886";
  const serverName = "firewallrulecrudtest-2368";
  const firewallRuleName = "firewallrulecrudtest-7011";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.iPv6FirewallRules.delete(
    resourceGroupName,
    serverName,
    firewallRuleName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteAnIPv6FirewallRule();
}

main().catch(console.error);
