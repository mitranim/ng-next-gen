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
