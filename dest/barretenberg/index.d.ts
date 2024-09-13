import { BarretenbergApiSync } from '../barretenberg_api/index.js';
export type BackendOptions = {
    threads?: number;
    memory?: {
        initial?: number;
        maximum?: number;
    };
};
export declare class BarretenbergSync extends BarretenbergApiSync {
    static new(): Promise<BarretenbergSync>;
    static initSingleton(): void;
    static getSingleton(): Promise<BarretenbergSync>;
}
