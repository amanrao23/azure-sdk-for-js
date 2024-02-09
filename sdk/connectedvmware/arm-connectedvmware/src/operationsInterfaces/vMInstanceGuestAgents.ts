/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  GuestAgent,
  VMInstanceGuestAgentsListOptionalParams,
  VMInstanceGuestAgentsCreateOptionalParams,
  VMInstanceGuestAgentsCreateResponse,
  VMInstanceGuestAgentsGetOptionalParams,
  VMInstanceGuestAgentsGetResponse,
  VMInstanceGuestAgentsDeleteOptionalParams,
  VMInstanceGuestAgentsDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VMInstanceGuestAgents. */
export interface VMInstanceGuestAgents {
  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: VMInstanceGuestAgentsListOptionalParams
  ): PagedAsyncIterableIterator<GuestAgent>;
  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginCreate(
    resourceUri: string,
    options?: VMInstanceGuestAgentsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VMInstanceGuestAgentsCreateResponse>,
      VMInstanceGuestAgentsCreateResponse
    >
  >;
  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceUri: string,
    options?: VMInstanceGuestAgentsCreateOptionalParams
  ): Promise<VMInstanceGuestAgentsCreateResponse>;
  /**
   * Implements GuestAgent GET method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    options?: VMInstanceGuestAgentsGetOptionalParams
  ): Promise<VMInstanceGuestAgentsGetResponse>;
  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginDelete(
    resourceUri: string,
    options?: VMInstanceGuestAgentsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VMInstanceGuestAgentsDeleteResponse>,
      VMInstanceGuestAgentsDeleteResponse
    >
  >;
  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceUri: string,
    options?: VMInstanceGuestAgentsDeleteOptionalParams
  ): Promise<VMInstanceGuestAgentsDeleteResponse>;
}
