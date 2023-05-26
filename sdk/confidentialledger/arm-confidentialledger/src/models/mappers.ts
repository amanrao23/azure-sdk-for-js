/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ResourceProviderOperationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceProviderOperationList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceProviderOperationDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceProviderOperationDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDefinition",
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
          className: "ResourceProviderOperationDisplay"
        }
      }
    }
  }
};

export const ResourceProviderOperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDisplay",
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

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CheckNameAvailabilityRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequest",
    modelProperties: {
      name: {
        serializedName: "name",
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

export const CheckNameAvailabilityResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResponse",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LedgerProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LedgerProperties",
    modelProperties: {
      ledgerName: {
        serializedName: "ledgerName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      ledgerUri: {
        serializedName: "ledgerUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      identityServiceUri: {
        serializedName: "identityServiceUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      ledgerInternalNamespace: {
        serializedName: "ledgerInternalNamespace",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      ledgerType: {
        serializedName: "ledgerType",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      aadBasedSecurityPrincipals: {
        serializedName: "aadBasedSecurityPrincipals",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AADBasedSecurityPrincipal"
            }
          }
        }
      },
      certBasedSecurityPrincipals: {
        serializedName: "certBasedSecurityPrincipals",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CertBasedSecurityPrincipal"
            }
          }
        }
      }
    }
  }
};

export const AADBasedSecurityPrincipal: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AADBasedSecurityPrincipal",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      ledgerRoleName: {
        serializedName: "ledgerRoleName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CertBasedSecurityPrincipal: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertBasedSecurityPrincipal",
    modelProperties: {
      cert: {
        serializedName: "cert",
        type: {
          name: "String"
        }
      },
      ledgerRoleName: {
        serializedName: "ledgerRoleName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
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

export const Tags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tags",
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

export const ConfidentialLedgerList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfidentialLedgerList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfidentialLedger"
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

export const ManagedCCFProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedCCFProperties",
    modelProperties: {
      appName: {
        serializedName: "appName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      appUri: {
        serializedName: "appUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      identityServiceUri: {
        serializedName: "identityServiceUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      memberIdentityCertificates: {
        serializedName: "memberIdentityCertificates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MemberIdentityCertificate"
            }
          }
        }
      },
      deploymentType: {
        serializedName: "deploymentType",
        type: {
          name: "Composite",
          className: "DeploymentType"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      nodeCount: {
        defaultValue: 3,
        serializedName: "nodeCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MemberIdentityCertificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MemberIdentityCertificate",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        type: {
          name: "String"
        }
      },
      encryptionkey: {
        serializedName: "encryptionkey",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DeploymentType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentType",
    modelProperties: {
      languageRuntime: {
        serializedName: "languageRuntime",
        type: {
          name: "String"
        }
      },
      appSourceUri: {
        serializedName: "appSourceUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedCCFList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedCCFList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedCCF"
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

export const CertificateTags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateTags",
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

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
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
      }
    }
  }
};

export const ConfidentialLedger: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfidentialLedger",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      ...Tags.type.modelProperties,
      runningState: {
        serializedName: "runningState",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LedgerProperties"
        }
      }
    }
  }
};

export const ManagedCCF: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedCCF",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ManagedCCFProperties"
        }
      }
    }
  }
};
