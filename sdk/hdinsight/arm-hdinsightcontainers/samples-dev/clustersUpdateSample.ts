/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ClusterPatch } from "@azure/arm-hdinsightcontainers";
import { HDInsightContainersManagementClient } from "@azure/arm-hdinsightcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing Cluster.
 *
 * @summary Updates an existing Cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/PatchCluster.json
 */
async function hdInsightClustersPatchTags(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const clusterPatchRequest: ClusterPatch = {
    properties: {
      clusterProfile: {
        authorizationProfile: { userIds: ["Testuser1", "Testuser2"] },
        autoscaleProfile: {
          autoscaleType: "ScheduleBased",
          enabled: true,
          gracefulDecommissionTimeout: -1,
          scheduleBasedConfig: {
            defaultCount: 3,
            schedules: [
              {
                count: 3,
                days: ["Monday, Tuesday, Wednesday"],
                endTime: "12:00",
                startTime: "00:00",
              },
              {
                count: 3,
                days: ["Sunday"],
                endTime: "12:00",
                startTime: "00:00",
              },
            ],
            timeZone: "Cen. Australia Standard Time",
          },
        },
        logAnalyticsProfile: {
          applicationLogs: { stdErrorEnabled: true, stdOutEnabled: true },
          enabled: true,
          metricsEnabled: true,
        },
        serviceConfigsProfiles: [
          {
            configs: [
              {
                component: "TestComp1",
                files: [
                  {
                    fileName: "TestFile1",
                    values: { testConfig1: "1", testConfig2: "2" },
                  },
                  {
                    fileName: "TestFile2",
                    values: { testConfig3: "3", testConfig4: "4" },
                  },
                ],
              },
              {
                component: "TestComp2",
                files: [
                  {
                    path: "TestPath",
                    content: "TestContent",
                    fileName: "TestFile3",
                  },
                  {
                    fileName: "TestFile4",
                    values: { testConfig7: "7", testConfig8: "8" },
                  },
                ],
              },
            ],
            serviceName: "TestService1",
          },
          {
            configs: [
              {
                component: "TestComp3",
                files: [{ fileName: "TestFile5", values: { testConfig9: "9" } }],
              },
            ],
            serviceName: "TestService2",
          },
        ],
        sshProfile: { count: 2 },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginUpdateAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    clusterPatchRequest,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing Cluster.
 *
 * @summary Updates an existing Cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/PatchRangerCluster.json
 */
async function hdInsightRangerClusterPatchTags(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const clusterPatchRequest: ClusterPatch = {
    properties: {
      clusterProfile: {
        rangerProfile: {
          rangerAdmin: {
            admins: ["testuser1@contoso.com", "testuser2@contoso.com"],
            database: {
              name: "testdb",
              host: "testsqlserver.database.windows.net",
              passwordSecretRef:
                "https://testkv.vault.azure.net/secrets/mysecret/5df6584d9c25418c8d900240aa6c3452",
              username: "admin",
            },
          },
          rangerAudit: {
            storageAccount: "https://teststorage.blob.core.windows.net/testblob",
          },
          rangerUsersync: {
            enabled: true,
            groups: [
              "0a53828f-36c9-44c3-be3d-99a7fce977ad",
              "13be6971-79db-4f33-9d41-b25589ca25ac",
            ],
            mode: "automatic",
            users: ["testuser1@contoso.com", "testuser2@contoso.com"],
          },
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginUpdateAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    clusterPatchRequest,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await hdInsightClustersPatchTags();
  await hdInsightRangerClusterPatchTags();
}

main().catch(console.error);
