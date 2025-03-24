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
  AssessmentsGetOptionalParams,
  SecurityCenter,
} from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a security assessment on your scanned resource
 *
 * @summary Get a security assessment on your scanned resource
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-06-01/examples/Assessments/GetAssessment_example.json
 */
async function getSecurityRecommendationTaskFromSecurityDataLocation(): Promise<void> {
  const resourceId =
    "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg/providers/Microsoft.Compute/virtualMachineScaleSets/vmss2";
  const assessmentName = "21300918-b2e3-0346-785f-c77ff57d243b";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.assessments.get(resourceId, assessmentName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a security assessment on your scanned resource
 *
 * @summary Get a security assessment on your scanned resource
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-06-01/examples/Assessments/GetAssessmentWithExpand_example.json
 */
async function getSecurityRecommendationTaskFromSecurityDataLocationWithExpandParameter(): Promise<void> {
  const resourceId =
    "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg/providers/Microsoft.Compute/virtualMachineScaleSets/vmss2";
  const assessmentName = "21300918-b2e3-0346-785f-c77ff57d243b";
  const expand = "links";
  const options: AssessmentsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.assessments.get(
    resourceId,
    assessmentName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getSecurityRecommendationTaskFromSecurityDataLocation();
  getSecurityRecommendationTaskFromSecurityDataLocationWithExpandParameter();
}

main().catch(console.error);
