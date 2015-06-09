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
