/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PeeringServiceCountry,
  PeeringServiceCountriesListOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PeeringServiceCountries. */
export interface PeeringServiceCountries {
  /**
   * Lists all of the available countries for peering service.
   * @param options The options parameters.
   */
  list(
    options?: PeeringServiceCountriesListOptionalParams
  ): PagedAsyncIterableIterator<PeeringServiceCountry>;
}
