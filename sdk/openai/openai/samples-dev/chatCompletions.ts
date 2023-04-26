// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 *
 *
 * @summary test getCompletions
 * @azsdk-weight 100
 */

import { OpenAIClient } from "@azure/ai-openai";
import { AzureKeyCredential } from "@azure/core-auth";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const azureApiKey = process.env["AZURE_API_KEY"] || "<api key>";
const deploymentId = process.env["DEPLOYMENT_ID"] || "<deployment id>";

const chat = [{ role: "user", content: "Hello, how are you?" }];

export async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));

  const result = await client.getChatCompletions(deploymentId, chat);
  
  console.log(result.choices?.[0].message);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
