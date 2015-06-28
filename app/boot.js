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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztZQVNBLEFBQ0EscUJBRHFCO1lBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM5QixPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzNDLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcH0gZnJvbSAnYXBwJztcblxuLy8gUHVsbCB0aGUgYXBwbGljYXRpb24gdG9nZXRoZXIuXG5pbXBvcnQgJ3ZpZXdzJztcbmltcG9ydCAnYXR0cmlidXRlcy9hbGwnO1xuaW1wb3J0ICdtb2RlbHMvYWxsJztcbmltcG9ydCAnYWpheC9hamF4JztcbmltcG9ydCAnd29yZC1nZW5lcmF0b3Ivd29yZC1nZW5lcmF0b3InO1xuXG4vLyBCb290c3RyYXAgdGhlIGFwcC5cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudC5ib2R5LCBbYXBwLm5hbWVdLCB7XG4gICAgc3RyaWN0RGk6IHRydWVcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==