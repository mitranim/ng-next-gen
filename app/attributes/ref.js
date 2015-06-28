var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['ng-decorate'], function(exports_1) {
    var ng_decorate_1;
    var VM;
    return {
        setters:[
            function (_ng_decorate_1) {
                ng_decorate_1 = _ng_decorate_1;
            }],
        execute: function() {
            /**
             * Looks for a component controller on the given element and assigns it to
             * the current scope on the given path.
             *
             * Example:
             *   <my-inner-element ref="self.inner"></my-inner-element>
             *   <my-loading-indicator ng-if="self.inner.loading"></my-loading-indicator>
             */
            VM = (function () {
                function VM() {
                }
                VM.link = function (scope, $element) {
                    var element = $element[0];
                    var path = VM.$parse(element.getAttribute('ref'));
                    // Find the component's controller, if any.
                    var isolatedScope = $element.isolateScope();
                    if (!isolatedScope)
                        return;
                    var ctrl = isolatedScope[ng_decorate_1.defaults.controllerAs];
                    if (!ctrl)
                        return;
                    // Assign it to given path.
                    path.assign(scope, ctrl);
                };
                __decorate([
                    ng_decorate_1.autoinject
                ], VM, "$parse");
                VM = __decorate([
                    ng_decorate_1.Attribute({
                        selector: '[ref]'
                    })
                ], VM);
                return VM;
            })();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVmLnRzIl0sIm5hbWVzIjpbIlZNIiwiVk0uY29uc3RydWN0b3IiLCJWTS5saW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBRUEsQUFRQTs7Ozs7OztlQURHOztnQkFDSEE7Z0JBbUJBQyxDQUFDQTtnQkFiUUQsT0FBSUEsR0FBWEEsVUFBWUEsS0FBZ0JBLEVBQUVBLFFBQTZCQTtvQkFDekRFLElBQUlBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMxQkEsSUFBSUEsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRWxEQSxBQUNBQSwyQ0FEMkNBO3dCQUN2Q0EsYUFBYUEsR0FBR0EsUUFBUUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7b0JBQzVDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTt3QkFBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzNCQSxJQUFJQSxJQUFJQSxHQUFHQSxhQUFhQSxDQUFDQSxzQkFBUUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFBQ0EsTUFBTUEsQ0FBQ0E7b0JBRWxCQSxBQUNBQSwyQkFEMkJBO29CQUMzQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFkREY7b0JBQUNBLHdCQUFVQTttQkFBUUEsWUFBTUEsRUFBbUJBO2dCQUo5Q0E7b0JBQUNBLHVCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7cUJBQ2xCQSxDQUFDQTt1QkFpQkRBO2dCQUFEQSxTQUFDQTtZQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQSIsImZpbGUiOiJhdHRyaWJ1dGVzL3JlZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlLCBkZWZhdWx0cywgYXV0b2luamVjdH0gZnJvbSAnbmctZGVjb3JhdGUnO1xuXG4vKipcbiAqIExvb2tzIGZvciBhIGNvbXBvbmVudCBjb250cm9sbGVyIG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBhc3NpZ25zIGl0IHRvXG4gKiB0aGUgY3VycmVudCBzY29wZSBvbiB0aGUgZ2l2ZW4gcGF0aC5cbiAqXG4gKiBFeGFtcGxlOlxuICogICA8bXktaW5uZXItZWxlbWVudCByZWY9XCJzZWxmLmlubmVyXCI+PC9teS1pbm5lci1lbGVtZW50PlxuICogICA8bXktbG9hZGluZy1pbmRpY2F0b3IgbmctaWY9XCJzZWxmLmlubmVyLmxvYWRpbmdcIj48L215LWxvYWRpbmctaW5kaWNhdG9yPlxuICovXG5AQXR0cmlidXRlKHtcbiAgc2VsZWN0b3I6ICdbcmVmXSdcbn0pXG5jbGFzcyBWTSB7XG4gIEBhdXRvaW5qZWN0IHN0YXRpYyAkcGFyc2U6IG5nLklQYXJzZVNlcnZpY2U7XG5cbiAgc3RhdGljIGxpbmsoc2NvcGU6IG5nLklTY29wZSwgJGVsZW1lbnQ6IG5nLklBdWdtZW50ZWRKUXVlcnkpIHtcbiAgICB2YXIgZWxlbWVudCA9ICRlbGVtZW50WzBdO1xuICAgIHZhciBwYXRoID0gVk0uJHBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWYnKSk7XG5cbiAgICAvLyBGaW5kIHRoZSBjb21wb25lbnQncyBjb250cm9sbGVyLCBpZiBhbnkuXG4gICAgdmFyIGlzb2xhdGVkU2NvcGUgPSAkZWxlbWVudC5pc29sYXRlU2NvcGUoKTtcbiAgICBpZiAoIWlzb2xhdGVkU2NvcGUpIHJldHVybjtcbiAgICB2YXIgY3RybCA9IGlzb2xhdGVkU2NvcGVbZGVmYXVsdHMuY29udHJvbGxlckFzXTtcbiAgICBpZiAoIWN0cmwpIHJldHVybjtcblxuICAgIC8vIEFzc2lnbiBpdCB0byBnaXZlbiBwYXRoLlxuICAgIHBhdGguYXNzaWduKHNjb3BlLCBjdHJsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9