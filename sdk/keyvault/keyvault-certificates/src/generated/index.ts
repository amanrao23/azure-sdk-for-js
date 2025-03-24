// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { KeyVaultClient } from "./keyVaultClient.js";
export {
  CertificateItem,
  CertificateAttributes,
  KnownDeletionRecoveryLevel,
  DeletionRecoveryLevel,
  KeyVaultError,
  ErrorModel,
  ErrorModel_1,
  DeletedCertificateBundle,
  CertificatePolicy,
  KeyProperties,
  KnownJsonWebKeyType,
  JsonWebKeyType,
  KnownJsonWebKeyCurveName,
  JsonWebKeyCurveName,
  SecretProperties,
  X509CertificateProperties,
  SubjectAlternativeNames,
  KnownKeyUsageType,
  KeyUsageType,
  LifetimeAction,
  Trigger,
  Action,
  CertificatePolicyAction,
  IssuerParameters,
  Contacts,
  Contact,
  CertificateIssuerItem,
  CertificateIssuerSetParameters,
  IssuerCredentials,
  OrganizationDetails,
  AdministratorDetails,
  IssuerAttributes,
  IssuerBundle,
  CertificateIssuerUpdateParameters,
  CertificateCreateParameters,
  CertificateOperation,
  CertificateImportParameters,
  CertificateBundle,
  CertificateUpdateParameters,
  CertificateOperationUpdateParameter,
  CertificateMergeParameters,
  BackupCertificateResult,
  CertificateRestoreParameters,
  DeletedCertificateItem,
  KnownVersions,
} from "./models/index.js";
export {
  KeyVaultClientOptionalParams,
  RecoverDeletedCertificateOptionalParams,
  PurgeDeletedCertificateOptionalParams,
  GetDeletedCertificateOptionalParams,
  GetDeletedCertificatesOptionalParams,
  RestoreCertificateOptionalParams,
  BackupCertificateOptionalParams,
  MergeCertificateOptionalParams,
  DeleteCertificateOperationOptionalParams,
  GetCertificateOperationOptionalParams,
  UpdateCertificateOperationOptionalParams,
  GetCertificateOptionalParams,
  UpdateCertificateOptionalParams,
  UpdateCertificatePolicyOptionalParams,
  GetCertificatePolicyOptionalParams,
  GetCertificateVersionsOptionalParams,
  ImportCertificateOptionalParams,
  CreateCertificateOptionalParams,
  DeleteCertificateIssuerOptionalParams,
  GetCertificateIssuerOptionalParams,
  UpdateCertificateIssuerOptionalParams,
  SetCertificateIssuerOptionalParams,
  GetCertificateIssuersOptionalParams,
  DeleteCertificateContactsOptionalParams,
  GetCertificateContactsOptionalParams,
  SetCertificateContactsOptionalParams,
  DeleteCertificateOptionalParams,
  GetCertificatesOptionalParams,
} from "./api/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
