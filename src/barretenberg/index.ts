import { BarretenbergApiSync } from '../barretenberg_api/index.js';
export type BackendOptions = {
  threads?: number,
  memory?: { initial?: number, maximum?: number }
};

export class BarretenbergSync extends BarretenbergApiSync {
  static async new() {
    return new BarretenbergSync();
  }

  static initSingleton() {
    console.log('initSingleton called');
  }

  static getSingleton() {
    return BarretenbergSync.new();
  }
}
