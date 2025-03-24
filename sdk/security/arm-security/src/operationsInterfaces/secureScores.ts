/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SecureScoreItem,
  SecureScoresListOptionalParams,
  SecureScoresGetOptionalParams,
  SecureScoresGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecureScores. */
export interface SecureScores {
  /**
   * List secure scores for all your Microsoft Defender for Cloud initiatives within your current scope.
   * @param options The options parameters.
   */
  list(
    options?: SecureScoresListOptionalParams,
  ): PagedAsyncIterableIterator<SecureScoreItem>;
  /**
   * Get secure score for a specific Microsoft Defender for Cloud initiative within your current scope.
   * For the ASC Default initiative, use 'ascScore'.
   * @param secureScoreName The initiative name. For the ASC Default initiative, use 'ascScore' as in the
   *                        sample request below.
   * @param options The options parameters.
   */
  get(
    secureScoreName: string,
    options?: SecureScoresGetOptionalParams,
  ): Promise<SecureScoresGetResponse>;
}
