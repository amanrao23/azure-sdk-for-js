/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GallerySharingProfile } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ComputeManagementClient } from "../computeManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  SharingUpdate,
  GallerySharingProfileUpdateOptionalParams,
  GallerySharingProfileUpdateResponse,
} from "../models/index.js";

/** Class containing GallerySharingProfile operations. */
export class GallerySharingProfileImpl implements GallerySharingProfile {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class GallerySharingProfile class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Update sharing profile of a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param sharingUpdate Parameters supplied to the update gallery sharing profile.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: SharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GallerySharingProfileUpdateResponse>,
      GallerySharingProfileUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GallerySharingProfileUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, galleryName, sharingUpdate, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      GallerySharingProfileUpdateResponse,
      OperationState<GallerySharingProfileUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update sharing profile of a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param sharingUpdate Parameters supplied to the update gallery sharing profile.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: SharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams,
  ): Promise<GallerySharingProfileUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      sharingUpdate,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/share",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharingUpdate,
    },
    201: {
      bodyMapper: Mappers.SharingUpdate,
    },
    202: {
      bodyMapper: Mappers.SharingUpdate,
    },
    204: {
      bodyMapper: Mappers.SharingUpdate,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.sharingUpdate,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
