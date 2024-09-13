import { Fr } from '@aztec/foundation/fields';
import { BufferReader } from '@aztec/foundation/serialize';
import { type Signature } from '../signature/index.js';
/**
 * Schnorr signature used for transactions.
 * @see cpp/barretenberg/cpp/src/barretenberg/crypto/schnorr/schnorr.hpp
 */
export declare class SchnorrSignature implements Signature {
    private buffer;
    /**
     * The size of the signature in bytes.
     */
    static SIZE: number;
    /**
     * An empty signature.
     */
    static EMPTY: SchnorrSignature;
    constructor(buffer: Buffer);
    /**
     * Determines if the provided signature is valid or not.
     * @param signature - The data to be checked.
     * @returns Boolean indicating if the provided data is a valid schnorr signature.
     */
    static isSignature(signature: string): boolean;
    /**
     * Constructs a SchnorrSignature from the provided string.
     * @param signature - The string to be converted to a schnorr signature.
     * @returns The constructed schnorr signature.
     */
    static fromString(signature: string): SchnorrSignature;
    /**
     * Generates a random schnorr signature.
     * @returns The randomly constructed signature.
     */
    static random(): SchnorrSignature;
    /**
     * Returns the 's' component of the signature.
     * @returns A buffer containing the signature's 's' component.
     */
    get s(): Buffer;
    /**
     * Returns the 'e' component of the signature.
     * @returns A buffer containing the signature's 'e' component.
     */
    get e(): Buffer;
    /**
     * Returns the full signature as a buffer.
     * @returns A buffer containing the signature.
     */
    toBuffer(): Buffer;
    /**
     * Deserializes from a buffer.
     * @param buffer - The buffer representation of the object.
     * @returns The new object.
     */
    static fromBuffer(buffer: Buffer | BufferReader): SchnorrSignature;
    /**
     * Returns the full signature as a hex string.
     * @returns A string containing the signature in hex format.
     */
    toString(): string;
    /**
     * Converts the signature to an array of three fields.
     * @returns The signature components as an array of three fields
     */
    toFields(): Fr[];
}
