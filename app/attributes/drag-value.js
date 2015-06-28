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
                __decorate([
                    ng_decorate_1.autoinject
                ], VM, "$parse");
                VM = __decorate([
                    ng_decorate_1.Attribute({
                        selector: '[drag-value]'
                    })
                ], VM);
                return VM;
            })();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvZHJhZy12YWx1ZS50cyJdLCJuYW1lcyI6WyJWTSIsIlZNLmNvbnN0cnVjdG9yIiwiVk0ubGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtnQkFnQkFDLENBQUNBO2dCQVZRRCxPQUFJQSxHQUFYQSxVQUFZQSxLQUFnQkEsRUFBRUEsUUFBNkJBO29CQUN6REUsSUFBSUEsT0FBT0EsR0FBZ0JBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUV2Q0EsT0FBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBRXpCQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFdBQVdBLEVBQUVBLFVBQUNBLEtBQWdCQTt3QkFDckRBLElBQUlBLFVBQVVBLEdBQUdBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO3dCQUMvREEsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBQ0EsTUFBTUEsRUFBRUEsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBWERGO29CQUFDQSx3QkFBVUE7bUJBQVFBLFlBQU1BLEVBQW1CQTtnQkFKOUNBO29CQUFDQSx1QkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO3FCQUN6QkEsQ0FBQ0E7dUJBY0RBO2dCQUFEQSxTQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQSIsImZpbGUiOiJhdHRyaWJ1dGVzL2RyYWctdmFsdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgYXV0b2luamVjdH0gZnJvbSAnbmctZGVjb3JhdGUnO1xuXG5AQXR0cmlidXRlKHtcbiAgc2VsZWN0b3I6ICdbZHJhZy12YWx1ZV0nXG59KVxuY2xhc3MgVk0ge1xuICBAYXV0b2luamVjdCBzdGF0aWMgJHBhcnNlOiBuZy5JUGFyc2VTZXJ2aWNlO1xuXG4gIHN0YXRpYyBsaW5rKHNjb3BlOiBuZy5JU2NvcGUsICRlbGVtZW50OiBuZy5JQXVnbWVudGVkSlF1ZXJ5KSB7XG4gICAgdmFyIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gJGVsZW1lbnRbMF07XG5cbiAgICBlbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICB2YXIgZXhwcmVzc2lvbiA9IFZNLiRwYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZHJhZy12YWx1ZScpKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdhbnknLCBleHByZXNzaW9uKHNjb3BlLCB7JGV2ZW50OiBldmVudH0pKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9