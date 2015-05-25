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
            VM = (function () {
                function VM() {
                }
                VM.link = function (scope, $element) {
                    var element = $element[0];
                    element.draggable = true;
                    element.addEventListener('dragstart', function (event) {
                        var expression = VM.$parse(element.getAttribute('drag-value'));
                        event.dataTransfer.setData('any', expression(scope, { $event: event }));
                    });
                };
                VM = __decorate([
                    ng_decorate_1.Attribute({
                        selector: '[drag-value]',
                        injectStatic: ['$parse']
                    })
                ], VM);
                return VM;
            })();
        }
    }
});
