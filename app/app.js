System.register(['angular', 'ng-decorate'], function(exports_1) {
    var ng_decorate_1;
    var app;
    return {
        setters:[
            function (_) {},
            function (_ng_decorate_1) {
                ng_decorate_1 = _ng_decorate_1;
            }],
        execute: function() {
            // Our one and only angular module.
            exports_1("app", app = angular.module('app', ['ng']));
            // Use this module in all directive and service declarations.
            ng_decorate_1.defaults.module = app;
        }
    }
});
