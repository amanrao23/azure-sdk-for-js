/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  DryrunResource as DryrunResourceMapper,
  DryrunPatch as DryrunPatchMapper,
  LinkerResource as LinkerResourceMapper,
  LinkerPatch as LinkerPatchMapper,
  ConfigurationInfo as ConfigurationInfoMapper,
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const dryrunName: OperationURLParameter = {
  parameterPath: "dryrunName",
  mapper: {
    serializedName: "dryrunName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: DryrunResourceMapper,
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: DryrunPatchMapper,
};

export const connectorName: OperationURLParameter = {
  parameterPath: "connectorName",
  mapper: {
    serializedName: "connectorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: LinkerResourceMapper,
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: LinkerPatchMapper,
};

export const parameters4: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: ConfigurationInfoMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const resourceUri: OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    serializedName: "resourceUri",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const linkerName: OperationURLParameter = {
  parameterPath: "linkerName",
  mapper: {
    serializedName: "linkerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String",
    },
  },
};
