/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Databases } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClient } from "../kustoManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DatabaseUnion,
  DatabasesListByClusterNextOptionalParams,
  DatabasesListByClusterOptionalParams,
  DatabasesListByClusterResponse,
  DatabasePrincipal,
  DatabasesListPrincipalsOptionalParams,
  DatabasesListPrincipalsResponse,
  CheckNameRequest,
  DatabasesCheckNameAvailabilityOptionalParams,
  DatabasesCheckNameAvailabilityResponse,
  DatabasesGetOptionalParams,
  DatabasesGetResponse,
  DatabasesCreateOrUpdateOptionalParams,
  DatabasesCreateOrUpdateResponse,
  DatabasesUpdateOptionalParams,
  DatabasesUpdateResponse,
  DatabasesDeleteOptionalParams,
  DatabasePrincipalListRequest,
  DatabasesAddPrincipalsOptionalParams,
  DatabasesAddPrincipalsResponse,
  DatabasesRemovePrincipalsOptionalParams,
  DatabasesRemovePrincipalsResponse,
  DatabasesListByClusterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Databases operations. */
export class DatabasesImpl implements Databases {
  private readonly client: KustoManagementClient;

  /**
   * Initialize a new instance of the class Databases class.
   * @param client Reference to the service client
   */
  constructor(client: KustoManagementClient) {
    this.client = client;
  }

  /**
   * Returns the list of databases of the given Kusto cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param options The options parameters.
   */
  public listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: DatabasesListByClusterOptionalParams
  ): PagedAsyncIterableIterator<DatabaseUnion> {
    const iter = this.listByClusterPagingAll(
      resourceGroupName,
      clusterName,
      options
    );
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
        return this.listByClusterPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByClusterPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: DatabasesListByClusterOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DatabaseUnion[]> {
    let result: DatabasesListByClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCluster(
        resourceGroupName,
        clusterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByClusterNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByClusterPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: DatabasesListByClusterOptionalParams
  ): AsyncIterableIterator<DatabaseUnion> {
    for await (const page of this.listByClusterPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of database principals of the given Kusto cluster and database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  public listPrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesListPrincipalsOptionalParams
  ): PagedAsyncIterableIterator<DatabasePrincipal> {
    const iter = this.listPrincipalsPagingAll(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    );
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
        return this.listPrincipalsPagingPage(
          resourceGroupName,
          clusterName,
          databaseName,
          options,
          settings
        );
      }
    };
  }

  private async *listPrincipalsPagingPage(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesListPrincipalsOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<DatabasePrincipal[]> {
    let result: DatabasesListPrincipalsResponse;
    result = await this._listPrincipals(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    );
    yield result.value || [];
  }

  private async *listPrincipalsPagingAll(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesListPrincipalsOptionalParams
  ): AsyncIterableIterator<DatabasePrincipal> {
    for await (const page of this.listPrincipalsPagingPage(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks that the databases resource name is valid and is not already in use.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    resourceName: CheckNameRequest,
    options?: DatabasesCheckNameAvailabilityOptionalParams
  ): Promise<DatabasesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, resourceName, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Returns the list of databases of the given Kusto cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param options The options parameters.
   */
  private _listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: DatabasesListByClusterOptionalParams
  ): Promise<DatabasesListByClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByClusterOperationSpec
    );
  }

  /**
   * Returns a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesGetOptionalParams
  ): Promise<DatabasesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, databaseName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesCreateOrUpdateResponse>,
      DatabasesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DatabasesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        clusterName,
        databaseName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      DatabasesCreateOrUpdateResponse,
      OperationState<DatabasesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesCreateOrUpdateOptionalParams
  ): Promise<DatabasesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      databaseName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesUpdateResponse>,
      DatabasesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DatabasesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        clusterName,
        databaseName,
        parameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DatabasesUpdateResponse,
      OperationState<DatabasesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesUpdateOptionalParams
  ): Promise<DatabasesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      clusterName,
      databaseName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the database with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterName, databaseName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the database with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a list of database principals of the given Kusto cluster and database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  private _listPrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesListPrincipalsOptionalParams
  ): Promise<DatabasesListPrincipalsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, databaseName, options },
      listPrincipalsOperationSpec
    );
  }

  /**
   * Add Database principals permissions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param databasePrincipalsToAdd List of database principals to add.
   * @param options The options parameters.
   */
  addPrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    databasePrincipalsToAdd: DatabasePrincipalListRequest,
    options?: DatabasesAddPrincipalsOptionalParams
  ): Promise<DatabasesAddPrincipalsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        databasePrincipalsToAdd,
        options
      },
      addPrincipalsOperationSpec
    );
  }

  /**
   * Remove Database principals permissions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param databasePrincipalsToRemove List of database principals to remove.
   * @param options The options parameters.
   */
  removePrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    databasePrincipalsToRemove: DatabasePrincipalListRequest,
    options?: DatabasesRemovePrincipalsOptionalParams
  ): Promise<DatabasesRemovePrincipalsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        databasePrincipalsToRemove,
        options
      },
      removePrincipalsOperationSpec
    );
  }

  /**
   * ListByClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByCluster method.
   * @param options The options parameters.
   */
  private _listByClusterNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: DatabasesListByClusterNextOptionalParams
  ): Promise<DatabasesListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listByClusterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resourceName,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByClusterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skiptoken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    201: {
      bodyMapper: Mappers.Database
    },
    202: {
      bodyMapper: Mappers.Database
    },
    204: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion, Parameters.callerRole],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Database
    },
    201: {
      bodyMapper: Mappers.Database
    },
    202: {
      bodyMapper: Mappers.Database
    },
    204: {
      bodyMapper: Mappers.Database
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion, Parameters.callerRole],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrincipalsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/listPrincipals",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DatabasePrincipalListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addPrincipalsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/addPrincipals",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DatabasePrincipalListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.databasePrincipalsToAdd,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removePrincipalsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/removePrincipals",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DatabasePrincipalListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.databasePrincipalsToRemove,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
