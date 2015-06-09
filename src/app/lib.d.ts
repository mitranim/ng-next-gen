declare module 'ng-decorate' {
  export function Attribute(config: any): any;
  export function Ambient(config: any): any;
  export function Component(config: any): any;
  export function Service(config: any): any;

  export function autoinject(target: any, key: string): void;
  export function bindTwoWay(settings: any): any;
  export function bindOneWay(key?: string): any;
  export function bindString(key?: string): any;
  export function bindExpression(key?: string): any;

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
