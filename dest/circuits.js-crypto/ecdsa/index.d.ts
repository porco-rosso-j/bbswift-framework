import { EcdsaSignature } from './signature.js';
export * from './signature.js';
/**
 * ECDSA signature construction and helper operations.
 * TODO: Replace with codegen api on bb.js.
 */
export declare class Ecdsa {
    /**
     * Computes a secp256k1 public key from a private key.
     * @param privateKey - Secp256k1 private key.
     * @returns A secp256k1 public key.
     */
    computePublicKey(privateKey: Buffer): Buffer;
    /**
     * Constructs an ECDSA signature given a msg and a private key.
     * @param msg - Message over which the signature is constructed.
     * @param privateKey - The secp256k1 private key of the signer.
     * @returns An ECDSA signature of the form (r, s, v).
     */
    constructSignature(msg: Uint8Array, privateKey: Buffer): EcdsaSignature;
    /**
     * Recovers a secp256k1 public key from an ECDSA signature (similar to ecrecover).
     * @param msg - Message over which the signature was constructed.
     * @param sig - The ECDSA signature.
     * @returns The secp256k1 public key of the signer.
     */
    recoverPublicKey(msg: Uint8Array, sig: EcdsaSignature): Buffer;
    /**
     * Verifies and ECDSA signature given a secp256k1 public key.
     * @param msg - Message over which the signature was constructed.
     * @param pubKey - The secp256k1 public key of the signer.
     * @param sig - The ECDSA signature.
     * @returns True or false.
     */
    verifySignature(msg: Uint8Array, pubKey: Buffer, sig: EcdsaSignature): Buffer;
}