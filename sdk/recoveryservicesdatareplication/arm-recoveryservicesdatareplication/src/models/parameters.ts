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
  OperationQueryParameter
} from "@azure/core-client";
import {
  DraModel as DraModelMapper,
  EmailConfigurationModel as EmailConfigurationModelMapper,
  FabricModel as FabricModelMapper,
  FabricModelUpdate as FabricModelUpdateMapper,
  PolicyModel as PolicyModelMapper,
  ProtectedItemModel as ProtectedItemModelMapper,
  PlannedFailoverModel as PlannedFailoverModelMapper,
  ReplicationExtensionModel as ReplicationExtensionModelMapper,
  CheckNameAvailabilityModel as CheckNameAvailabilityModelMapper,
  DeploymentPreflightModel as DeploymentPreflightModelMapper,
  VaultModel as VaultModelMapper,
  VaultModelUpdate as VaultModelUpdateMapper
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const fabricName: OperationURLParameter = {
  parameterPath: "fabricName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "fabricName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const fabricAgentName: OperationURLParameter = {
  parameterPath: "fabricAgentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "fabricAgentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-02-16-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DraModelMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vaultName: OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const emailConfigurationName: OperationURLParameter = {
  parameterPath: "emailConfigurationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "emailConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: EmailConfigurationModelMapper
};

export const eventName: OperationURLParameter = {
  parameterPath: "eventName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "eventName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const continuationToken: OperationQueryParameter = {
  parameterPath: ["options", "continuationToken"],
  mapper: {
    serializedName: "continuationToken",
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: FabricModelMapper
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: FabricModelUpdateMapper
};

export const policyName: OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "policyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PolicyModelMapper
};

export const protectedItemName: OperationURLParameter = {
  parameterPath: "protectedItemName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "protectedItemName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ProtectedItemModelMapper
};

export const forceDelete: OperationQueryParameter = {
  parameterPath: ["options", "forceDelete"],
  mapper: {
    serializedName: "forceDelete",
    type: {
      name: "Boolean"
    }
  }
};

export const body6: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PlannedFailoverModelMapper
};

export const recoveryPointName: OperationURLParameter = {
  parameterPath: "recoveryPointName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "recoveryPointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const replicationExtensionName: OperationURLParameter = {
  parameterPath: "replicationExtensionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "replicationExtensionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body7: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ReplicationExtensionModelMapper
};

export const body8: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CheckNameAvailabilityModelMapper
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body9: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DeploymentPreflightModelMapper
};

export const deploymentId: OperationURLParameter = {
  parameterPath: "deploymentId",
  mapper: {
    serializedName: "deploymentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body10: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: VaultModelMapper
};

export const body11: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: VaultModelUpdateMapper
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$")
    },
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};
