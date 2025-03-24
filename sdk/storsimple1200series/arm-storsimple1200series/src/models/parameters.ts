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
  Manager as ManagerMapper,
  ManagerPatch as ManagerPatchMapper,
  UploadCertificateRequest as UploadCertificateRequestMapper,
  ManagerExtendedInfo as ManagerExtendedInfoMapper,
  AccessControlRecord as AccessControlRecordMapper,
  ClearAlertRequest as ClearAlertRequestMapper,
  SendTestAlertEmailRequest as SendTestAlertEmailRequestMapper,
  CloneRequest as CloneRequestMapper,
  DevicePatch as DevicePatchMapper,
  AlertSettings as AlertSettingsMapper,
  FailoverRequest as FailoverRequestMapper,
  SecuritySettings as SecuritySettingsMapper,
  BackupScheduleGroup as BackupScheduleGroupMapper,
  ChapSettings as ChapSettingsMapper,
  IscsiDisk as IscsiDiskMapper,
  FileServer as FileServerMapper,
  FileShare as FileShareMapper,
  IscsiServer as IscsiServerMapper,
  StorageAccountCredential as StorageAccountCredentialMapper,
  StorageDomain as StorageDomainMapper
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
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2016-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const managerName: OperationURLParameter = {
  parameterPath: "managerName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 2
    },
    serializedName: "managerName",
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

export const manager: OperationParameter = {
  parameterPath: "manager",
  mapper: ManagerMapper
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ManagerPatchMapper
};

export const uploadCertificateRequestrequest: OperationParameter = {
  parameterPath: "uploadCertificateRequestrequest",
  mapper: UploadCertificateRequestMapper
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const managerExtendedInfo: OperationParameter = {
  parameterPath: "managerExtendedInfo",
  mapper: ManagerExtendedInfoMapper
};

export const ifMatch: OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    serializedName: "If-Match",
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

export const accessControlRecordName: OperationURLParameter = {
  parameterPath: "accessControlRecordName",
  mapper: {
    serializedName: "accessControlRecordName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accessControlRecord: OperationParameter = {
  parameterPath: "accessControlRecord",
  mapper: AccessControlRecordMapper
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: ClearAlertRequestMapper
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: SendTestAlertEmailRequestMapper
};

export const deviceName: OperationURLParameter = {
  parameterPath: "deviceName",
  mapper: {
    serializedName: "deviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const forFailover: OperationQueryParameter = {
  parameterPath: ["options", "forFailover"],
  mapper: {
    serializedName: "forFailover",
    type: {
      name: "Boolean"
    }
  }
};

export const backupName: OperationURLParameter = {
  parameterPath: "backupName",
  mapper: {
    serializedName: "backupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cloneRequest: OperationParameter = {
  parameterPath: "cloneRequest",
  mapper: CloneRequestMapper
};

export const elementName: OperationURLParameter = {
  parameterPath: "elementName",
  mapper: {
    serializedName: "elementName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const devicePatch: OperationParameter = {
  parameterPath: "devicePatch",
  mapper: DevicePatchMapper
};

export const alertSettings: OperationParameter = {
  parameterPath: "alertSettings",
  mapper: AlertSettingsMapper
};

export const failoverRequest: OperationParameter = {
  parameterPath: "failoverRequest",
  mapper: FailoverRequestMapper
};

export const securitySettings: OperationParameter = {
  parameterPath: "securitySettings",
  mapper: SecuritySettingsMapper
};

export const scheduleGroupName: OperationURLParameter = {
  parameterPath: "scheduleGroupName",
  mapper: {
    serializedName: "scheduleGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scheduleGroup: OperationParameter = {
  parameterPath: "scheduleGroup",
  mapper: BackupScheduleGroupMapper
};

export const chapUserName: OperationURLParameter = {
  parameterPath: "chapUserName",
  mapper: {
    serializedName: "chapUserName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const chapSetting: OperationParameter = {
  parameterPath: "chapSetting",
  mapper: ChapSettingsMapper
};

export const iscsiServerName: OperationURLParameter = {
  parameterPath: "iscsiServerName",
  mapper: {
    serializedName: "iscsiServerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskName: OperationURLParameter = {
  parameterPath: "diskName",
  mapper: {
    serializedName: "diskName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const iscsiDisk: OperationParameter = {
  parameterPath: "iscsiDisk",
  mapper: IscsiDiskMapper
};

export const fileServerName: OperationURLParameter = {
  parameterPath: "fileServerName",
  mapper: {
    serializedName: "fileServerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const fileServer: OperationParameter = {
  parameterPath: "fileServer",
  mapper: FileServerMapper
};

export const shareName: OperationURLParameter = {
  parameterPath: "shareName",
  mapper: {
    serializedName: "shareName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const fileShare: OperationParameter = {
  parameterPath: "fileShare",
  mapper: FileShareMapper
};

export const iscsiServer: OperationParameter = {
  parameterPath: "iscsiServer",
  mapper: IscsiServerMapper
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const credentialName: OperationURLParameter = {
  parameterPath: "credentialName",
  mapper: {
    serializedName: "credentialName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const storageAccount: OperationParameter = {
  parameterPath: "storageAccount",
  mapper: StorageAccountCredentialMapper
};

export const storageDomainName: OperationURLParameter = {
  parameterPath: "storageDomainName",
  mapper: {
    serializedName: "storageDomainName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const storageDomain: OperationParameter = {
  parameterPath: "storageDomain",
  mapper: StorageDomainMapper
};
