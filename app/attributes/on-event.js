/**
 * Emulates Angular2/Aurelia/Polymer-style event listeners.
 *
 * Executes an Angular expression on the given event. Almost completely
 * analogous to `ng-click` and friends. This just adds more events to the list.
 *
 * Example usage:
 *   <custom-selector on-select="self.pick($event.detail)"></custom-selector>
 */
System.register(['app'], function(exports_1) {
    var app_1;
    return {
        setters:[
            function (_app_1) {
                app_1 = _app_1;
            }],
        execute: function() {
            /**
             * For reference, list of events registered in
             * angularjs/src/ng/directive/ngEventDirs.js at
             * 0fc58516f4e92a46f6d445421c1f04ff9729c549.
             */
            "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter\nmouseleave keydown keyup keypress submit focus blur copy cut paste";
            /**
             * Additional events.
             */
            "change dragstart drag dragenter dragleave dragover drop dragend\nerror input load wheel scroll".split(/\s+/).forEach(function (eventName) {
                var directiveName = 'on' + eventName[0].toUpperCase() + eventName.slice(1);
                app_1.app.directive(directiveName, ['$parse', function ($parse) {
                        return {
                            restrict: 'A',
                            scope: false,
                            compile: function ($e, $attrs) {
                                // Preparse in compile phase in case of ng-repeat.
                                var statement = $parse($attrs[directiveName]);
                                // Register event listener in link phase.
                                return function postlink(scope, $element) {
                                    var element = $element[0];
                                    element.addEventListener(eventName, function (event) {
                                        statement(scope, { $event: event });
                                        scope.$applyAsync();
                                    });
                                };
                            }
                        };
                    }]);
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvb24tZXZlbnQudHMiXSwibmFtZXMiOlsicG9zdGxpbmsiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7WUFJSCxBQUtBOzs7O2VBREc7WUFDSCw4SUFDbUUsQ0FBQztZQUVwRSxBQUdBOztlQURHO1lBQ0gsZ0dBQzhCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7Z0JBQzNELElBQUksYUFBYSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFM0UsU0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBUyxNQUF3Qjt3QkFDdkUsTUFBTSxDQUFDOzRCQUNMLFFBQVEsRUFBRSxHQUFHOzRCQUNiLEtBQUssRUFBRSxLQUFLOzRCQUNaLE9BQU8sRUFBRSxVQUFTLEVBQUUsRUFBRSxNQUFzQjtnQ0FDMUMsQUFDQSxrREFEa0Q7b0NBQzlDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0NBRTlDLEFBQ0EseUNBRHlDO2dDQUN6QyxNQUFNLENBQUMsa0JBQWtCLEtBQWdCLEVBQUUsUUFBNkI7b0NBQ3RFQSxJQUFJQSxPQUFPQSxHQUFnQkEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQ3ZDQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFNBQVNBLEVBQUVBLFVBQUFBLEtBQUtBO3dDQUN2Q0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBQ0EsTUFBTUEsRUFBRUEsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7d0NBQ2xDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtvQ0FDdEJBLENBQUNBLENBQUNBLENBQUNBO2dDQUNMQSxDQUFDQSxDQUFDOzRCQUNKLENBQUM7eUJBQ0YsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXR0cmlidXRlcy9vbi1ldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRW11bGF0ZXMgQW5ndWxhcjIvQXVyZWxpYS9Qb2x5bWVyLXN0eWxlIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBFeGVjdXRlcyBhbiBBbmd1bGFyIGV4cHJlc3Npb24gb24gdGhlIGdpdmVuIGV2ZW50LiBBbG1vc3QgY29tcGxldGVseVxuICogYW5hbG9nb3VzIHRvIGBuZy1jbGlja2AgYW5kIGZyaWVuZHMuIFRoaXMganVzdCBhZGRzIG1vcmUgZXZlbnRzIHRvIHRoZSBsaXN0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgIDxjdXN0b20tc2VsZWN0b3Igb24tc2VsZWN0PVwic2VsZi5waWNrKCRldmVudC5kZXRhaWwpXCI+PC9jdXN0b20tc2VsZWN0b3I+XG4gKi9cblxuaW1wb3J0IHthcHB9IGZyb20gJ2FwcCc7XG5cbi8qKlxuICogRm9yIHJlZmVyZW5jZSwgbGlzdCBvZiBldmVudHMgcmVnaXN0ZXJlZCBpblxuICogYW5ndWxhcmpzL3NyYy9uZy9kaXJlY3RpdmUvbmdFdmVudERpcnMuanMgYXRcbiAqIDBmYzU4NTE2ZjRlOTJhNDZmNmQ0NDU0MjFjMWYwNGZmOTcyOWM1NDkuXG4gKi9cbmBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIG1vdXNlZW50ZXJcbm1vdXNlbGVhdmUga2V5ZG93biBrZXl1cCBrZXlwcmVzcyBzdWJtaXQgZm9jdXMgYmx1ciBjb3B5IGN1dCBwYXN0ZWA7XG5cbi8qKlxuICogQWRkaXRpb25hbCBldmVudHMuXG4gKi9cbmBjaGFuZ2UgZHJhZ3N0YXJ0IGRyYWcgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcmFnb3ZlciBkcm9wIGRyYWdlbmRcbmVycm9yIGlucHV0IGxvYWQgd2hlZWwgc2Nyb2xsYC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgdmFyIGRpcmVjdGl2ZU5hbWUgPSAnb24nICsgZXZlbnROYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBldmVudE5hbWUuc2xpY2UoMSk7XG5cbiAgYXBwLmRpcmVjdGl2ZShkaXJlY3RpdmVOYW1lLCBbJyRwYXJzZScsIGZ1bmN0aW9uKCRwYXJzZTogbmcuSVBhcnNlU2VydmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IGZhbHNlLFxuICAgICAgY29tcGlsZTogZnVuY3Rpb24oJGUsICRhdHRyczogbmcuSUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgLy8gUHJlcGFyc2UgaW4gY29tcGlsZSBwaGFzZSBpbiBjYXNlIG9mIG5nLXJlcGVhdC5cbiAgICAgICAgdmFyIHN0YXRlbWVudCA9ICRwYXJzZSgkYXR0cnNbZGlyZWN0aXZlTmFtZV0pO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIGluIGxpbmsgcGhhc2UuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0bGluayhzY29wZTogbmcuSVNjb3BlLCAkZWxlbWVudDogbmcuSUF1Z21lbnRlZEpRdWVyeSkge1xuICAgICAgICAgIHZhciBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICRlbGVtZW50WzBdO1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN0YXRlbWVudChzY29wZSwgeyRldmVudDogZXZlbnR9KTtcbiAgICAgICAgICAgIHNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=