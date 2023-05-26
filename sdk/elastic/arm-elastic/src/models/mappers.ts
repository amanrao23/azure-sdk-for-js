/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationResult"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceProviderDefaultErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceProviderDefaultErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponseBody"
        }
      }
    }
  }
};

export const ErrorResponseBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseBody"
            }
          }
        }
      }
    }
  }
};

export const ElasticMonitorResourceListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticMonitorResourceListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ElasticMonitorResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ElasticMonitorResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticMonitorResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MonitorProperties"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityProperties"
        }
      },
      generateApiKey: {
        serializedName: "generateApiKey",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MonitorProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitorProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      monitoringStatus: {
        serializedName: "monitoringStatus",
        type: {
          name: "String"
        }
      },
      elasticProperties: {
        serializedName: "elasticProperties",
        type: {
          name: "Composite",
          className: "ElasticProperties"
        }
      },
      userInfo: {
        serializedName: "userInfo",
        type: {
          name: "Composite",
          className: "UserInfo"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      liftrResourceCategory: {
        serializedName: "liftrResourceCategory",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      liftrResourcePreference: {
        serializedName: "liftrResourcePreference",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ElasticProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticProperties",
    modelProperties: {
      elasticCloudUser: {
        serializedName: "elasticCloudUser",
        type: {
          name: "Composite",
          className: "ElasticCloudUser"
        }
      },
      elasticCloudDeployment: {
        serializedName: "elasticCloudDeployment",
        type: {
          name: "Composite",
          className: "ElasticCloudDeployment"
        }
      }
    }
  }
};

export const ElasticCloudUser: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticCloudUser",
    modelProperties: {
      emailAddress: {
        serializedName: "emailAddress",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      elasticCloudSsoDefaultUrl: {
        serializedName: "elasticCloudSsoDefaultUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ElasticCloudDeployment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticCloudDeployment",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deploymentId: {
        serializedName: "deploymentId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      azureSubscriptionId: {
        serializedName: "azureSubscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      elasticsearchRegion: {
        serializedName: "elasticsearchRegion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      elasticsearchServiceUrl: {
        serializedName: "elasticsearchServiceUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kibanaServiceUrl: {
        serializedName: "kibanaServiceUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kibanaSsoUrl: {
        serializedName: "kibanaSsoUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserInfo",
    modelProperties: {
      firstName: {
        constraints: {
          MaxLength: 50
        },
        serializedName: "firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        constraints: {
          MaxLength: 50
        },
        serializedName: "lastName",
        type: {
          name: "String"
        }
      },
      companyName: {
        constraints: {
          MaxLength: 64
        },
        serializedName: "companyName",
        type: {
          name: "String"
        }
      },
      emailAddress: {
        constraints: {
          Pattern: new RegExp(
            '^([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)@(([a-zA-Z-_0-9]+\\.)+[a-zA-Z]{2,})$'
          )
        },
        serializedName: "emailAddress",
        type: {
          name: "String"
        }
      },
      companyInfo: {
        serializedName: "companyInfo",
        type: {
          name: "Composite",
          className: "CompanyInfo"
        }
      }
    }
  }
};

export const CompanyInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CompanyInfo",
    modelProperties: {
      domain: {
        constraints: {
          MaxLength: 250
        },
        serializedName: "domain",
        type: {
          name: "String"
        }
      },
      business: {
        constraints: {
          MaxLength: 64
        },
        serializedName: "business",
        type: {
          name: "String"
        }
      },
      employeesNumber: {
        constraints: {
          MaxLength: 20
        },
        serializedName: "employeesNumber",
        type: {
          name: "String"
        }
      },
      state: {
        constraints: {
          MaxLength: 64
        },
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      country: {
        constraints: {
          MaxLength: 64
        },
        serializedName: "country",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IdentityProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IdentityProperties",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ElasticMonitorResourceUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticMonitorResourceUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const MonitoredResourceListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoredResourceListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MonitoredResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MonitoredResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoredResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      sendingLogs: {
        serializedName: "sendingLogs",
        type: {
          name: "String"
        }
      },
      reasonForLogsStatus: {
        serializedName: "reasonForLogsStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentInfoResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentInfoResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      memoryCapacity: {
        serializedName: "memoryCapacity",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      diskCapacity: {
        serializedName: "diskCapacity",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deploymentUrl: {
        serializedName: "deploymentUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      marketplaceSaasInfo: {
        serializedName: "marketplaceSaasInfo",
        type: {
          name: "Composite",
          className: "MarketplaceSaaSInfo"
        }
      }
    }
  }
};

export const MarketplaceSaaSInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MarketplaceSaaSInfo",
    modelProperties: {
      marketplaceSubscription: {
        serializedName: "marketplaceSubscription",
        type: {
          name: "Composite",
          className: "MarketplaceSaaSInfoMarketplaceSubscription"
        }
      },
      marketplaceName: {
        serializedName: "marketplaceName",
        type: {
          name: "String"
        }
      },
      marketplaceResourceId: {
        serializedName: "marketplaceResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MarketplaceSaaSInfoMarketplaceSubscription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MarketplaceSaaSInfoMarketplaceSubscription",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExternalUserInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalUserInfo",
    modelProperties: {
      userName: {
        serializedName: "userName",
        type: {
          name: "String"
        }
      },
      fullName: {
        serializedName: "fullName",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      emailId: {
        serializedName: "emailId",
        type: {
          name: "String"
        }
      },
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ExternalUserCreationResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalUserCreationResponse",
    modelProperties: {
      created: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const MonitoringTagRulesListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoringTagRulesListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MonitoringTagRules"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MonitoringTagRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoringTagRules",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MonitoringTagRulesProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const MonitoringTagRulesProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoringTagRulesProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      logRules: {
        serializedName: "logRules",
        type: {
          name: "Composite",
          className: "LogRules"
        }
      }
    }
  }
};

export const LogRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogRules",
    modelProperties: {
      sendAadLogs: {
        serializedName: "sendAadLogs",
        type: {
          name: "Boolean"
        }
      },
      sendSubscriptionLogs: {
        serializedName: "sendSubscriptionLogs",
        type: {
          name: "Boolean"
        }
      },
      sendActivityLogs: {
        serializedName: "sendActivityLogs",
        type: {
          name: "Boolean"
        }
      },
      filteringTags: {
        serializedName: "filteringTags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FilteringTag"
            }
          }
        }
      }
    }
  }
};

export const FilteringTag: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FilteringTag",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VMHostListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VMHostListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VMResources"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VMResources: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VMResources",
    modelProperties: {
      vmResourceId: {
        serializedName: "vmResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VMIngestionDetailsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VMIngestionDetailsResponse",
    modelProperties: {
      cloudId: {
        serializedName: "cloudId",
        type: {
          name: "String"
        }
      },
      ingestionKey: {
        serializedName: "ingestionKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VMCollectionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VMCollectionUpdate",
    modelProperties: {
      vmResourceId: {
        serializedName: "vmResourceId",
        type: {
          name: "String"
        }
      },
      operationName: {
        serializedName: "operationName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpgradableVersionsList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradableVersionsList",
    modelProperties: {
      currentVersion: {
        serializedName: "currentVersion",
        type: {
          name: "String"
        }
      },
      upgradableVersions: {
        serializedName: "upgradableVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ElasticMonitorUpgrade: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticMonitorUpgrade",
    modelProperties: {
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ElasticTrafficFilterResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticTrafficFilterResponse",
    modelProperties: {
      rulesets: {
        serializedName: "rulesets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ElasticTrafficFilter"
            }
          }
        }
      }
    }
  }
};

export const ElasticTrafficFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticTrafficFilter",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      region: {
        serializedName: "region",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      includeByDefault: {
        serializedName: "includeByDefault",
        type: {
          name: "Boolean"
        }
      },
      rules: {
        serializedName: "rules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ElasticTrafficFilterRule"
            }
          }
        }
      }
    }
  }
};

export const ElasticTrafficFilterRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticTrafficFilterRule",
    modelProperties: {
      source: {
        serializedName: "source",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      azureEndpointGuid: {
        serializedName: "azureEndpointGuid",
        type: {
          name: "String"
        }
      },
      azureEndpointName: {
        serializedName: "azureEndpointName",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserEmailId: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserEmailId",
    modelProperties: {
      emailId: {
        serializedName: "emailId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserApiKeyResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserApiKeyResponse",
    modelProperties: {
      apiKey: {
        serializedName: "apiKey",
        type: {
          name: "String"
        }
      }
    }
  }
};
