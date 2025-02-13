/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateEndpointConnectionListByProjectOptionalParams,
  PrivateEndpointConnectionListByProjectResponse,
  PrivateEndpointConnectionGetOptionalParams,
  PrivateEndpointConnectionGetResponse,
  PrivateEndpointConnectionUpdateOptionalParams,
  PrivateEndpointConnectionUpdateResponse,
  PrivateEndpointConnectionDeleteOptionalParams,
  PrivateEndpointConnectionDeleteResponse
} from "../models/index.js";

/** Interface representing a PrivateEndpointConnectionOperations. */
export interface PrivateEndpointConnectionOperations {
  /**
   * Get all private endpoint connections in the project. Returns a json array of objects of type
   * 'privateEndpointConnections' as specified in the Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: PrivateEndpointConnectionListByProjectOptionalParams
  ): Promise<PrivateEndpointConnectionListByProjectResponse>;
  /**
   * Get information related to a specific private endpoint connection in the project. Returns a json
   * object of type 'privateEndpointConnections' as specified in the models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param privateEndpointConnectionName Unique name of a private endpoint connection within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionGetOptionalParams
  ): Promise<PrivateEndpointConnectionGetResponse>;
  /**
   * Update a specific private endpoint connection in the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param privateEndpointConnectionName Unique name of a private endpoint connection within a project.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    projectName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionUpdateResponse>;
  /**
   * Delete the private endpoint connection from the project. T.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param privateEndpointConnectionName Unique name of a private endpoint connection within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionDeleteOptionalParams
  ): Promise<PrivateEndpointConnectionDeleteResponse>;
}
