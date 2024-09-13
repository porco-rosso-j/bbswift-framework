import { BufferReader } from './buffer_reader.js';
export function BoolDeserializer() {
    return {
        SIZE_IN_BYTES: 1,
        fromBuffer: (buf) => {
            const reader = BufferReader.asReader(buf);
            return reader.readBoolean();
        },
    };
}
export function NumberDeserializer() {
    return {
        SIZE_IN_BYTES: 4,
        fromBuffer: (buf) => {
            const reader = BufferReader.asReader(buf);
            return reader.readNumber();
        },
    };
}
export function VectorDeserializer(t) {
    return {
        fromBuffer: (buf) => {
            const reader = BufferReader.asReader(buf);
            return reader.readVector(t);
        },
    };
}
export function BufferDeserializer() {
    return {
        fromBuffer: (buf) => {
            const reader = BufferReader.asReader(buf);
            return reader.readBuffer();
        },
    };
}
export function StringDeserializer() {
    return {
        fromBuffer: (buf) => {
            const reader = BufferReader.asReader(buf);
            return reader.readString();
        },
    };
}
//# sourceMappingURL=output_type.js.map