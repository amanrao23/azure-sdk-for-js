/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { WebApplicationFirewallPolicy } from "@azure/arm-frontdoor";
import { FrontDoorManagementClient } from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update policy with specified rule set name within a resource group.
 *
 * @summary Create or update policy with specified rule set name within a resource group.
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2024-02-01/examples/WafPolicyCreateOrUpdate.json
 */
async function createsSpecificPolicy(): Promise<void> {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "rg1";
  const policyName = "Policy1";
  const parameters: WebApplicationFirewallPolicy = {
    customRules: {
      rules: [
        {
          name: "Rule1",
          action: "Block",
          matchConditions: [
            {
              matchValue: ["192.168.1.0/24", "10.0.0.0/24"],
              matchVariable: "RemoteAddr",
              operator: "IPMatch",
            },
          ],
          priority: 1,
          rateLimitThreshold: 1000,
          ruleType: "RateLimitRule",
        },
        {
          name: "Rule2",
          action: "Block",
          matchConditions: [
            {
              matchValue: ["CH"],
              matchVariable: "RemoteAddr",
              operator: "GeoMatch",
            },
            {
              matchValue: ["windows"],
              matchVariable: "RequestHeader",
              operator: "Contains",
              selector: "UserAgent",
              transforms: ["Lowercase"],
            },
          ],
          priority: 2,
          ruleType: "MatchRule",
        },
      ],
    },
    location: "WestUs",
    managedRules: {
      managedRuleSets: [
        {
          exclusions: [
            {
              matchVariable: "RequestHeaderNames",
              selector: "User-Agent",
              selectorMatchOperator: "Equals",
            },
          ],
          ruleGroupOverrides: [
            {
              exclusions: [
                {
                  matchVariable: "RequestCookieNames",
                  selector: "token",
                  selectorMatchOperator: "StartsWith",
                },
              ],
              ruleGroupName: "SQLI",
              rules: [
                {
                  action: "Redirect",
                  enabledState: "Enabled",
                  exclusions: [
                    {
                      matchVariable: "QueryStringArgNames",
                      selector: "query",
                      selectorMatchOperator: "Equals",
                    },
                  ],
                  ruleId: "942100",
                },
                { enabledState: "Disabled", ruleId: "942110" },
              ],
            },
          ],
          ruleSetAction: "Block",
          ruleSetType: "DefaultRuleSet",
          ruleSetVersion: "1.0",
        },
      ],
    },
    policySettings: {
      customBlockResponseBody:
        "PGh0bWw+CjxoZWFkZXI+PHRpdGxlPkhlbGxvPC90aXRsZT48L2hlYWRlcj4KPGJvZHk+CkhlbGxvIHdvcmxkCjwvYm9keT4KPC9odG1sPg==",
      customBlockResponseStatusCode: 429,
      enabledState: "Enabled",
      javascriptChallengeExpirationInMinutes: 30,
      mode: "Prevention",
      redirectUrl: "http://www.bing.com",
      requestBodyCheck: "Disabled",
      scrubbingRules: [
        {
          matchVariable: "RequestIPAddress",
          selector: undefined,
          selectorMatchOperator: "EqualsAny",
          state: "Enabled",
        },
      ],
      state: "Enabled",
    },
    sku: { name: "Premium_AzureFrontDoor" },
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.policies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsSpecificPolicy();
}

main().catch(console.error);
