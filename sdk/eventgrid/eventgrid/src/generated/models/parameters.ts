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

export const events: OperationParameter = {
  parameterPath: "events",
  mapper: {
    serializedName: "events",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "EventGridEvent",
        },
      },
    },
  },
};

export const topicHostname: OperationURLParameter = {
  parameterPath: "topicHostname",
  mapper: {
    serializedName: "topicHostname",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/cloudevents-batch+json; charset=utf-8",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const events1: OperationParameter = {
  parameterPath: "events",
  mapper: {
    serializedName: "events",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "CloudEvent",
        },
      },
    },
  },
};

export const aegChannelName: OperationParameter = {
  parameterPath: ["options", "aegChannelName"],
  mapper: {
    serializedName: "aeg-channel-name",
    type: {
      name: "String",
    },
  },
};

export const events2: OperationParameter = {
  parameterPath: "events",
  mapper: {
    serializedName: "events",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};
