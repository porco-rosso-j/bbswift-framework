import { Fr, Point } from '../types/index.js';
import { NativeModules } from 'react-native';
const { BBSwiftModule } = NativeModules;
export class BarretenbergApi {
    async pedersenCommit(inputsBuffer) {
        console.log('pedersenCommit called');
        console.log('inputsBuffer: ', inputsBuffer);
        const initArgs = inputsBuffer.flatMap(f => Array.from(f.toBuffer()));
        console.log('initArgs: ', initArgs);
        const resultBuffer = await BBSwiftModule.pedersenCommit(initArgs);
        console.log('resultBuffer: ', resultBuffer);
        if (!resultBuffer) {
            throw new Error('pedersenCommit returned null or encountered an error');
        }
        return Point.fromBuffer(resultBuffer);
    }
    async pedersenHash(inputsBuffer, hashIndex) {
        console.log('pedersenHash called');
        console.log('inputsBuffer: ', inputsBuffer);
        const initArgs = inputsBuffer.flatMap(f => Array.from(f.toBuffer()));
        console.log('initArgs: ', initArgs);
        const resultBuffer = await BBSwiftModule.pedersenHash(initArgs, hashIndex);
        console.log('resultBuffer: ', resultBuffer);
        if (!resultBuffer) {
            throw new Error('pedersenHash returned null or encountered an error');
        }
        return Fr.fromBuffer(resultBuffer);
    }
    async poseidon2Hash(inputsBuffer) {
        console.log('poseidon2Hash called');
        console.log('inputsBuffer: ', inputsBuffer);
        const initArgs = inputsBuffer.flatMap(f => Array.from(f.toBuffer()));
        console.log('initArgs: ', initArgs);
        const resultBuffer = await BBSwiftModule.poseidon2Hash(initArgs);
        console.log('resultBuffer: ', resultBuffer);
        if (!resultBuffer) {
            throw new Error('poseidon2Hash returned null or encountered an error');
        }
        return Fr.fromBuffer(resultBuffer);
    }
    async eccGrumpkinMul(pointBuf, scalarBuf) {
        console.log('eccGrumpkinMul called');
        console.log('pointBuf: ', pointBuf);
        console.log('scalarBuf: ', scalarBuf);
        const resultBuffer = await BBSwiftModule.eccGrumpkinMul(Array.from(pointBuf), Array.from(scalarBuf));
        console.log('resultBuffer: ', resultBuffer);
        if (!resultBuffer) {
            throw new Error('eccGrumpkinMul returned null or encountered an error');
        }
        // return Point.fromBuffer(resultBuffer);
        return resultBuffer;
    }
    async eccGrumpkinAdd(pointABuf, pointBBuf) {
        console.log('eccGrumpkinAdd called');
        console.log('pointABuf: ', pointABuf);
        console.log('pointBBuf: ', pointBBuf);
        const resultBuffer = await BBSwiftModule.eccGrumpkinAdd(Array.from(pointABuf), Array.from(pointBBuf));
        console.log('resultBuffer: ', resultBuffer);
        if (!resultBuffer) {
            throw new Error('eccGrumpkinAdd returned null or encountered an error');
        }
        return resultBuffer;
    }
    async pedersenHashes(inputsBuffer, hashIndex) {
        throw new Error('pedersenHashes not supported');
    }
    async pedersenHashBuffer(inputBuffer, hashIndex) {
        throw new Error('pedersenHashBuffer not supported');
    }
    async poseidon2Hashes(inputsBuffer) {
        throw new Error('poseidon2Hashes not supported');
    }
    async poseidon2Permutation(inputsBuffer) {
        throw new Error('poseidon2Permutation not supported');
    }
    async blake2s(data) {
        throw new Error('blake2s not supported');
    }
    async blake2sToField(data) {
        throw new Error('blake2sToField not supported');
    }
    async schnorrComputePublicKey(privateKey) {
        throw new Error('schnorrComputePublicKey not supported');
    }
    async schnorrNegatePublicKey(publicKeyBuffer) {
        throw new Error('schnorrNegatePublicKey not supported');
    }
    async schnorrConstructSignature(message, privateKey) {
        throw new Error('schnorrConstructSignature not supported');
    }
    async schnorrVerifySignature(message, pubKey, sigS, sigE) {
        throw new Error('schnorrVerifySignature not supported');
    }
    async schnorrMultisigCreateMultisigPublicKey(privateKey) {
        throw new Error('schnorrMultisigCreateMultisigPublicKey not supported');
    }
    async schnorrMultisigValidateAndCombineSignerPubkeys(signerPubkeyBuf) {
        throw new Error('schnorrMultisigValidateAndCombineSignerPubkeys not supported');
    }
    async schnorrMultisigConstructSignatureRound1() {
        throw new Error('schnorrMultisigConstructSignatureRound1 not supported');
    }
    async schnorrMultisigConstructSignatureRound2(message, privateKey, signerRoundOnePrivateBuf, signerPubkeysBuf, roundOnePublicBuf) {
        throw new Error('schnorrMultisigConstructSignatureRound2 not supported');
    }
    async schnorrMultisigCombineSignatures(message, signerPubkeysBuf, roundOneBuf, roundTwoBuf) {
        throw new Error('schnorrMultisigCombineSignatures not supported');
    }
    async aesEncryptBufferCbc(input, iv, key, length) {
        throw new Error('aesEncryptBufferCbc not supported');
    }
    async aesDecryptBufferCbc(input, iv, key, length) {
        throw new Error('aesDecryptBufferCbc not supported');
    }
    async srsInitSrs(pointsBuf, numPoints, g2PointBuf) {
        throw new Error('srsInitSrs not supported');
    }
    async srsInitGrumpkinSrs(pointsBuf, numPoints) {
        throw new Error('srsInitGrumpkinSrs not supported');
    }
    async examplesSimpleCreateAndVerifyProof() {
        throw new Error('examplesSimpleCreateAndVerifyProof not supported');
    }
    async testThreads(threads, iterations) {
        throw new Error('testThreads not supported');
    }
    async commonInitSlabAllocator(circuitSize) {
        throw new Error('commonInitSlabAllocator not supported');
    }
    async acirGetCircuitSizes(constraintSystemBuf, honkRecursion) {
        throw new Error('acirGetCircuitSizes not supported');
    }
    async acirNewAcirComposer(sizeHint) {
        throw new Error('acirNewAcirComposer not supported');
    }
    async acirDeleteAcirComposer(acirComposerPtr) {
        throw new Error('acirDeleteAcirComposer not supported');
    }
    async acirCreateCircuit(acirComposerPtr, constraintSystemBuf, sizeHint) {
        throw new Error('acirCreateCircuit not supported');
    }
    async acirInitProvingKey(acirComposerPtr, constraintSystemBuf) {
        throw new Error('acirInitProvingKey not supported');
    }
    async acirCreateProof(acirComposerPtr, constraintSystemBuf, witnessBuf) {
        throw new Error('acirCreateProof not supported');
    }
    async acirProveAndVerifyUltraHonk(constraintSystemBuf, witnessBuf) {
        throw new Error('acirProveAndVerifyUltraHonk not supported');
    }
    async acirProveAndVerifyMegaHonk(constraintSystemBuf, witnessBuf) {
        throw new Error('acirProveAndVerifyMegaHonk not supported');
    }
    async acirFoldAndVerifyProgramStack(constraintSystemBuf, witnessBuf) {
        throw new Error('acirFoldAndVerifyProgramStack not supported');
    }
    async acirLoadVerificationKey(acirComposerPtr, vkBuf) {
        throw new Error('acirLoadVerificationKey not supported');
    }
    async acirInitVerificationKey(acirComposerPtr) {
        throw new Error('acirInitVerificationKey not supported');
    }
    async acirGetVerificationKey(acirComposerPtr) {
        throw new Error('acirGetVerificationKey not supported');
    }
    async acirGetProvingKey(acirComposerPtr, acirVec) {
        throw new Error('acirGetProvingKey not supported');
    }
    async acirVerifyProof(acirComposerPtr, proofBuf) {
        throw new Error('acirVerifyProof not supported');
    }
    async acirGetSolidityVerifier(acirComposerPtr) {
        throw new Error('acirGetSolidityVerifier not supported');
    }
    async acirSerializeProofIntoFields(acirComposerPtr, proofBuf, numInnerPublicInputs) {
        throw new Error('acirSerializeProofIntoFields not supported');
    }
    async acirSerializeVerificationKeyIntoFields(acirComposerPtr) {
        throw new Error('acirSerializeVerificationKeyIntoFields not supported');
    }
    async acirProveUltraHonk(acirVec, witnessVec) {
        throw new Error('acirProveUltraHonk not supported');
    }
    async acirVerifyUltraHonk(proofBuf, vkBuf) {
        throw new Error('acirVerifyUltraHonk not supported');
    }
    async acirWriteVkUltraHonk(acirVec) {
        throw new Error('acirWriteVkUltraHonk not supported');
    }
    async acirProofAsFieldsUltraHonk(proofBuf) {
        throw new Error('acirProofAsFieldsUltraHonk not supported');
    }
    async acirVkAsFieldsUltraHonk(vkBuf) {
        throw new Error('acirVkAsFieldsUltraHonk not supported');
    }
}
//# sourceMappingURL=index.js.map