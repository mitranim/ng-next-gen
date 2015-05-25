System.register(['app', 'views', 'attributes/all', 'models/all', 'ajax/ajax', 'word-generator/word-generator'], function(exports_1) {
    var app_1;
    return {
        setters:[
            function (_app_1) {
                app_1 = _app_1;
            },
            function (_) {},
            function (_) {},
            function (_) {},
            function (_) {},
            function (_) {}],
        execute: function() {
            // Bootstrap the app.
            angular.element(document).ready(function () {
                angular.bootstrap(document.body, [app_1.app.name], {
                    strictDi: true
                });
            });
        }
    }
});
