declare module 'ng-decorate' {
  export function Attribute(config);
  export function Ambient(config);
  export function Component(config);
  export function Service(config);
  export var defaults: {
    module?: ng.IModule;
    moduleName?: string;
    controllerAs: string;
    makeTemplateUrl: (selector: string) => string;
  };
}

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
  export default Traits;
}

declare type StringMap = {[key: string]: string};
