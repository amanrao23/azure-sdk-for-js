/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { FeatureClient } from "@azure/arm-features";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns subscription feature registrations for given subscription and provider namespace.
 *
 * @summary Returns subscription feature registrations for given subscription and provider namespace.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Features/stable/2021-07-01/examples/FeatureRegistration/SubscriptionFeatureRegistrationLIST.json
 */
async function getsAListOfFeatureRegistrations(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const providerNamespace = "subscriptionFeatureRegistrationGroupTestRG";
  const credential = new DefaultAzureCredential();
  const client = new FeatureClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.subscriptionFeatureRegistrations.listBySubscription(
    providerNamespace,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getsAListOfFeatureRegistrations().catch(console.error);
