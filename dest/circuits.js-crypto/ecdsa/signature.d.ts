import { Fr } from '@aztec/foundation/fields';
import { type Signature } from '../signature/index.js';
/**
 * ECDSA signature used for transactions.
 * @see cpp/barretenberg/cpp/src/barretenberg/crypto/ecdsa/ecdsa.hpp
 */
export declare class EcdsaSignature implements Signature {
    /**
     * The r byte-array (32 bytes) in an ECDSA signature.
     */
    r: Buffer;
    /**
     * The s byte-array (32 bytes) in an ECDSA signature.
     */
    s: Buffer;
    /**
     * The recovery id (1 byte) in an ECDSA signature.
     */
    v: Buffer;
    constructor(
    /**
     * The r byte-array (32 bytes) in an ECDSA signature.
     */
    r: Buffer, 
    /**
     * The s byte-array (32 bytes) in an ECDSA signature.
     */
    s: Buffer, 
    /**
     * The recovery id (1 byte) in an ECDSA signature.
     */
    v: Buffer);
    /**
     * Converts an ECDSA signature to a buffer.
     * @returns A buffer.
     */
    toBuffer(): Buffer;
    /**
     * Deserializes the signature from a buffer.
     * @param buffer - The buffer from which to deserialize the signature.
     * @returns The ECDSA signature
     */
    static fromBuffer(buffer: Buffer): EcdsaSignature;
    /**
     * Creates a new instance from bigint r and s values.
     * @param r - r.
     * @param s - s.
     * @param v - v.
     * @returns The resulting signature.
     */
    static fromBigInts(r: bigint, s: bigint, v: number): EcdsaSignature;
    /**
     * Generate a random ECDSA signature for testing.
     * @returns A randomly generated ECDSA signature (not a valid one).
     */
    static random(): EcdsaSignature;
    /**
     * Convert an ECDSA signature to a buffer.
     * @returns A 65-character string of the form 0x<r><s><v>.
     */
    toString(): string;
    /**
     * Converts the signature to an array of fields.
     * @param includeV - Determines whether the 'v' term is included
     * @returns The signature components as an array of fields
     */
    toFields(includeV?: boolean): Fr[];
}