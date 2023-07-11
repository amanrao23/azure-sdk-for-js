// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CustomerManagedKey } from "./CustomerManagedKey";
export class CmkCache {
  private cmkCache: { [key: string]: { value: CustomerManagedKey } } = {};

  constructor() {
    this.cmkCache = {};
  }

  public setDataEncryptionKey(key: string, value: CustomerManagedKey) : void  {
    this.cmkCache[key] = { value: value };
  };

  public getDataEncryptionKey(key: string) : CustomerManagedKey | undefined {
    return this.cmkCache[key].value;
  }
}
