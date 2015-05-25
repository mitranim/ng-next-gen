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
                Words = __decorate([
                    ng_decorate_1.Service({
                        injectStatic: ['$http'],
                        serviceName: 'Words'
                    })
                ], Words);
                return Words;
            })();
            exports_1("Words", Words);
        }
    }
});
