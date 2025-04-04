// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { env } from "@azure-tools/test-recorder";

export function formatName(name: string): string {
  return name.replace(/[^0-9a-zA-Z-]/g, "");
}

// Receives:
//   https://uri.blob.core.windows.net/backup/<id>
// Splits into:
//   ["https:", "", "uri.blob.core.windows.net", "backup", "<id>"]
// Returns:
//   "<id>"
export function getFolderName(uri: string): string {
  return uri.split("/")[4];
}

/**
 * Safely get an environment variable by name, throwing an error if it doesn't exist.
 * @param envVarName - The name of the environment variable to return
 */
export function getEnvironmentVariable(envVarName: string): string {
  const envVar = env[envVarName];
  if (!envVar) {
    throw new Error(`Missing required environment variable ${envVarName}`);
  }
  return envVar;
}
