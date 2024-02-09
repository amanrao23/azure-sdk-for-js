/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConfluentManagementClient } = require("@azure/arm-confluent");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Organization Validate proxy resource
 *
 * @summary Organization Validate proxy resource
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2023-08-22/examples/Validations_ValidateOrganizations.json
 */
async function validationsValidateOrganizations() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const body = {
    location: "West US",
    offerDetail: {
      id: "string",
      planId: "string",
      planName: "string",
      privateOfferId: "string",
      privateOfferIds: ["string"],
      publisherId: "string",
      termUnit: "string",
    },
    tags: { environment: "Dev" },
    userDetail: {
      aadEmail: "abc@microsoft.com",
      emailAddress: "abc@microsoft.com",
      firstName: "string",
      lastName: "string",
      userPrincipalName: "abc@microsoft.com",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const result = await client.validations.validateOrganization(
    resourceGroupName,
    organizationName,
    body
  );
  console.log(result);
}

async function main() {
  validationsValidateOrganizations();
}

main().catch(console.error);
