/**
 * Emulates Angular2/Aurelia/Polymer-style event listeners.
 *
 * Executes an Angular expression on the given event. Almost completely
 * analogous to `ng-click` and friends. This just adds more events to the list.
 *
 * Example usage:
 *   <custom-selector on-select="self.pick($event.detail)"></custom-selector>
 */

import {app} from '../app';

/**
 * For reference, list of events registered in
 * angularjs/src/ng/directive/ngEventDirs.js at
 * 0fc58516f4e92a46f6d445421c1f04ff9729c549.
 */
`click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter
mouseleave keydown keyup keypress submit focus blur copy cut paste`;

/**
 * Additional events.
 */
`change dragstart drag dragenter dragleave dragover drop dragend
error input load wheel scroll`.split(/\s+/).forEach(eventName => {
  var directiveName = 'on' + eventName[0].toUpperCase() + eventName.slice(1);

  app.directive(directiveName, ['$parse', function($parse: ng.IParseService) {
    return {
      restrict: 'A',
      scope: false,
      compile: function($e, $attrs: ng.IAttributes) {
        // Preparse in compile phase in case of ng-repeat.
        var statement = $parse($attrs[directiveName]);

        // Register event listener in link phase.
        return function postlink(scope: ng.IScope, $element: ng.IAugmentedJQuery) {
          var element: HTMLElement = $element[0];
          element.addEventListener(eventName, event => {
            statement(scope, {$event: event});
            scope.$applyAsync();
          });
        };
      }
    };
  }]);
});
