/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SettingUnion,
  SettingsListOptionalParams,
  SettingNameAutoGenerated,
  SettingsGetOptionalParams,
  SettingsGetResponse,
  SettingsUpdateOptionalParams,
  SettingsUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Settings. */
export interface Settings {
  /**
   * Settings about different configurations in Microsoft Defender for Cloud
   * @param options The options parameters.
   */
  list(
    options?: SettingsListOptionalParams,
  ): PagedAsyncIterableIterator<SettingUnion>;
  /**
   * Settings of different configurations in Microsoft Defender for Cloud
   * @param settingName The name of the setting
   * @param options The options parameters.
   */
  get(
    settingName: SettingNameAutoGenerated,
    options?: SettingsGetOptionalParams,
  ): Promise<SettingsGetResponse>;
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
  ): Promise<SettingsUpdateResponse>;
}
