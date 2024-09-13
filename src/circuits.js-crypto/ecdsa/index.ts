import { EcdsaSignature } from './signature.js';
import { NativeModules } from 'react-native';
const { BBSwift } = NativeModules;
export * from './signature.js';

/**
 * ECDSA signature construction and helper operations.
 * TODO: Replace with codegen api on bb.js.
 */
export class Ecdsa {

  /**
   * Computes a secp256k1 public key from a private key.
   * @param privateKey - Secp256k1 private key.
   * @returns A secp256k1 public key.
   */
  public computePublicKey(privateKey: Buffer): Buffer {
    const result = BBSwift.ecdsaComputePublicKey(privateKey);
    if (!result) {
      throw new Error('computePublicKey returned null or encountered an error');
    }
    
    return Buffer.from(result);
  }

  /**
   * Constructs an ECDSA signature given a msg and a private key.
   * @param msg - Message over which the signature is constructed.
   * @param privateKey - The secp256k1 private key of the signer.
   * @returns An ECDSA signature of the form (r, s, v).
   */
  public constructSignature(msg: Uint8Array, privateKey: Buffer) {
    const result = BBSwift.ecdsaConstructSignature(msg, privateKey);
    if (!result) {
      throw new Error('constructSignature returned null or encountered an error');
    }
    return new EcdsaSignature(
      Buffer.from(result.slice(0, 32)),
      Buffer.from(result.slice(32, 64)),
      Buffer.from(result.slice(64, 65)),
    );
  }

  /**
   * Recovers a secp256k1 public key from an ECDSA signature (similar to ecrecover).
   * @param msg - Message over which the signature was constructed.
   * @param sig - The ECDSA signature.
   * @returns The secp256k1 public key of the signer.
   */
  public recoverPublicKey(msg: Uint8Array, sig: EcdsaSignature): Buffer {
    const result = BBSwift.ecdsaConstructSignature(msg, sig.r, sig.s, sig.v);
    if (!result) {
      throw new Error('recoverPublicKey returned null or encountered an error');
    }
    return Buffer.from(result);
  }

  /**
   * Verifies and ECDSA signature given a secp256k1 public key.
   * @param msg - Message over which the signature was constructed.
   * @param pubKey - The secp256k1 public key of the signer.
   * @param sig - The ECDSA signature.
   * @returns True or false.
   */
  public verifySignature(msg: Uint8Array, pubKey: Buffer, sig: EcdsaSignature) {
    const result = BBSwift.ecdsaConstructSignature(msg, pubKey, sig.r, sig.s, sig.v);
    if (!result) {
      throw new Error('verifySignature returned null or encountered an error');
    }
    return Buffer.from(result);
  }
}
