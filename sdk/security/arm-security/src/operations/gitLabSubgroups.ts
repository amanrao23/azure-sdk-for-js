/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GitLabSubgroups } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SecurityCenter } from "../securityCenter.js";
import {
  GitLabSubgroupsListOptionalParams,
  GitLabSubgroupsListResponse,
} from "../models/index.js";

/** Class containing GitLabSubgroups operations. */
export class GitLabSubgroupsImpl implements GitLabSubgroups {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class GitLabSubgroups class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets nested subgroups of given GitLab Group which are onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabSubgroupsListOptionalParams,
  ): Promise<GitLabSubgroupsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, groupFQName, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/gitLabGroups/{groupFQName}/listSubgroups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GitLabGroupListResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.groupFQName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
