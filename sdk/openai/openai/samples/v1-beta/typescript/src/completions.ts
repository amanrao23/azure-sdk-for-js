// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to get completions for a piece of text.
 *
 * @summary get completions.
 */

import { OpenAIClient } from "@azure/ai-openai";
import { AzureKeyCredential } from "@azure/core-auth";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const azureApiKey = process.env["AZURE_API_KEY"] || "<api key>";

const prompt = "What is Azure OpenAI?";

export async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "text-davinci-003";
  const result = await client.getCompletions(deploymentId, prompt);

  if (!result?.choices) {
    throw new Error("Expected choices in the response");
  }
  for (const choice of result?.choices) {
    console.log(choice.text);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
