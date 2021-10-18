/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/diskEncryptionSetsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a DiskEncryptionSets. */
export class DiskEncryptionSets {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a DiskEncryptionSets.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a disk encryption set
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk
   * encryption set operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: Models.DiskEncryptionSet, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,diskEncryptionSetName,diskEncryptionSet,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DiskEncryptionSetsCreateOrUpdateResponse>;
  }

  /**
   * Updates (patches) a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
   * encryption set operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsUpdateResponse>
   */
  update(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: Models.DiskEncryptionSetUpdate, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,diskEncryptionSetName,diskEncryptionSet,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DiskEncryptionSetsUpdateResponse>;
  }

  /**
   * Gets information about a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsGetResponse>
   */
  get(resourceGroupName: string, diskEncryptionSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param callback The callback
   */
  get(resourceGroupName: string, diskEncryptionSetName: string, callback: msRest.ServiceCallback<Models.DiskEncryptionSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, diskEncryptionSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskEncryptionSet>): void;
  get(resourceGroupName: string, diskEncryptionSetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskEncryptionSet>, callback?: msRest.ServiceCallback<Models.DiskEncryptionSet>): Promise<Models.DiskEncryptionSetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskEncryptionSetName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsGetResponse>;
  }

  /**
   * Deletes a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, diskEncryptionSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,diskEncryptionSetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the disk encryption sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskEncryptionSetList>, callback?: msRest.ServiceCallback<Models.DiskEncryptionSetList>): Promise<Models.DiskEncryptionSetsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsListByResourceGroupResponse>;
  }

  /**
   * Lists all the disk encryption sets under a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskEncryptionSetList>, callback?: msRest.ServiceCallback<Models.DiskEncryptionSetList>): Promise<Models.DiskEncryptionSetsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsListResponse>;
  }

  /**
   * Lists all resources that are encrypted with this disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsListAssociatedResourcesResponse>
   */
  listAssociatedResources(resourceGroupName: string, diskEncryptionSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsListAssociatedResourcesResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param callback The callback
   */
  listAssociatedResources(resourceGroupName: string, diskEncryptionSetName: string, callback: msRest.ServiceCallback<Models.ResourceUriList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAssociatedResources(resourceGroupName: string, diskEncryptionSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceUriList>): void;
  listAssociatedResources(resourceGroupName: string, diskEncryptionSetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceUriList>, callback?: msRest.ServiceCallback<Models.ResourceUriList>): Promise<Models.DiskEncryptionSetsListAssociatedResourcesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskEncryptionSetName,
        options
      },
      listAssociatedResourcesOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsListAssociatedResourcesResponse>;
  }

  /**
   * Creates or updates a disk encryption set
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk
   * encryption set operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: Models.DiskEncryptionSet, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskEncryptionSetName,
        diskEncryptionSet,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates (patches) a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
   * encryption set operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: Models.DiskEncryptionSetUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskEncryptionSetName,
        diskEncryptionSet,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   * can't be changed after the disk encryption set is created. Supported characters for the name are
   * a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, diskEncryptionSetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskEncryptionSetName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all the disk encryption sets under a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskEncryptionSetList>, callback?: msRest.ServiceCallback<Models.DiskEncryptionSetList>): Promise<Models.DiskEncryptionSetsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the disk encryption sets under a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskEncryptionSetList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskEncryptionSetList>, callback?: msRest.ServiceCallback<Models.DiskEncryptionSetList>): Promise<Models.DiskEncryptionSetsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsListNextResponse>;
  }

  /**
   * Lists all resources that are encrypted with this disk encryption set.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskEncryptionSetsListAssociatedResourcesNextResponse>
   */
  listAssociatedResourcesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskEncryptionSetsListAssociatedResourcesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAssociatedResourcesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceUriList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAssociatedResourcesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceUriList>): void;
  listAssociatedResourcesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceUriList>, callback?: msRest.ServiceCallback<Models.ResourceUriList>): Promise<Models.DiskEncryptionSetsListAssociatedResourcesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAssociatedResourcesNextOperationSpec,
      callback) as Promise<Models.DiskEncryptionSetsListAssociatedResourcesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskEncryptionSetName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskEncryptionSets",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAssociatedResourcesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}/associatedResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskEncryptionSetName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceUriList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskEncryptionSetName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "diskEncryptionSet",
    mapper: {
      ...Mappers.DiskEncryptionSet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    202: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskEncryptionSetName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "diskEncryptionSet",
    mapper: {
      ...Mappers.DiskEncryptionSetUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    202: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskEncryptionSetName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAssociatedResourcesNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceUriList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
