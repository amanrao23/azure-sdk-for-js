// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export class ClientEncryptionPolicy {
  public path: string;
  public dekName: string;
  public encryptionType: string;
  public encryptionAlgorithm: string;
  
  constructor(path: string, dekName: string, encryptionType: string, encryptionAlgorithm: string) {
    this.path = path;
    this.dekName = dekName;
    this.encryptionType = encryptionType;
    this.encryptionAlgorithm = encryptionAlgorithm;
  }
}
