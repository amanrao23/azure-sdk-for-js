/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { NetworkFabric } from "@azure/arm-managednetworkfabric";
import { AzureNetworkFabricManagementServiceAPI } from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create Network Fabric resource.
 *
 * @summary Create Network Fabric resource.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkFabrics_Create_MaximumSet_Gen.json
 */
async function networkFabricsCreateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName = process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkFabricName = "example-fabric";
  const body: NetworkFabric = {
    annotation: "annotation",
    fabricASN: 29249,
    ipv4Prefix: "10.18.0.0/19",
    ipv6Prefix: "3FFE:FFFF:0:CD40::/59",
    location: "eastuseuap",
    managementNetworkConfiguration: {
      infrastructureVpnConfiguration: {
        networkToNetworkInterconnectId:
          "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni",
        optionAProperties: {
          bfdConfiguration: { intervalInMilliSeconds: 300, multiplier: 10 },
          mtu: 1501,
          peerASN: 1235,
          primaryIpv4Prefix: "10.0.0.12/30",
          primaryIpv6Prefix: "4FFE:FFFF:0:CD30::a8/127",
          secondaryIpv4Prefix: "20.0.0.13/30",
          secondaryIpv6Prefix: "6FFE:FFFF:0:CD30::ac/127",
          vlanId: 3001,
        },
        optionBProperties: {
          exportRouteTargets: ["65046:10050"],
          importRouteTargets: ["65046:10050"],
          routeTargets: {
            exportIpv4RouteTargets: ["65046:10039"],
            exportIpv6RouteTargets: ["65046:10039"],
            importIpv4RouteTargets: ["65046:10039"],
            importIpv6RouteTargets: ["65046:10039"],
          },
        },
        peeringOption: "OptionA",
      },
      workloadVpnConfiguration: {
        networkToNetworkInterconnectId:
          "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni",
        optionAProperties: {
          bfdConfiguration: { intervalInMilliSeconds: 300, multiplier: 5 },
          mtu: 1500,
          peerASN: 61234,
          primaryIpv4Prefix: "10.0.0.14/30",
          primaryIpv6Prefix: "2FFE:FFFF:0:CD30::a7/126",
          secondaryIpv4Prefix: "10.0.0.15/30",
          secondaryIpv6Prefix: "2FFE:FFFF:0:CD30::ac/126",
          vlanId: 3000,
        },
        optionBProperties: {
          exportRouteTargets: ["65046:10050"],
          importRouteTargets: ["65046:10050"],
          routeTargets: {
            exportIpv4RouteTargets: ["65046:10039"],
            exportIpv6RouteTargets: ["65046:10039"],
            importIpv4RouteTargets: ["65046:10039"],
            importIpv6RouteTargets: ["65046:10039"],
          },
        },
        peeringOption: "OptionA",
      },
    },
    networkFabricControllerId:
      "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/example-fabricController",
    networkFabricSku: "M4-A400-A100-C16-aa",
    rackCount: 4,
    serverCountPerRack: 8,
    tags: { keyID: "keyValue" },
    terminalServerConfiguration: {
      password: "xxxx",
      primaryIpv4Prefix: "10.0.0.12/30",
      primaryIpv6Prefix: "4FFE:FFFF:0:CD30::a8/127",
      secondaryIpv4Prefix: "20.0.0.13/30",
      secondaryIpv6Prefix: "6FFE:FFFF:0:CD30::ac/127",
      serialNumber: "123456",
      username: "username",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.networkFabrics.beginCreateAndWait(
    resourceGroupName,
    networkFabricName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await networkFabricsCreateMaximumSetGen();
}

main().catch(console.error);
