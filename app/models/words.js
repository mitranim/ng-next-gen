var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['ng-decorate'], function(exports_1) {
    var ng_decorate_1;
    var wordsUrl, Words;
    return {
        setters:[
            function (_ng_decorate_1) {
                ng_decorate_1 = _ng_decorate_1;
            }],
        execute: function() {
            exports_1("wordsUrl", wordsUrl = 'https://incandescent-torch-3438.firebaseio.com/foliant/defaults/words/eng.json');
            Words = (function () {
                function Words(fields) {
                    if (fields)
                        for (var key in fields)
                            this[key] = fields[key];
                }
                Words.readAll = function () {
                    return this.$http({
                        url: wordsUrl,
                        method: 'GET'
                    })
                        .then(function (response) { return new Words(response.data); });
                };
                __decorate([
                    ng_decorate_1.autoinject
                ], Words, "$http");
                Words = __decorate([
                    ng_decorate_1.Service({
                        serviceName: 'Words'
                    })
                ], Words);
                return Words;
            })();
            exports_1("Words", Words);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy93b3Jkcy50cyJdLCJuYW1lcyI6WyJXb3JkcyIsIldvcmRzLmNvbnN0cnVjdG9yIiwiV29yZHMucmVhZEFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1FBRWEsUUFBUTs7Ozs7OztZQUFSLHNCQUFBLFFBQVEsR0FBRyxnRkFBZ0YsQ0FBQSxDQUFDO1lBRXpHO2dCQU9FQSxlQUFZQSxNQUFrQkE7b0JBQzVCQyxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQTt3QkFBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsQ0FBQ0E7NEJBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUM5REEsQ0FBQ0E7Z0JBRU1ELGFBQU9BLEdBQWRBO29CQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDaEJBLEdBQUdBLEVBQUVBLFFBQVFBO3dCQUNiQSxNQUFNQSxFQUFFQSxLQUFLQTtxQkFDZEEsQ0FBQ0E7eUJBQ0RBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLElBQUlBLEtBQUtBLENBQVlBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEVBQW5DQSxDQUFtQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pEQSxDQUFDQTtnQkFiREY7b0JBQUNBLHdCQUFVQTttQkFBUUEsY0FBS0EsRUFBa0JBO2dCQUo1Q0E7b0JBQUNBLHFCQUFPQSxDQUFDQTt3QkFDUEEsV0FBV0EsRUFBRUEsT0FBT0E7cUJBQ3JCQSxDQUFDQTswQkFnQkRBO2dCQUFEQSxZQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQWxCRCx5QkFrQkMsQ0FBQSIsImZpbGUiOiJtb2RlbHMvd29yZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcnZpY2UsIGF1dG9pbmplY3R9IGZyb20gJ25nLWRlY29yYXRlJztcblxuZXhwb3J0IGNvbnN0IHdvcmRzVXJsID0gJ2h0dHBzOi8vaW5jYW5kZXNjZW50LXRvcmNoLTM0MzguZmlyZWJhc2Vpby5jb20vZm9saWFudC9kZWZhdWx0cy93b3Jkcy9lbmcuanNvbic7XG5cbkBTZXJ2aWNlKHtcbiAgc2VydmljZU5hbWU6ICdXb3Jkcydcbn0pXG5leHBvcnQgY2xhc3MgV29yZHMge1xuICBAYXV0b2luamVjdCBzdGF0aWMgJGh0dHA6IG5nLklIdHRwU2VydmljZTtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGZpZWxkcz86IFN0cmluZ01hcCkge1xuICAgIGlmIChmaWVsZHMpIGZvciAobGV0IGtleSBpbiBmaWVsZHMpIHRoaXNba2V5XSA9IGZpZWxkc1trZXldO1xuICB9XG5cbiAgc3RhdGljIHJlYWRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAoe1xuICAgICAgdXJsOiB3b3Jkc1VybCxcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IG5ldyBXb3Jkcyg8U3RyaW5nTWFwPnJlc3BvbnNlLmRhdGEpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9