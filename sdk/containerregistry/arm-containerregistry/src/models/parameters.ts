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
  Archive as ArchiveMapper,
  ArchiveUpdateParameters as ArchiveUpdateParametersMapper,
  CacheRule as CacheRuleMapper,
  CacheRuleUpdateParameters as CacheRuleUpdateParametersMapper,
  ConnectedRegistry as ConnectedRegistryMapper,
  ConnectedRegistryUpdateParameters as ConnectedRegistryUpdateParametersMapper,
  CredentialSet as CredentialSetMapper,
  CredentialSetUpdateParameters as CredentialSetUpdateParametersMapper,
  ExportPipeline as ExportPipelineMapper,
  ImportImageParameters as ImportImageParametersMapper,
  RegistryNameCheckRequest as RegistryNameCheckRequestMapper,
  Registry as RegistryMapper,
  RegistryUpdateParameters as RegistryUpdateParametersMapper,
  RegenerateCredentialParameters as RegenerateCredentialParametersMapper,
  GenerateCredentialsParameters as GenerateCredentialsParametersMapper,
  RunRequest as RunRequestMapper,
  ImportPipeline as ImportPipelineMapper,
  PipelineRun as PipelineRunMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Replication as ReplicationMapper,
  ReplicationUpdateParameters as ReplicationUpdateParametersMapper,
  ScopeMap as ScopeMapMapper,
  ScopeMapUpdateParameters as ScopeMapUpdateParametersMapper,
  Token as TokenMapper,
  TokenUpdateParameters as TokenUpdateParametersMapper,
  WebhookCreateParameters as WebhookCreateParametersMapper,
  WebhookUpdateParameters as WebhookUpdateParametersMapper,
  AgentPool as AgentPoolMapper,
  AgentPoolUpdateParameters as AgentPoolUpdateParametersMapper,
  RunUpdateParameters as RunUpdateParametersMapper,
  TaskRun as TaskRunMapper,
  TaskRunUpdateParameters as TaskRunUpdateParametersMapper,
  Task as TaskMapper,
  TaskUpdateParameters as TaskUpdateParametersMapper
} from "../models/mappers";

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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-11-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
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

export const registryName: OperationURLParameter = {
  parameterPath: "registryName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "registryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const packageType: OperationURLParameter = {
  parameterPath: "packageType",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z]*$"),
      MaxLength: 50,
      MinLength: 3
    },
    serializedName: "packageType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const archiveName: OperationURLParameter = {
  parameterPath: "archiveName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 200,
      MinLength: 5
    },
    serializedName: "archiveName",
    required: true,
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

export const archiveCreateParameters: OperationParameter = {
  parameterPath: "archiveCreateParameters",
  mapper: ArchiveMapper
};

export const archiveUpdateParameters: OperationParameter = {
  parameterPath: "archiveUpdateParameters",
  mapper: ArchiveUpdateParametersMapper
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

export const archiveVersionName: OperationURLParameter = {
  parameterPath: "archiveVersionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 200,
      MinLength: 5
    },
    serializedName: "archiveVersionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cacheRuleName: OperationURLParameter = {
  parameterPath: "cacheRuleName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "cacheRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cacheRuleCreateParameters: OperationParameter = {
  parameterPath: "cacheRuleCreateParameters",
  mapper: CacheRuleMapper
};

export const cacheRuleUpdateParameters: OperationParameter = {
  parameterPath: "cacheRuleUpdateParameters",
  mapper: CacheRuleUpdateParametersMapper
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

export const connectedRegistryName: OperationURLParameter = {
  parameterPath: "connectedRegistryName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "connectedRegistryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const connectedRegistryCreateParameters: OperationParameter = {
  parameterPath: "connectedRegistryCreateParameters",
  mapper: ConnectedRegistryMapper
};

export const connectedRegistryUpdateParameters: OperationParameter = {
  parameterPath: "connectedRegistryUpdateParameters",
  mapper: ConnectedRegistryUpdateParametersMapper
};

export const credentialSetName: OperationURLParameter = {
  parameterPath: "credentialSetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "credentialSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const credentialSetCreateParameters: OperationParameter = {
  parameterPath: "credentialSetCreateParameters",
  mapper: CredentialSetMapper
};

export const credentialSetUpdateParameters: OperationParameter = {
  parameterPath: "credentialSetUpdateParameters",
  mapper: CredentialSetUpdateParametersMapper
};

export const exportPipelineName: OperationURLParameter = {
  parameterPath: "exportPipelineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "exportPipelineName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const exportPipelineCreateParameters: OperationParameter = {
  parameterPath: "exportPipelineCreateParameters",
  mapper: ExportPipelineMapper
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImportImageParametersMapper
};

export const registryNameCheckRequest: OperationParameter = {
  parameterPath: "registryNameCheckRequest",
  mapper: RegistryNameCheckRequestMapper
};

export const registry: OperationParameter = {
  parameterPath: "registry",
  mapper: RegistryMapper
};

export const registryUpdateParameters: OperationParameter = {
  parameterPath: "registryUpdateParameters",
  mapper: RegistryUpdateParametersMapper
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const regenerateCredentialParameters: OperationParameter = {
  parameterPath: "regenerateCredentialParameters",
  mapper: RegenerateCredentialParametersMapper
};

export const generateCredentialsParameters: OperationParameter = {
  parameterPath: "generateCredentialsParameters",
  mapper: GenerateCredentialsParametersMapper
};

export const runRequest: OperationParameter = {
  parameterPath: "runRequest",
  mapper: RunRequestMapper
};

export const resourceGroupName1: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const importPipelineName: OperationURLParameter = {
  parameterPath: "importPipelineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "importPipelineName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const importPipelineCreateParameters: OperationParameter = {
  parameterPath: "importPipelineCreateParameters",
  mapper: ImportPipelineMapper
};

export const pipelineRunName: OperationURLParameter = {
  parameterPath: "pipelineRunName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "pipelineRunName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pipelineRunCreateParameters: OperationParameter = {
  parameterPath: "pipelineRunCreateParameters",
  mapper: PipelineRunMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
  mapper: PrivateEndpointConnectionMapper
};

export const replicationName: OperationURLParameter = {
  parameterPath: "replicationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "replicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const replication: OperationParameter = {
  parameterPath: "replication",
  mapper: ReplicationMapper
};

export const replicationUpdateParameters: OperationParameter = {
  parameterPath: "replicationUpdateParameters",
  mapper: ReplicationUpdateParametersMapper
};

export const scopeMapName: OperationURLParameter = {
  parameterPath: "scopeMapName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "scopeMapName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scopeMapCreateParameters: OperationParameter = {
  parameterPath: "scopeMapCreateParameters",
  mapper: ScopeMapMapper
};

export const scopeMapUpdateParameters: OperationParameter = {
  parameterPath: "scopeMapUpdateParameters",
  mapper: ScopeMapUpdateParametersMapper
};

export const tokenName: OperationURLParameter = {
  parameterPath: "tokenName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "tokenName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tokenCreateParameters: OperationParameter = {
  parameterPath: "tokenCreateParameters",
  mapper: TokenMapper
};

export const tokenUpdateParameters: OperationParameter = {
  parameterPath: "tokenUpdateParameters",
  mapper: TokenUpdateParametersMapper
};

export const webhookName: OperationURLParameter = {
  parameterPath: "webhookName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "webhookName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const webhookCreateParameters: OperationParameter = {
  parameterPath: "webhookCreateParameters",
  mapper: WebhookCreateParametersMapper
};

export const webhookUpdateParameters: OperationParameter = {
  parameterPath: "webhookUpdateParameters",
  mapper: WebhookUpdateParametersMapper
};

export const agentPoolName: OperationURLParameter = {
  parameterPath: "agentPoolName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 20,
      MinLength: 3
    },
    serializedName: "agentPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const agentPool: OperationParameter = {
  parameterPath: "agentPool",
  mapper: AgentPoolMapper
};

export const updateParameters: OperationParameter = {
  parameterPath: "updateParameters",
  mapper: AgentPoolUpdateParametersMapper
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const runId: OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    serializedName: "runId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const runUpdateParameters: OperationParameter = {
  parameterPath: "runUpdateParameters",
  mapper: RunUpdateParametersMapper
};

export const taskRunName: OperationURLParameter = {
  parameterPath: "taskRunName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "taskRunName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const taskRun: OperationParameter = {
  parameterPath: "taskRun",
  mapper: TaskRunMapper
};

export const updateParameters1: OperationParameter = {
  parameterPath: "updateParameters",
  mapper: TaskRunUpdateParametersMapper
};

export const taskName: OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "taskName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const taskCreateParameters: OperationParameter = {
  parameterPath: "taskCreateParameters",
  mapper: TaskMapper
};

export const taskUpdateParameters: OperationParameter = {
  parameterPath: "taskUpdateParameters",
  mapper: TaskUpdateParametersMapper
};
