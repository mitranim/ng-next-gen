declare function require(...args: any[]): any;

declare module 'foliant' {
  class StringSet {
    constructor(strings?: string[]);
    add(string: string): void;
    del(string: string): void;
    has(string: string): boolean;
  }
  class Traits {
    constructor(words?: string[]);
    static StringSet: typeof StringSet;
    examine(words: string[]): void;
    generator(): () => string;
    knownSounds: StringSet;
    knownVowels: StringSet;
  }
  export = Traits;
}
