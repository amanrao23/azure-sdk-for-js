// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.browser.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 1200000,
      hookTimeout: 1200000,
      include: [
        "dist-test/browser/**/**/*.spec.js",
      ],
    },
  }),
);
