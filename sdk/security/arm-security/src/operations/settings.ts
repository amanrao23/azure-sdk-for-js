/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Settings } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SecurityCenter } from "../securityCenter.js";
import {
  SettingUnion,
  SettingsListNextOptionalParams,
  SettingsListOptionalParams,
  SettingsListResponse,
  SettingNameAutoGenerated,
  SettingsGetOptionalParams,
  SettingsGetResponse,
  SettingsUpdateOptionalParams,
  SettingsUpdateResponse,
  SettingsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Settings operations. */
export class SettingsImpl implements Settings {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class Settings class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Settings about different configurations in Microsoft Defender for Cloud
   * @param options The options parameters.
   */
  public list(
    options?: SettingsListOptionalParams,
  ): PagedAsyncIterableIterator<SettingUnion> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: SettingsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SettingUnion[]> {
    let result: SettingsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: SettingsListOptionalParams,
  ): AsyncIterableIterator<SettingUnion> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Settings about different configurations in Microsoft Defender for Cloud
   * @param options The options parameters.
   */
  private _list(
    options?: SettingsListOptionalParams,
  ): Promise<SettingsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Settings of different configurations in Microsoft Defender for Cloud
   * @param settingName The name of the setting
   * @param options The options parameters.
   */
  get(
    settingName: SettingNameAutoGenerated,
    options?: SettingsGetOptionalParams,
  ): Promise<SettingsGetResponse> {
    return this.client.sendOperationRequest(
      { settingName, options },
      getOperationSpec,
    );
  }

  /**
   * updating settings about different configurations in Microsoft Defender for Cloud
   * @param settingName The name of the setting
   * @param setting Setting object
   * @param options The options parameters.
   */
  update(
    settingName: SettingNameAutoGenerated,
    setting: SettingUnion,
    options?: SettingsUpdateOptionalParams,
  ): Promise<SettingsUpdateResponse> {
    return this.client.sendOperationRequest(
      { settingName, setting, options },
      updateOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SettingsListNextOptionalParams,
  ): Promise<SettingsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/settings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SettingsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion23],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Setting,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion23],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.settingName3,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Setting,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.setting1,
  queryParameters: [Parameters.apiVersion23],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.settingName3,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SettingsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
