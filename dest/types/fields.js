var _a, _b;
import { randomBytes } from '../random/index.js';
import { toBigIntBE, toBufferBE } from '../bigint-array/index.js';
import { BufferReader, uint8ArrayToHexString } from '../serialize/index.js';
// TODO(#4189): Replace with implementation in yarn-project/foundation/src/fields/fields.ts
export class Fr {
    constructor(value) {
        // We convert buffer value to bigint to be able to check it fits within modulus
        const valueBigInt = typeof value === 'bigint' ? value : toBigIntBE(value);
        if (valueBigInt > _a.MAX_VALUE) {
            throw new Error(`Value 0x${valueBigInt.toString(16)} is greater or equal to field modulus.`);
        }
        this.value = typeof value === 'bigint' ? toBufferBE(value) : value;
    }
    static random() {
        const r = toBigIntBE(randomBytes(64)) % _a.MODULUS;
        return new this(r);
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new this(reader.readBytes(this.SIZE_IN_BYTES));
    }
    static fromBufferReduce(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new this(toBigIntBE(reader.readBytes(this.SIZE_IN_BYTES)) % _a.MODULUS);
    }
    static fromString(str) {
        return this.fromBuffer(Buffer.from(str.replace(/^0x/i, ''), 'hex'));
    }
    toBuffer() {
        return this.value;
    }
    toString() {
        return '0x' + uint8ArrayToHexString(this.toBuffer());
    }
    equals(rhs) {
        return this.value.every((v, i) => v === rhs.value[i]);
    }
    isZero() {
        return this.value.every(v => v === 0);
    }
}
_a = Fr;
Fr.ZERO = new _a(0n);
Fr.MODULUS = 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001n;
Fr.MAX_VALUE = _a.MODULUS - 1n;
Fr.SIZE_IN_BYTES = 32;
export class Fq {
    constructor(value) {
        this.value = value;
        if (value > _b.MAX_VALUE) {
            throw new Error(`Fq out of range ${value}.`);
        }
    }
    static random() {
        const r = toBigIntBE(randomBytes(64)) % _b.MODULUS;
        return new this(r);
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new this(toBigIntBE(reader.readBytes(this.SIZE_IN_BYTES)));
    }
    static fromBufferReduce(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new this(toBigIntBE(reader.readBytes(this.SIZE_IN_BYTES)) % Fr.MODULUS);
    }
    static fromString(str) {
        return this.fromBuffer(Buffer.from(str.replace(/^0x/i, ''), 'hex'));
    }
    toBuffer() {
        return toBufferBE(this.value, _b.SIZE_IN_BYTES);
    }
    toString() {
        return '0x' + this.value.toString(16);
    }
    equals(rhs) {
        return this.value === rhs.value;
    }
    isZero() {
        return this.value === 0n;
    }
}
_b = Fq;
Fq.MODULUS = 0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47n;
Fq.MAX_VALUE = _b.MODULUS - 1n;
Fq.SIZE_IN_BYTES = 32;
//# sourceMappingURL=fields.js.map