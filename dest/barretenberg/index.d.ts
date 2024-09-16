import { BarretenbergApi } from '../barretenberg_api/index.js';
export type BackendOptions = {
    threads?: number;
    memory?: {
        initial?: number;
        maximum?: number;
    };
};
export declare class BarretenbergSync {
    static new(): Promise<BarretenbergSync>;
    static initSingleton(): void;
    static getSingleton(): Promise<BarretenbergSync>;
}
export declare class Barretenberg extends BarretenbergApi {
    static new(): Barretenberg;
}
