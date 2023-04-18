/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const KeyListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Key"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Key: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Key",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
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
      detail: {
        serializedName: "detail",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyValueListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValueListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigurationSetting"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationSetting: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationSetting",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content_type",
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
      lastModified: {
        serializedName: "last_modified",
        type: {
          name: "DateTime"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      isReadOnly: {
        serializedName: "locked",
        type: {
          name: "Boolean"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LabelListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LabelListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Label"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Label: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Label",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetKeysHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientCheckKeysHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientCheckKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetKeyValuesHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientCheckKeyValuesHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientCheckKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientPutKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientPutKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientDeleteKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientDeleteKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientCheckKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientCheckKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetLabelsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientCheckLabelsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientCheckLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientPutLockHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientPutLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientDeleteLockHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientDeleteLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetRevisionsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientCheckRevisionsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientCheckRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetKeysNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetKeysNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetKeyValuesNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetKeyValuesNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetLabelsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetLabelsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationClientGetRevisionsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationClientGetRevisionsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};
