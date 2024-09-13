import { BufferReader } from '../serialize/index.js';
/**
 * Holds an opaque pointer into WASM memory.
 * Currently only 4 bytes, but could grow to 8 bytes with wasm64.
 */
export class Ptr {
    constructor(value) {
        this.value = value;
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new this(reader.readBytes(this.SIZE_IN_BYTES));
    }
    toBuffer() {
        return this.value;
    }
}
Ptr.SIZE_IN_BYTES = 4;
//# sourceMappingURL=ptr.js.map