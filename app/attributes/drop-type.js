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
                VM.link = function (s, $element) {
                    var element = $element[0];
                    var type = element.getAttribute('drop-type');
                    element.addEventListener('dragover', function (event) {
                        event.dataTransfer.dropEffect = type;
                    });
                };
                VM = __decorate([
                    ng_decorate_1.Attribute({
                        selector: '[drop-type]'
                    })
                ], VM);
                return VM;
            })();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvZHJvcC10eXBlLnRzIl0sIm5hbWVzIjpbIlZNIiwiVk0uY29uc3RydWN0b3IiLCJWTS5saW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO2dCQVlBQyxDQUFDQTtnQkFSUUQsT0FBSUEsR0FBWEEsVUFBWUEsQ0FBQ0EsRUFBRUEsUUFBNkJBO29CQUMxQ0UsSUFBSUEsT0FBT0EsR0FBZ0JBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN2Q0EsSUFBSUEsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7b0JBRTdDQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLEVBQUVBLFVBQUNBLEtBQWdCQTt3QkFDcERBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBO29CQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQVhIRjtvQkFBQ0EsdUJBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxhQUFhQTtxQkFDeEJBLENBQUNBO3VCQVVEQTtnQkFBREEsU0FBQ0E7WUFBREEsQ0FaQSxBQVlDQSxJQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZXMvZHJvcC10eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGV9IGZyb20gJ25nLWRlY29yYXRlJztcblxuQEF0dHJpYnV0ZSh7XG4gIHNlbGVjdG9yOiAnW2Ryb3AtdHlwZV0nXG59KVxuY2xhc3MgVk0ge1xuICBzdGF0aWMgbGluayhzLCAkZWxlbWVudDogbmcuSUF1Z21lbnRlZEpRdWVyeSkge1xuICAgIHZhciBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICRlbGVtZW50WzBdO1xuICAgIHZhciB0eXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Ryb3AtdHlwZScpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHR5cGU7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==