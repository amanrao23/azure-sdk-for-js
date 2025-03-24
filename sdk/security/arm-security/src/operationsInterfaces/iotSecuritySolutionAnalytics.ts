/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  IotSecuritySolutionAnalyticsListOptionalParams,
  IotSecuritySolutionAnalyticsListResponse,
  IotSecuritySolutionAnalyticsGetOptionalParams,
  IotSecuritySolutionAnalyticsGetResponse,
} from "../models/index.js";

/** Interface representing a IotSecuritySolutionAnalytics. */
export interface IotSecuritySolutionAnalytics {
  /**
   * Use this method to get IoT security Analytics metrics in an array.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionAnalyticsListOptionalParams,
  ): Promise<IotSecuritySolutionAnalyticsListResponse>;
  /**
   * Use this method to get IoT Security Analytics metrics.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionAnalyticsGetOptionalParams,
  ): Promise<IotSecuritySolutionAnalyticsGetResponse>;
}
