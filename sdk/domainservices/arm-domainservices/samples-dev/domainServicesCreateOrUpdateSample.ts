/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DomainService } from "@azure/arm-domainservices";
import { DomainServicesResourceProvider } from "@azure/arm-domainservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The Create Domain Service operation creates a new domain service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.
 *
 * @summary The Create Domain Service operation creates a new domain service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.
 * x-ms-original-file: specification/domainservices/resource-manager/Microsoft.AAD/stable/2021-05-01/examples/CreateDomainService.json
 */
async function createDomainService(): Promise<void> {
  const subscriptionId = "1639790a-76a2-4ac4-98d9-8562f5dfcb4d";
  const resourceGroupName = "TestResourceGroup";
  const domainServiceName = "TestDomainService.com";
  const domainService: DomainService = {
    domainName: "TestDomainService.com",
    domainSecuritySettings: {
      ntlmV1: "Enabled",
      syncNtlmPasswords: "Enabled",
      tlsV1: "Disabled",
    },
    filteredSync: "Enabled",
    ldapsSettings: {
      externalAccess: "Enabled",
      ldaps: "Enabled",
      pfxCertificate: "MIIDPDCCAiSgAwIBAgIQQUI9P6tq2p9OFIJa7DLNvTANBgkqhkiG9w0BAQsFADAgMR4w...",
      pfxCertificatePassword: "<pfxCertificatePassword>",
    },
    notificationSettings: {
      additionalRecipients: ["jicha@microsoft.com", "caalmont@microsoft.com"],
      notifyDcAdmins: "Enabled",
      notifyGlobalAdmins: "Enabled",
    },
    replicaSets: [
      {
        location: "West US",
        subnetId:
          "/subscriptions/1639790a-76a2-4ac4-98d9-8562f5dfcb4d/resourceGroups/TestNetworkResourceGroup/providers/Microsoft.Network/virtualNetworks/TestVnetWUS/subnets/TestSubnetWUS",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new DomainServicesResourceProvider(credential, subscriptionId);
  const result = await client.domainServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    domainServiceName,
    domainService,
  );
  console.log(result);
}

createDomainService().catch(console.error);
