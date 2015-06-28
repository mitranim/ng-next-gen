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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUlXLEdBQUc7Ozs7Ozs7O1lBRGQsQUFDQSxtQ0FEbUM7WUFDeEIsaUJBQUEsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBRS9DLEFBQ0EsNkRBRDZEO1lBQzdELHNCQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FuZ3VsYXInO1xuaW1wb3J0IHtkZWZhdWx0c30gZnJvbSAnbmctZGVjb3JhdGUnO1xuXG4vLyBPdXIgb25lIGFuZCBvbmx5IGFuZ3VsYXIgbW9kdWxlLlxuZXhwb3J0IHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZyddKTtcblxuLy8gVXNlIHRoaXMgbW9kdWxlIGluIGFsbCBkaXJlY3RpdmUgYW5kIHNlcnZpY2UgZGVjbGFyYXRpb25zLlxuZGVmYXVsdHMubW9kdWxlID0gYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9