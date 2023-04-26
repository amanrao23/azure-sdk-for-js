// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary test getCompletions
 */

const { OpenAIClient } = require("@azure/ai-openai");
const { AzureKeyCredential } = require("@azure/core-auth");

// Load the .env file if it exists
require("dotenv").config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const azureApiKey = process.env["AZURE_API_KEY"] || "<api key>";
const deploymentId = process.env["DEPLOYMENT_ID"] || "<deployment id>";

const doc = "Hello world!";

async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const events = await client.getCompletionsStreaming(deploymentId, doc);

  for await (const event of events) {
    console.log(event);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
