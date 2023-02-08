/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RoleAssignmentCreateParameters,
  AuthorizationManagementClient
} from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a role assignment by scope and name.
 *
 * @summary Create or update a role assignment by scope and name.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/RoleAssignments_CreateForResource.json
 */
async function createRoleAssignmentForResource() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/resourceGroups/testrg/providers/Microsoft.DocumentDb/databaseAccounts/test-db-account";
  const roleAssignmentName = "05c5a614-a7d6-4502-b150-c2fb455033ff";
  const parameters: RoleAssignmentCreateParameters = {
    principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
    principalType: "User",
    roleDefinitionId:
      "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d"
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleAssignments.create(
    scope,
    roleAssignmentName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a role assignment by scope and name.
 *
 * @summary Create or update a role assignment by scope and name.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/RoleAssignments_CreateForResourceGroup.json
 */
async function createRoleAssignmentForResourceGroup() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/resourceGroups/testrg";
  const roleAssignmentName = "05c5a614-a7d6-4502-b150-c2fb455033ff";
  const parameters: RoleAssignmentCreateParameters = {
    principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
    principalType: "User",
    roleDefinitionId:
      "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d"
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleAssignments.create(
    scope,
    roleAssignmentName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a role assignment by scope and name.
 *
 * @summary Create or update a role assignment by scope and name.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/RoleAssignments_CreateForSubscription.json
 */
async function createRoleAssignmentForSubscription() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2";
  const roleAssignmentName = "05c5a614-a7d6-4502-b150-c2fb455033ff";
  const parameters: RoleAssignmentCreateParameters = {
    principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
    principalType: "User",
    roleDefinitionId:
      "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d"
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleAssignments.create(
    scope,
    roleAssignmentName,
    parameters
  );
  console.log(result);
}

async function main() {
  createRoleAssignmentForResource();
  createRoleAssignmentForResourceGroup();
  createRoleAssignmentForSubscription();
}

main().catch(console.error);