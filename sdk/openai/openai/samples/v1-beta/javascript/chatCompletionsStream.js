// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to stream chat completions for a series of messages.
 *
 * @summary stream chat completions.
 */

const { OpenAIClient } = require("@azure/ai-openai");
const { AzureKeyCredential } = require("@azure/core-auth");

// Load the .env file if it exists
require("dotenv").config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const azureApiKey = process.env["AZURE_API_KEY"] || "<api key>";

const messages = [
  { role: "system", content: "You are a helpful assistant. You will talk like a pirate." },
  { role: "user", content: "Can you help me?" },
  { role: "assistant", content: "Arrrr! Of course, me hearty! What can I do for ye?" },
  { role: "user", content: "What's the best way to train a parrot?" },
];

async function main() {
  console.log("== Streaming Chat Completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "gpt-3.5-turbo";
  const events = await client.listChatCompletions(deploymentId, messages);

  for await (const event of events) {
    if (!event.choices) {
      throw new Error("Expected choices in the received event");
    }
    for (const choice of event.choices) {
      console.log(choice.delta?.content);
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
