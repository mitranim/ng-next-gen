System.register([], function (_export) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      (function (module) {
        try {
          module = angular.module('app');
        } catch (e) {
          module = angular.module('app', []);
        }
        module.run(['$templateCache', function ($templateCache) {
          $templateCache.put('word-generator/word-generator.html', '<div class="flex pad-ch">\n' + '  <!-- Left column: source words -->\n' + '  <div class="flex-1 space-out-v" drop-action="self.pick($data)" drop-type="move">\n' + '    <h3 class="info pad flex justify-between">\n' + '      <span>Source Words</span>\n' + '      <span id="indicator"></span>\n' + '    </h3>\n' + '    <form ng-submit="self.add()" class="flex flex-row pad-ch"\n' + '          sf-tooltip="{{self.error}}" sf-trigger="{{!!self.error}}">\n' + '      <input class="sf-input flex-11" tabindex="1" ng-model="self.word">\n' + '      <button class="sf-btn flex-1 success" tabindex="1">Add</button>\n' + '    </form>\n' + '    <div ng-repeat="word in self.words" class="flex justify-between pad-ch">\n' + '      <span class="flex-11 info pad" style="margin-right: 1rem">{{word}}</span>\n' + '      <button class="sf-btn flex-1" ng-click="self.remove(word)">✕</button>\n' + '    </div>\n' + '  </div>\n' + '\n' + '  <!-- Right column: generated results -->\n' + '  <div class="flex-1 space-out-v">\n' + '    <h3 class="success pad">Generated Words</h3>\n' + '    <form ng-submit="self.generate()" class="flex flex-row">\n' + '      <button class="sf-btn pad success flex-1" tabindex="1">Generate</button>\n' + '    </form>\n' + '    <div ng-repeat="word in self.results" class="flex justify-between pad-ch">\n' + '      <button class="sf-btn flex-1" ng-click="self.pick(word)">←</button>\n' + '      <span drag-value="word" class="flex-11 success interactive"\n' + '            style="margin-left: 1rem; cursor: move">{{word}}</span>\n' + '    </div>\n' + '    <div ng-if="self.depleted" class="flex justify-between">\n' + '      <span class="error pad">(depleted)</span>\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '\n' + '<!--\n' + 'Demonstrating interoperability.\n' + '\n' + '1) `on-load` executes an Angular expression in the component scope in response\n' + '   to a DOM event. This would also work if <ajax> came from another library,\n' + '   like Polymer, or was a native element.\n' + '\n' + '2) `onload` executes a native DOM expression in the global scope. It doesn\'t\n' + '   care that <ajax> is an Angular element, and has access to the dispatched data.\n' + ' -->\n' + '<ajax auto="true" url="self.wordsUrl" ref="self.ajax"\n' + '      on-load="self.refresh($event.detail); self.generate()"\n' + '      onload="console.log(event.detail);\n' + '              indicator.innerText = \'Loaded at: \' + event.timeStamp"></ajax>\n' + '\n' + '<style>\n' + '  .dragover {\n' + '    outline: 2px dashed gray;\n' + '  }\n' + '</style>\n' + '');
        }]);
      })();
    }
  };
});