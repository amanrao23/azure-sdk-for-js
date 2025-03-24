/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ProviderResourceTypesListOptionalParams,
  ProviderResourceTypesListResponse,
} from "../models/index.js";

/** Interface representing a ProviderResourceTypes. */
export interface ProviderResourceTypes {
  /**
   * List the resource types for a specified resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  list(
    resourceProviderNamespace: string,
    options?: ProviderResourceTypesListOptionalParams,
  ): Promise<ProviderResourceTypesListResponse>;
}
