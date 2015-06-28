System.register([], function() {
  return {
    setters: [],
    execute: function() {
      (function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('word-generator/word-generator.html',
    '<div layout="space-out">\n' +
    '  <!-- Left column: source words -->\n' +
    '  <div flex="1" class="space-out" drop-action="self.pick($data)" drop-type="move">\n' +
    '    <h3 theme="text-primary" layout="space-between">\n' +
    '      <span>Source Words</span>\n' +
    '      <span id="indicator"></span>\n' +
    '    </h3>\n' +
    '    <form ng-submit="self.add()" layout="space-out"\n' +
    '          sf-tooltip="{{self.error}}" sf-trigger="{{!!self.error}}">\n' +
    '      <input flex="11" tabindex="1" ng-model="self.word">\n' +
    '      <button flex="1" theme="primary" tabindex="1">Add</button>\n' +
    '    </form>\n' +
    '    <div ng-repeat="word in self.words" layout="space-between space-out">\n' +
    '      <span flex="11" layout="cross-center" class="pad" style="margin-right: 1rem">{{word}}</span>\n' +
    '      <button flex="1" ng-click="self.remove(word)">✕</button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- Right column: generated results -->\n' +
    '  <div flex="1" class="space-out">\n' +
    '    <h3 theme="text-accent">Generated Words</h3>\n' +
    '    <form ng-submit="self.generate()" layout>\n' +
    '      <button flex="1" theme="accent" tabindex="1">Generate</button>\n' +
    '    </form>\n' +
    '    <div ng-repeat="word in self.results" layout="space-between">\n' +
    '      <button flex="1" ng-click="self.pick(word)">←</button>\n' +
    '      <span flex="11" layout="cross-center" drag-value="word" class="pad interactive"\n' +
    '            style="margin-left: 1rem; cursor: move">{{word}}</span>\n' +
    '    </div>\n' +
    '    <div ng-if="self.depleted" layout="cross-center">\n' +
    '      <span theme="text-warn" class="pad">(depleted)</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<!--\n' +
    'Demonstrating interoperability.\n' +
    '\n' +
    '1) `on-load` executes an Angular expression in the component scope in response\n' +
    '   to a DOM event. This would also work if <ajax> came from another library,\n' +
    '   like Polymer, or was a native element.\n' +
    '\n' +
    '2) `onload` executes a native DOM expression in the global scope. It doesn\'t\n' +
    '   care that <ajax> is an Angular element, and has access to the dispatched data.\n' +
    ' -->\n' +
    '<ajax auto="true" url="self.wordsUrl" ref="self.ajax"\n' +
    '      on-load="self.refresh($event.detail); self.generate()"\n' +
    '      onload="console.log(event.detail);\n' +
    '              indicator.innerText = \'Loaded at: \' + event.timeStamp"></ajax>\n' +
    '\n' +
    '<style>\n' +
    '  .dragover {\n' +
    '    outline: 2px dashed gray;\n' +
    '  }\n' +
    '</style>\n' +
    '');
}]);
})();

    }
  };
});
