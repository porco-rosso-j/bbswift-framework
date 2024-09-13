import { randomBytes } from '../random/index.js';
import { BufferReader } from '../serialize/index.js';
export class Buffer32 {
    constructor(buffer) {
        this.buffer = buffer;
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new Buffer32(reader.readBytes(this.SIZE_IN_BYTES));
    }
    static random() {
        return new Buffer32(randomBytes(this.SIZE_IN_BYTES));
    }
    toBuffer() {
        return this.buffer;
    }
}
Buffer32.SIZE_IN_BYTES = 32;
export class Buffer64 {
    constructor(buffer) {
        this.buffer = buffer;
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new Buffer64(reader.readBytes(this.SIZE_IN_BYTES));
    }
    static random() {
        return new Buffer64(randomBytes(this.SIZE_IN_BYTES));
    }
    toBuffer() {
        return this.buffer;
    }
}
Buffer64.SIZE_IN_BYTES = 64;
export class Buffer128 {
    constructor(buffer) {
        this.buffer = buffer;
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new Buffer128(reader.readBytes(this.SIZE_IN_BYTES));
    }
    static random() {
        return new Buffer128(randomBytes(this.SIZE_IN_BYTES));
    }
    toBuffer() {
        return this.buffer;
    }
}
Buffer128.SIZE_IN_BYTES = 128;
//# sourceMappingURL=fixed_size_buffer.js.map