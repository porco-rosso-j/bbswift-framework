import { BarretenbergApi } from '../barretenberg_api/index.js';
export type BackendOptions = {
  threads?: number,
  memory?: { initial?: number, maximum?: number }
};

export class BarretenbergSync {
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

export class Barretenberg extends BarretenbergApi {
  static new() {
    return new Barretenberg();
  }
}
