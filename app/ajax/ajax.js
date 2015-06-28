var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['ng-decorate'], function(exports_1) {
    var ng_decorate_1;
    var Ajax;
    return {
        setters:[
            function (_ng_decorate_1) {
                ng_decorate_1 = _ng_decorate_1;
            }],
        execute: function() {
            /**
             * Silly ajax component.
             *
             * Methods:
             *   load()  // reloads the data
             *
             * Events:
             *   load  -> data
             *   error -> reason
             */
            Ajax = (function () {
                function Ajax($element) {
                    // Fields.
                    this.loading = false;
                    this.element = $element[0];
                    if (this.auto)
                        this.load();
                }
                /**
                 * Dispatches a custom DOM event with the given name and detail.
                 */
                Ajax.prototype.dispatch = function (eventName, data) {
                    if (data === void 0) { data = null; }
                    if (this.element instanceof HTMLElement) {
                        this.element.dispatchEvent(new CustomEvent(eventName, {
                            detail: data
                        }));
                    }
                };
                /**
                 * Loads or reloads the data.
                 */
                Ajax.prototype.load = function () {
                    var _this = this;
                    if (!this.url) {
                        this.dispatch('error', new Error('no url provided'));
                        return;
                    }
                    this.loading = true;
                    this.$http({
                        url: this.url,
                        method: 'GET'
                    })
                        .then(function (response) {
                        _this.dispatch('load', response.data);
                    })
                        .catch(function (err) {
                        _this.dispatch('error', err);
                    })
                        .finally(function () {
                        _this.loading = false;
                    });
                };
                Ajax.$inject = ['$element'];
                __decorate([
                    ng_decorate_1.bindOneWay
                ], Ajax.prototype, "url");
                __decorate([
                    ng_decorate_1.bindOneWay
                ], Ajax.prototype, "auto");
                __decorate([
                    ng_decorate_1.autoinject
                ], Ajax.prototype, "$http");
                Ajax = __decorate([
                    ng_decorate_1.Component({
                        selector: 'ajax',
                        templateUrl: null
                    })
                ], Ajax);
                return Ajax;
            })();
            exports_1("Ajax", Ajax);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXgvYWpheC50cyJdLCJuYW1lcyI6WyJBamF4IiwiQWpheC5jb25zdHJ1Y3RvciIsIkFqYXguZGlzcGF0Y2giLCJBamF4LmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxBQVVBOzs7Ozs7Ozs7ZUFERzs7Z0JBa0JEQSxjQUFZQSxRQUE2QkE7b0JBTHpDQyxVQUFVQTtvQkFDVkEsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBS2RBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUUzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRUREOzttQkFFR0E7Z0JBQ0tBLHVCQUFRQSxHQUFoQkEsVUFBaUJBLFNBQWlCQSxFQUFFQSxJQUFnQkE7b0JBQWhCRSxvQkFBZ0JBLEdBQWhCQSxXQUFnQkE7b0JBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxZQUFZQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeENBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBOzRCQUNwREEsTUFBTUEsRUFBRUEsSUFBSUE7eUJBQ2JBLENBQUNBLENBQUNBLENBQUNBO29CQUNOQSxDQUFDQTtnQkFDSEEsQ0FBQ0E7Z0JBRURGOzttQkFFR0E7Z0JBQ0hBLG1CQUFJQSxHQUFKQTtvQkFBQUcsaUJBcUJDQTtvQkFwQkNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO3dCQUNkQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxLQUFLQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLENBQUNBO3dCQUNyREEsTUFBTUEsQ0FBQ0E7b0JBQ1RBLENBQUNBO29CQUVEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFFcEJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO3dCQUNUQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQTt3QkFDYkEsTUFBTUEsRUFBRUEsS0FBS0E7cUJBQ2RBLENBQUNBO3lCQUNEQSxJQUFJQSxDQUFDQSxVQUFBQSxRQUFRQTt3QkFDWkEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsRUFBRUEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZDQSxDQUFDQSxDQUFDQTt5QkFDREEsS0FBS0EsQ0FBQ0EsVUFBQUEsR0FBR0E7d0JBQ1JBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO29CQUM5QkEsQ0FBQ0EsQ0FBQ0E7eUJBQ0RBLE9BQU9BLENBQUNBO3dCQUNQQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdkJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkExQ01ILFlBQU9BLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO2dCQVY5QkE7b0JBQUNBLHdCQUFVQTttQkFBQ0EscUJBQUdBLEVBQVNBO2dCQUN4QkE7b0JBQUNBLHdCQUFVQTttQkFBQ0Esc0JBQUlBLEVBQVVBO2dCQUcxQkE7b0JBQUNBLHdCQUFVQTttQkFBU0EsdUJBQUtBLEVBQWtCQTtnQkFWN0NBO29CQUFDQSx1QkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLE1BQU1BO3dCQUNoQkEsV0FBV0EsRUFBRUEsSUFBSUE7cUJBQ2xCQSxDQUFDQTt5QkF3RERBO2dCQUFEQSxXQUFDQTtZQUFEQSxDQTNEQSxBQTJEQ0EsSUFBQTtZQTNERCx1QkEyREMsQ0FBQSIsImZpbGUiOiJhamF4L2FqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgYmluZE9uZVdheSwgYXV0b2luamVjdH0gZnJvbSAnbmctZGVjb3JhdGUnO1xuXG4vKipcbiAqIFNpbGx5IGFqYXggY29tcG9uZW50LlxuICpcbiAqIE1ldGhvZHM6XG4gKiAgIGxvYWQoKSAgLy8gcmVsb2FkcyB0aGUgZGF0YVxuICpcbiAqIEV2ZW50czpcbiAqICAgbG9hZCAgLT4gZGF0YVxuICogICBlcnJvciAtPiByZWFzb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpheCcsXG4gIHRlbXBsYXRlVXJsOiBudWxsXG59KVxuZXhwb3J0IGNsYXNzIEFqYXgge1xuICAvLyBCaW5kYWJsZVxuICBAYmluZE9uZVdheSB1cmw6IHN0cmluZztcbiAgQGJpbmRPbmVXYXkgYXV0bzogYm9vbGVhbjtcblxuICAvLyBJbmplY3RlZFxuICBAYXV0b2luamVjdCBwcml2YXRlICRodHRwOiBuZy5JSHR0cFNlcnZpY2U7XG5cbiAgLy8gRmllbGRzLlxuICBsb2FkaW5nID0gZmFsc2U7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIHN0YXRpYyAkaW5qZWN0ID0gWyckZWxlbWVudCddO1xuICBjb25zdHJ1Y3RvcigkZWxlbWVudDogbmcuSUF1Z21lbnRlZEpRdWVyeSkge1xuICAgIHRoaXMuZWxlbWVudCA9ICRlbGVtZW50WzBdO1xuXG4gICAgaWYgKHRoaXMuYXV0bykgdGhpcy5sb2FkKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBET00gZXZlbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgZGV0YWlsLlxuICAgKi9cbiAgcHJpdmF0ZSBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgZGF0YTogYW55ID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgICBkZXRhaWw6IGRhdGFcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgb3IgcmVsb2FkcyB0aGUgZGF0YS5cbiAgICovXG4gIGxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLnVybCkge1xuICAgICAgdGhpcy5kaXNwYXRjaCgnZXJyb3InLCBuZXcgRXJyb3IoJ25vIHVybCBwcm92aWRlZCcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4kaHR0cCh7XG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaCgnbG9hZCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoKCdlcnJvcicsIGVycik7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9