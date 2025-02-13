// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ACEProvisioningManagementPartnerAPI } from "../src/index.js";
import { DefaultAzureCredential, InteractiveBrowserCredential } from "@azure/identity";
import { setLogLevel } from "@azure/logger";
import { describe, it } from "vitest";

describe("snippets", () => {
  it("ReadmeSampleCreateClient_Node", async () => {
    const client = new ACEProvisioningManagementPartnerAPI(new DefaultAzureCredential());
  });

  it("ReadmeSampleCreateClient_Browser", async () => {
    const credential = new InteractiveBrowserCredential({
      tenantId: "<YOUR_TENANT_ID>",
      clientId: "<YOUR_CLIENT_ID>",
    });
    const client = new ACEProvisioningManagementPartnerAPI(credential);
  });

  it("SetLogLevel", async () => {
    setLogLevel("info");
  });
});
