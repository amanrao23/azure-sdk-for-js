import { EncryptionKeyWrapMetadata } from './EncryptionKeyWrapMetadata';

export class ProtectedDataEncryptionKey {
  public value: string;
  public encryptionKeyWrapMetadata: EncryptionKeyWrapMetadata;

  constructor(value: string, encryptionKeyWrapMetadata: EncryptionKeyWrapMetadata) {
    this.value = value;
    this.encryptionKeyWrapMetadata = encryptionKeyWrapMetadata;
  }
}
