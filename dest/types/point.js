import { Fr } from './index.js';
import { BufferReader } from '../serialize/buffer_reader.js';
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static random() {
        // TODO: This is not a point on the curve!
        return new Point(Fr.random(), Fr.random());
    }
    static fromBuffer(buffer) {
        const reader = BufferReader.asReader(buffer);
        return new this(Fr.fromBuffer(reader), Fr.fromBuffer(reader));
    }
    static fromString(address) {
        return Point.fromBuffer(Buffer.from(address.replace(/^0x/i, ''), 'hex'));
    }
    toBuffer() {
        return Buffer.concat([this.x.toBuffer(), this.y.toBuffer()]);
    }
    toString() {
        return '0x' + this.toBuffer().toString('hex');
    }
    equals(rhs) {
        return this.x.equals(rhs.x) && this.y.equals(rhs.y);
    }
}
Point.SIZE_IN_BYTES = 64;
Point.EMPTY = new Point(Fr.ZERO, Fr.ZERO);
//# sourceMappingURL=point.js.map