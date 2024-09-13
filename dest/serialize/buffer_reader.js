export class BufferReader {
    constructor(buffer, offset = 0) {
        this.buffer = buffer;
        this.index = offset;
    }
    static asReader(bufferOrReader) {
        return bufferOrReader instanceof BufferReader ? bufferOrReader : new BufferReader(bufferOrReader);
    }
    readNumber() {
        const dataView = new DataView(this.buffer.buffer, this.buffer.byteOffset + this.index, 4);
        this.index += 4;
        return dataView.getUint32(0, false);
    }
    readBoolean() {
        this.index += 1;
        return Boolean(this.buffer.at(this.index - 1));
    }
    readBytes(n) {
        this.index += n;
        return this.buffer.slice(this.index - n, this.index);
    }
    readNumberVector() {
        return this.readVector({
            fromBuffer: (reader) => reader.readNumber(),
        });
    }
    readVector(itemDeserializer) {
        const size = this.readNumber();
        const result = new Array(size);
        for (let i = 0; i < size; i++) {
            result[i] = itemDeserializer.fromBuffer(this);
        }
        return result;
    }
    readArray(size, itemDeserializer) {
        const result = new Array(size);
        for (let i = 0; i < size; i++) {
            result[i] = itemDeserializer.fromBuffer(this);
        }
        return result;
    }
    readObject(deserializer) {
        return deserializer.fromBuffer(this);
    }
    peekBytes(n) {
        return this.buffer.subarray(this.index, n ? this.index + n : undefined);
    }
    readString() {
        return new TextDecoder().decode(this.readBuffer());
    }
    readBuffer() {
        const size = this.readNumber();
        return this.readBytes(size);
    }
    readMap(deserializer) {
        const numEntries = this.readNumber();
        const map = {};
        for (let i = 0; i < numEntries; i++) {
            const key = this.readString();
            const value = this.readObject(deserializer);
            map[key] = value;
        }
        return map;
    }
}
//# sourceMappingURL=buffer_reader.js.map