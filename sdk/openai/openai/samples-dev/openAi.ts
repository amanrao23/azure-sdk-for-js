// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to get completions for a piece of text using OpenAI API.
 *
 * @summary get completions using the OpenAI API.
 * @azsdk-weight 30
 */

import { OpenAIClient } from "@azure/ai-openai";

// Load the .env file if it exists
import * as dotenv from "dotenv";
import { OpenAIKeyCredential } from "@azure/ai-openai";
dotenv.config();

// You will need to set these environment variables or edit the following values
const openApiKey = process.env["OPENAI_API_KEY"] || "<api key>";

const prompt = "What is Azure OpenAI?";

export async function main() {
  console.log("== Get completions using OpenAI Sample ==");

  const client = new OpenAIClient(new OpenAIKeyCredential(openApiKey));
  const model = "text-davinci-003";
  const result = await client.getCompletions(model, prompt);

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
