import { Fr, Fq, Point, Buffer32, Buffer128, Ptr } from '../types/index.js';
export declare class BarretenbergApi {
    pedersenCommit(inputsBuffer: Fr[]): Promise<Point>;
    pedersenHash(inputsBuffer: Fr[], hashIndex: number): Promise<Fr>;
    poseidon2Hash(inputsBuffer: Fr[]): Promise<Fr>;
    eccGrumpkinMul(pointBuf: Buffer, scalarBuf: Buffer): Promise<Buffer>;
    eccGrumpkinAdd(pointABuf: Buffer, pointBBuf: Buffer): Promise<Buffer>;
    pedersenHashes(inputsBuffer: Fr[], hashIndex: number): Promise<Fr>;
    pedersenHashBuffer(inputBuffer: Uint8Array, hashIndex: number): Promise<Fr>;
    poseidon2Hashes(inputsBuffer: Fr[]): Promise<Fr>;
    poseidon2Permutation(inputsBuffer: Fr[]): Promise<Fr[]>;
    blake2s(data: Uint8Array): Promise<Buffer32>;
    blake2sToField(data: Uint8Array): Promise<Fr>;
    schnorrComputePublicKey(privateKey: Fr): Promise<Point>;
    schnorrNegatePublicKey(publicKeyBuffer: Point): Promise<Point>;
    schnorrConstructSignature(message: Uint8Array, privateKey: Fr): Promise<[Buffer32, Buffer32]>;
    schnorrVerifySignature(message: Uint8Array, pubKey: Point, sigS: Buffer32, sigE: Buffer32): Promise<boolean>;
    schnorrMultisigCreateMultisigPublicKey(privateKey: Fq): Promise<Buffer128>;
    schnorrMultisigValidateAndCombineSignerPubkeys(signerPubkeyBuf: Buffer128[]): Promise<[Point, boolean]>;
    schnorrMultisigConstructSignatureRound1(): Promise<[
        Buffer128,
        Buffer128
    ]>;
    schnorrMultisigConstructSignatureRound2(message: Uint8Array, privateKey: Fq, signerRoundOnePrivateBuf: Buffer128, signerPubkeysBuf: Buffer128[], roundOnePublicBuf: Buffer128[]): Promise<[Fq, boolean]>;
    schnorrMultisigCombineSignatures(message: Uint8Array, signerPubkeysBuf: Buffer128[], roundOneBuf: Buffer128[], roundTwoBuf: Fq[]): Promise<[Buffer32, Buffer32, boolean]>;
    aesEncryptBufferCbc(input: Uint8Array, iv: Uint8Array, key: Uint8Array, length: number): Promise<Uint8Array>;
    aesDecryptBufferCbc(input: Uint8Array, iv: Uint8Array, key: Uint8Array, length: number): Promise<Uint8Array>;
    srsInitSrs(pointsBuf: Uint8Array, numPoints: number, g2PointBuf: Uint8Array): Promise<void>;
    srsInitGrumpkinSrs(pointsBuf: Uint8Array, numPoints: number): Promise<void>;
    examplesSimpleCreateAndVerifyProof(): Promise<boolean>;
    testThreads(threads: number, iterations: number): Promise<number>;
    commonInitSlabAllocator(circuitSize: number): Promise<void>;
    acirGetCircuitSizes(constraintSystemBuf: Uint8Array, honkRecursion: boolean): Promise<[number, number, number]>;
    acirNewAcirComposer(sizeHint: number): Promise<Ptr>;
    acirDeleteAcirComposer(acirComposerPtr: Ptr): Promise<void>;
    acirCreateCircuit(acirComposerPtr: Ptr, constraintSystemBuf: Uint8Array, sizeHint: number): Promise<void>;
    acirInitProvingKey(acirComposerPtr: Ptr, constraintSystemBuf: Uint8Array): Promise<void>;
    acirCreateProof(acirComposerPtr: Ptr, constraintSystemBuf: Uint8Array, witnessBuf: Uint8Array): Promise<Uint8Array>;
    acirProveAndVerifyUltraHonk(constraintSystemBuf: Uint8Array, witnessBuf: Uint8Array): Promise<boolean>;
    acirProveAndVerifyMegaHonk(constraintSystemBuf: Uint8Array, witnessBuf: Uint8Array): Promise<boolean>;
    acirFoldAndVerifyProgramStack(constraintSystemBuf: Uint8Array, witnessBuf: Uint8Array): Promise<boolean>;
    acirLoadVerificationKey(acirComposerPtr: Ptr, vkBuf: Uint8Array): Promise<void>;
    acirInitVerificationKey(acirComposerPtr: Ptr): Promise<void>;
    acirGetVerificationKey(acirComposerPtr: Ptr): Promise<Uint8Array>;
    acirGetProvingKey(acirComposerPtr: Ptr, acirVec: Uint8Array): Promise<Uint8Array>;
    acirVerifyProof(acirComposerPtr: Ptr, proofBuf: Uint8Array): Promise<boolean>;
    acirGetSolidityVerifier(acirComposerPtr: Ptr): Promise<string>;
    acirSerializeProofIntoFields(acirComposerPtr: Ptr, proofBuf: Uint8Array, numInnerPublicInputs: number): Promise<Fr[]>;
    acirSerializeVerificationKeyIntoFields(acirComposerPtr: Ptr): Promise<[Fr[], Fr]>;
    acirProveUltraHonk(acirVec: Uint8Array, witnessVec: Uint8Array): Promise<Uint8Array>;
    acirVerifyUltraHonk(proofBuf: Uint8Array, vkBuf: Uint8Array): Promise<boolean>;
    acirWriteVkUltraHonk(acirVec: Uint8Array): Promise<Uint8Array>;
    acirProofAsFieldsUltraHonk(proofBuf: Uint8Array): Promise<Fr[]>;
    acirVkAsFieldsUltraHonk(vkBuf: Uint8Array): Promise<Fr[]>;
}
