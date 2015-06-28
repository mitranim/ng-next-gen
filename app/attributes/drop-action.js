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
                    var statement = VM.$parse(element.getAttribute('drop-action'));
                    element.addEventListener('dragover', function (event) {
                        event.preventDefault();
                        element.classList.add('dragover');
                    });
                    element.addEventListener('dragleave', function () {
                        element.classList.remove('dragover');
                    });
                    element.addEventListener('drop', function (event) {
                        element.classList.remove('dragover');
                        statement(scope, {
                            $event: event,
                            $data: event.dataTransfer.getData('any')
                        });
                        scope.$applyAsync();
                    });
                };
                __decorate([
                    ng_decorate_1.autoinject
                ], VM, "$parse");
                VM = __decorate([
                    ng_decorate_1.Attribute({
                        selector: '[drop-action]'
                    })
                ], VM);
                return VM;
            })();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvZHJvcC1hY3Rpb24udHMiXSwibmFtZXMiOlsiVk0iLCJWTS5jb25zdHJ1Y3RvciIsIlZNLmxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7Z0JBNkJBQyxDQUFDQTtnQkF2QlFELE9BQUlBLEdBQVhBLFVBQVlBLEtBQWdCQSxFQUFFQSxRQUE2QkE7b0JBQ3pERSxJQUFJQSxPQUFPQSxHQUFnQkEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXZDQSxJQUFJQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFL0RBLE9BQU9BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsVUFBQUEsS0FBS0E7d0JBQ3hDQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTt3QkFDdkJBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUNwQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLE9BQU9BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsV0FBV0EsRUFBRUE7d0JBQ3BDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDdkNBLENBQUNBLENBQUNBLENBQUNBO29CQUVIQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLFVBQUNBLEtBQWdCQTt3QkFDaERBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO3dCQUNyQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUE7NEJBQ2ZBLE1BQU1BLEVBQUVBLEtBQUtBOzRCQUNiQSxLQUFLQSxFQUFFQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTt5QkFDekNBLENBQUNBLENBQUNBO3dCQUNIQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtvQkFDdEJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkF4QkRGO29CQUFDQSx3QkFBVUE7bUJBQVFBLFlBQU1BLEVBQW1CQTtnQkFKOUNBO29CQUFDQSx1QkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUMxQkEsQ0FBQ0E7dUJBMkJEQTtnQkFBREEsU0FBQ0E7WUFBREEsQ0E3QkEsQUE2QkNBLElBQUEiLCJmaWxlIjoiYXR0cmlidXRlcy9kcm9wLWFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlLCBhdXRvaW5qZWN0fSBmcm9tICduZy1kZWNvcmF0ZSc7XG5cbkBBdHRyaWJ1dGUoe1xuICBzZWxlY3RvcjogJ1tkcm9wLWFjdGlvbl0nXG59KVxuY2xhc3MgVk0ge1xuICBAYXV0b2luamVjdCBzdGF0aWMgJHBhcnNlOiBuZy5JUGFyc2VTZXJ2aWNlO1xuXG4gIHN0YXRpYyBsaW5rKHNjb3BlOiBuZy5JU2NvcGUsICRlbGVtZW50OiBuZy5JQXVnbWVudGVkSlF1ZXJ5KSB7XG4gICAgdmFyIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gJGVsZW1lbnRbMF07XG5cbiAgICB2YXIgc3RhdGVtZW50ID0gVk0uJHBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkcm9wLWFjdGlvbicpKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnb3ZlcicpO1xuICAgIH0pO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdvdmVyJyk7XG4gICAgfSk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnb3ZlcicpO1xuICAgICAgc3RhdGVtZW50KHNjb3BlLCB7XG4gICAgICAgICRldmVudDogZXZlbnQsXG4gICAgICAgICRkYXRhOiBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnYW55JylcbiAgICAgIH0pO1xuICAgICAgc2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9