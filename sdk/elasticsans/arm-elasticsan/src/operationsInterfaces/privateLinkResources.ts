/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateLinkResourcesListByElasticSanOptionalParams,
  PrivateLinkResourcesListByElasticSanResponse,
} from "../models/index.js";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources that need to be created for a elastic San.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  listByElasticSan(
    resourceGroupName: string,
    elasticSanName: string,
    options?: PrivateLinkResourcesListByElasticSanOptionalParams,
  ): Promise<PrivateLinkResourcesListByElasticSanResponse>;
}
