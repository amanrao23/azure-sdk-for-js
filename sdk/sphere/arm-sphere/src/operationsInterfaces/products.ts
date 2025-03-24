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
  Product,
  ProductsListByCatalogOptionalParams,
  DeviceGroup,
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ProductsGetOptionalParams,
  ProductsGetResponse,
  ProductsCreateOrUpdateOptionalParams,
  ProductsCreateOrUpdateResponse,
  ProductUpdate,
  ProductsUpdateOptionalParams,
  ProductsUpdateResponse,
  ProductsDeleteOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsCountDevicesResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Products. */
export interface Products {
  /**
   * List Product resources by Catalog
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param options The options parameters.
   */
  listByCatalog(
    resourceGroupName: string,
    catalogName: string,
    options?: ProductsListByCatalogOptionalParams,
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Generates default device groups for the product. '.default' and '.unassigned' are system defined
   * values and cannot be used for product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  listGenerateDefaultDeviceGroups(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ): PagedAsyncIterableIterator<DeviceGroup>;
  /**
   * Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsGetOptionalParams,
  ): Promise<ProductsGetResponse>;
  /**
   * Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for
   * product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    resource: Product,
    options?: ProductsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProductsCreateOrUpdateResponse>,
      ProductsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for
   * product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    resource: Product,
    options?: ProductsCreateOrUpdateOptionalParams,
  ): Promise<ProductsCreateOrUpdateResponse>;
  /**
   * Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for
   * product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    properties: ProductUpdate,
    options?: ProductsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProductsUpdateResponse>,
      ProductsUpdateResponse
    >
  >;
  /**
   * Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for
   * product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    properties: ProductUpdate,
    options?: ProductsUpdateOptionalParams,
  ): Promise<ProductsUpdateResponse>;
  /**
   * Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for
   * product name'
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for
   * product name'
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used
   * for product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  countDevices(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsCountDevicesOptionalParams,
  ): Promise<ProductsCountDevicesResponse>;
}
