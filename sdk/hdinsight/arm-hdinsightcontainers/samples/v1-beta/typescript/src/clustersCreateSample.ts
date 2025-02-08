/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Cluster,
  HDInsightContainersManagementClient,
} from "@azure/arm-hdinsightcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a cluster.
 *
 * @summary Creates a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/CreateAutoscaleCluster.json
 */
async function hdInsightClusterPut(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const hDInsightCluster: Cluster = {
    location: "West US 2",
    properties: {
      clusterProfile: {
        authorizationProfile: { userIds: ["testuser1", "testuser2"] },
        autoscaleProfile: {
          autoscaleType: "ScheduleBased",
          enabled: true,
          gracefulDecommissionTimeout: 3600,
          loadBasedConfig: {
            cooldownPeriod: 300,
            maxNodes: 20,
            minNodes: 10,
            pollInterval: 60,
            scalingRules: [
              {
                actionType: "scaleup",
                comparisonRule: { operator: "greaterThan", threshold: 90 },
                evaluationCount: 3,
                scalingMetric: "cpu",
              },
              {
                actionType: "scaledown",
                comparisonRule: { operator: "lessThan", threshold: 20 },
                evaluationCount: 3,
                scalingMetric: "cpu",
              },
            ],
          },
          scheduleBasedConfig: {
            defaultCount: 10,
            schedules: [
              {
                count: 20,
                days: ["Monday"],
                endTime: "12:00",
                startTime: "00:00",
              },
              {
                count: 25,
                days: ["Sunday"],
                endTime: "12:00",
                startTime: "00:00",
              },
            ],
            timeZone: "Cen. Australia Standard Time",
          },
        },
        clusterVersion: "1.0.6",
        managedIdentityProfile: {
          identityList: [
            {
              type: "cluster",
              clientId: "de91f1d8-767f-460a-ac11-3cf103f74b34",
              objectId: "40491351-c240-4042-91e0-f644a1d2b441",
              resourceId:
                "/subscriptions/subid/resourceGroups/hiloResourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-msi",
            },
          ],
        },
        ossVersion: "0.410.0",
        sshProfile: { count: 2, vmSize: "Standard_E8as_v5" },
        trinoProfile: {},
      },
      clusterType: "Trino",
      computeProfile: {
        availabilityZones: ["1", "2", "3"],
        nodes: [
          { type: "Head", count: 2, vmSize: "Standard_E8as_v5" },
          { type: "Worker", count: 3, vmSize: "Standard_E8as_v5" },
        ],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginCreateAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    hDInsightCluster,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a cluster.
 *
 * @summary Creates a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/CreateRangerCluster.json
 */
async function hdInsightRangerClusterPut(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const hDInsightCluster: Cluster = {
    location: "West US 2",
    properties: {
      clusterProfile: {
        authorizationProfile: { userIds: ["testuser1", "testuser2"] },
        clusterVersion: "0.0.1",
        managedIdentityProfile: {
          identityList: [
            {
              type: "cluster",
              clientId: "de91f1d8-767f-460a-ac11-3cf103f74b34",
              objectId: "40491351-c240-4042-91e0-f644a1d2b441",
              resourceId:
                "/subscriptions/subid/resourceGroups/hiloResourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-msi",
            },
          ],
        },
        ossVersion: "2.2.3",
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
            storageAccount:
              "https://teststorage.blob.core.windows.net/testblob",
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
      clusterType: "ranger",
      computeProfile: {
        availabilityZones: ["1", "2", "3"],
        nodes: [{ type: "head", count: 2, vmSize: "Standard_D3_v2" }],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginCreateAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    hDInsightCluster,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a cluster.
 *
 * @summary Creates a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/CreateSparkCluster.json
 */
async function hdInsightSparkClusterPut(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const hDInsightCluster: Cluster = {
    location: "West US 2",
    properties: {
      clusterProfile: {
        authorizationProfile: { userIds: ["testuser1", "testuser2"] },
        clusterVersion: "0.0.1",
        managedIdentityProfile: {
          identityList: [
            {
              type: "cluster",
              clientId: "de91f1d8-767f-460a-ac11-3cf103f74b34",
              objectId: "40491351-c240-4042-91e0-f644a1d2b441",
              resourceId:
                "/subscriptions/subid/resourceGroups/hiloResourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-msi",
            },
          ],
        },
        ossVersion: "2.2.3",
        serviceConfigsProfiles: [
          {
            configs: [
              {
                component: "spark-config",
                files: [
                  {
                    fileName: "spark-defaults.conf",
                    values: { sparkEventLogEnabled: "true" },
                  },
                ],
              },
            ],
            serviceName: "spark-service",
          },
          {
            configs: [
              {
                component: "yarn-config",
                files: [
                  {
                    fileName: "core-site.xml",
                    values: {
                      fsDefaultFS:
                        "wasb://testcontainer@teststorage.dfs.core.windows.net/",
                      storageContainer: "testcontainer",
                      storageKey: "test key",
                      storageName: "teststorage",
                      storageProtocol: "wasb",
                    },
                  },
                  {
                    fileName: "yarn-site.xml",
                    values: { yarnWebappUi2Enable: "false" },
                  },
                ],
              },
            ],
            serviceName: "yarn-service",
          },
        ],
        sparkProfile: {},
        sshProfile: { count: 2, vmSize: "Standard_D3_v2" },
      },
      clusterType: "spark",
      computeProfile: {
        availabilityZones: ["1", "2", "3"],
        nodes: [{ type: "worker", count: 4, vmSize: "Standard_D3_v2" }],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginCreateAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    hDInsightCluster,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a cluster.
 *
 * @summary Creates a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/CreateSparkClusterWithInternalIngress.json
 */
async function hdInsightSparkClusterPutWithInternalIngress(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const hDInsightCluster: Cluster = {
    location: "West US 2",
    properties: {
      clusterProfile: {
        authorizationProfile: { userIds: ["testuser1", "testuser2"] },
        clusterAccessProfile: { enableInternalIngress: true },
        clusterVersion: "0.0.1",
        managedIdentityProfile: {
          identityList: [
            {
              type: "cluster",
              clientId: "de91f1d8-767f-460a-ac11-3cf103f74b34",
              objectId: "40491351-c240-4042-91e0-f644a1d2b441",
              resourceId:
                "/subscriptions/subid/resourceGroups/hiloResourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-msi",
            },
          ],
        },
        ossVersion: "2.2.3",
        serviceConfigsProfiles: [
          {
            configs: [
              {
                component: "spark-config",
                files: [
                  {
                    fileName: "spark-defaults.conf",
                    values: { sparkEventLogEnabled: "true" },
                  },
                ],
              },
            ],
            serviceName: "spark-service",
          },
          {
            configs: [
              {
                component: "yarn-config",
                files: [
                  {
                    fileName: "core-site.xml",
                    values: {
                      fsDefaultFS:
                        "wasb://testcontainer@teststorage.dfs.core.windows.net/",
                      storageContainer: "testcontainer",
                      storageKey: "test key",
                      storageName: "teststorage",
                      storageProtocol: "wasb",
                    },
                  },
                  {
                    fileName: "yarn-site.xml",
                    values: { yarnWebappUi2Enable: "false" },
                  },
                ],
              },
            ],
            serviceName: "yarn-service",
          },
        ],
        sparkProfile: {},
        sshProfile: { count: 2, vmSize: "Standard_D3_v2" },
      },
      clusterType: "spark",
      computeProfile: {
        availabilityZones: ["1", "2", "3"],
        nodes: [{ type: "worker", count: 4, vmSize: "Standard_D3_v2" }],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginCreateAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    hDInsightCluster,
  );
  console.log(result);
}

async function main(): Promise<void> {
  hdInsightClusterPut();
  hdInsightRangerClusterPut();
  hdInsightSparkClusterPut();
  hdInsightSparkClusterPutWithInternalIngress();
}

main().catch(console.error);
