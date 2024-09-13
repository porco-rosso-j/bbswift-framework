/**
 * AES-128-CBC encryption/decryption.
 */
export declare class Aes128 {
    /**
     * Encrypt a buffer using AES-128-CBC.
     * @param data - Data to encrypt.
     * @param iv - AES initialization vector.
     * @param key - Key to encrypt with.
     * @returns Encrypted data.
     */
    encryptBufferCBC(data: Uint8Array, iv: Uint8Array, key: Uint8Array): void;
    /**
     * Decrypt a buffer using AES-128-CBC.
     * @param data - Data to decrypt.
     * @param iv - AES initialization vector.
     * @param key - Key to decrypt with.
     * @returns Decrypted data.
     */
    decryptBufferCBC(data: Uint8Array, iv: Uint8Array, key: Uint8Array): void;
}
