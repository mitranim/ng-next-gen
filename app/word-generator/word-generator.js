var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['foliant', 'ng-decorate', 'models/all'], function(exports_1) {
    var foliant_1, ng_decorate_1, all_1;
    var VM;
    return {
        setters:[
            function (_foliant_1) {
                foliant_1 = _foliant_1;
            },
            function (_ng_decorate_1) {
                ng_decorate_1 = _ng_decorate_1;
            },
            function (_all_1) {
                all_1 = _all_1;
            }],
        execute: function() {
            VM = (function () {
                function VM() {
                    // Generated words.
                    this.results = [];
                    // Input.
                    this.word = '';
                    // Error.
                    this.error = null;
                    // True when the generator is out of words.
                    this.depleted = false;
                    // URL for the ajax component.
                    this.wordsUrl = all_1.wordsUrl;
                }
                /**
                 * Takes the given set as the source words and regenerates the results.
                 */
                VM.prototype.refresh = function (words) {
                    this.words = Object.keys(words).map(function (key) { return words[key]; });
                    this.gen = new foliant_1.default(this.words).generator();
                    this.generate();
                };
                Object.defineProperty(VM.prototype, "limit", {
                    /**
                     * Word count limit.
                     */
                    get: function () { return 6; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Generates a group of words.
                 */
                VM.prototype.generate = function () {
                    // Remove error, if any.
                    this.error = '';
                    // Regenerate the generator, if necessary.
                    if (!this.gen)
                        this.gen = new foliant_1.default(this.words).generator();
                    var words = [];
                    while (words.length < this.limit) {
                        var word = this.gen();
                        if (!word)
                            break;
                        // Skip source words.
                        if (~this.words.indexOf(word))
                            continue;
                        words.push(word);
                    }
                    if (words.length < this.limit)
                        this.depleted = true;
                    else
                        this.depleted = false;
                    this.results = words;
                };
                /**
                 * Adds a word to the source or displays an error message.
                 */
                VM.prototype.add = function (word) {
                    this.word = this.word.toLowerCase();
                    if (!this.word) {
                        this.error = 'Please input a word.';
                        return;
                    }
                    if (this.word.length < 2) {
                        this.error = 'The word is too short.';
                        return;
                    }
                    if (~this.words.indexOf(this.word)) {
                        this.error = 'This word is already in the set.';
                        return;
                    }
                    try {
                        new foliant_1.default(this.words).examine([this.word]);
                    }
                    catch (err) {
                        console.warn('-- word parsing error:', err);
                        this.error = 'Some of these characters are not allowed in a word.';
                        return;
                    }
                    this.error = '';
                    this.words.push(this.word);
                    this.word = '';
                    // Refresh the generator.
                    this.gen = new foliant_1.default(this.words).generator();
                };
                /**
                 * Drops a word from the source and refreshes the generator.
                 */
                VM.prototype.remove = function (word) {
                    var index = this.words.indexOf(word);
                    if (~index)
                        this.words.splice(index, 1);
                    if (!this.words.length)
                        this.ajax.load();
                    else
                        this.gen = new foliant_1.default(this.words).generator();
                };
                /**
                 * Adds the given word to the source, removing it from the generated
                 * results. Doesn't refresh the generator because adding a previously
                 * generated word to the same source set has no effect on the total output.
                 */
                VM.prototype.pick = function (word) {
                    if (~this.words.indexOf(word))
                        return;
                    this.words.push(word);
                    var index = this.results.indexOf(word);
                    if (~index)
                        this.results.splice(index, 1);
                };
                VM = __decorate([
                    ng_decorate_1.Component({
                        selector: 'word-generator'
                    })
                ], VM);
                return VM;
            })();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmQtZ2VuZXJhdG9yL3dvcmQtZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbIlZNIiwiVk0uY29uc3RydWN0b3IiLCJWTS5yZWZyZXNoIiwiVk0ubGltaXQiLCJWTS5nZW5lcmF0ZSIsIlZNLmFkZCIsIlZNLnJlbW92ZSIsIlZNLnBpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7b0JBTUVDLG1CQUFtQkE7b0JBQ25CQSxZQUFPQSxHQUFhQSxFQUFFQSxDQUFDQTtvQkFDdkJBLFNBQVNBO29CQUNUQSxTQUFJQSxHQUFXQSxFQUFFQSxDQUFDQTtvQkFDbEJBLFNBQVNBO29CQUNUQSxVQUFLQSxHQUFXQSxJQUFJQSxDQUFDQTtvQkFDckJBLDJDQUEyQ0E7b0JBQzNDQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFPMUJBLDhCQUE4QkE7b0JBQzlCQSxhQUFRQSxHQUFHQSxjQUFRQSxDQUFDQTtnQkFtR3RCQSxDQUFDQTtnQkFqR0NEOzttQkFFR0E7Z0JBQ0hBLG9CQUFPQSxHQUFQQSxVQUFRQSxLQUFZQTtvQkFDbEJFLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBO29CQUN2REEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsaUJBQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO29CQUM5Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFLREYsc0JBQUlBLHFCQUFLQTtvQkFIVEE7O3VCQUVHQTt5QkFDSEEsY0FBcUJHLE1BQU1BLENBQUNBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOzs7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LFVBQUtBLElBQVlBO29CQUNmTyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ3RDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDdEJBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUN2Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1Q0EsQ0FBQ0E7Z0JBdkhIUDtvQkFBQ0EsdUJBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3FCQUMzQkEsQ0FBQ0E7dUJBc0hEQTtnQkFBREEsU0FBQ0E7WUFBREEsQ0F4SEEsQUF3SENBLElBQUEiLCJmaWxlIjoid29yZC1nZW5lcmF0b3Ivd29yZC1nZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXRzIGZyb20gJ2ZvbGlhbnQnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ25nLWRlY29yYXRlJztcbmltcG9ydCB7V29yZHMsIHdvcmRzVXJsfSBmcm9tICdtb2RlbHMvYWxsJztcbmltcG9ydCB7QWpheH0gZnJvbSAnYWpheC9hamF4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd29yZC1nZW5lcmF0b3InXG59KVxuY2xhc3MgVk0ge1xuICAvLyBTb3VyY2Ugd29yZHMuXG4gIHdvcmRzOiBzdHJpbmdbXTtcbiAgLy8gR2VuZXJhdGVkIHdvcmRzLlxuICByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICAvLyBJbnB1dC5cbiAgd29yZDogc3RyaW5nID0gJyc7XG4gIC8vIEVycm9yLlxuICBlcnJvcjogc3RyaW5nID0gbnVsbDtcbiAgLy8gVHJ1ZSB3aGVuIHRoZSBnZW5lcmF0b3IgaXMgb3V0IG9mIHdvcmRzLlxuICBkZXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBXb3JkcyBnZW5lcmF0b3IgZnJvbSBgZm9saWFudGAuXG4gIGdlbjogKCkgPT4gc3RyaW5nO1xuICAvLyBET00gZWxlbWVudC5cbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIC8vIFNpbGx5IGFqYXggY29tcG9uZW50LlxuICBhamF4OiBBamF4O1xuICAvLyBVUkwgZm9yIHRoZSBhamF4IGNvbXBvbmVudC5cbiAgd29yZHNVcmwgPSB3b3Jkc1VybDtcblxuICAvKipcbiAgICogVGFrZXMgdGhlIGdpdmVuIHNldCBhcyB0aGUgc291cmNlIHdvcmRzIGFuZCByZWdlbmVyYXRlcyB0aGUgcmVzdWx0cy5cbiAgICovXG4gIHJlZnJlc2god29yZHM6IFdvcmRzKSB7XG4gICAgdGhpcy53b3JkcyA9IE9iamVjdC5rZXlzKHdvcmRzKS5tYXAoa2V5ID0+IHdvcmRzW2tleV0pO1xuICAgIHRoaXMuZ2VuID0gbmV3IFRyYWl0cyh0aGlzLndvcmRzKS5nZW5lcmF0b3IoKTtcbiAgICB0aGlzLmdlbmVyYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogV29yZCBjb3VudCBsaW1pdC5cbiAgICovXG4gIGdldCBsaW1pdCgpOiBudW1iZXIge3JldHVybiA2fVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBncm91cCBvZiB3b3Jkcy5cbiAgICovXG4gIGdlbmVyYXRlKCk6IHZvaWQge1xuICAgIC8vIFJlbW92ZSBlcnJvciwgaWYgYW55LlxuICAgIHRoaXMuZXJyb3IgPSAnJztcblxuICAgIC8vIFJlZ2VuZXJhdGUgdGhlIGdlbmVyYXRvciwgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghdGhpcy5nZW4pIHRoaXMuZ2VuID0gbmV3IFRyYWl0cyh0aGlzLndvcmRzKS5nZW5lcmF0b3IoKTtcbiAgICB2YXIgd29yZHMgPSBbXTtcblxuICAgIHdoaWxlICh3b3Jkcy5sZW5ndGggPCB0aGlzLmxpbWl0KSB7XG4gICAgICB2YXIgd29yZCA9IHRoaXMuZ2VuKCk7XG4gICAgICBpZiAoIXdvcmQpIGJyZWFrO1xuICAgICAgLy8gU2tpcCBzb3VyY2Ugd29yZHMuXG4gICAgICBpZiAofnRoaXMud29yZHMuaW5kZXhPZih3b3JkKSkgY29udGludWU7XG4gICAgICB3b3Jkcy5wdXNoKHdvcmQpO1xuICAgIH1cblxuICAgIGlmICh3b3Jkcy5sZW5ndGggPCB0aGlzLmxpbWl0KSB0aGlzLmRlcGxldGVkID0gdHJ1ZTtcbiAgICBlbHNlIHRoaXMuZGVwbGV0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucmVzdWx0cyA9IHdvcmRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB3b3JkIHRvIHRoZSBzb3VyY2Ugb3IgZGlzcGxheXMgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICovXG4gIGFkZCh3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndvcmQgPSB0aGlzLndvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICghdGhpcy53b3JkKSB7XG4gICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBpbnB1dCBhIHdvcmQuJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53b3JkLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSAnVGhlIHdvcmQgaXMgdG9vIHNob3J0Lic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKH50aGlzLndvcmRzLmluZGV4T2YodGhpcy53b3JkKSkge1xuICAgICAgdGhpcy5lcnJvciA9ICdUaGlzIHdvcmQgaXMgYWxyZWFkeSBpbiB0aGUgc2V0Lic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIG5ldyBUcmFpdHModGhpcy53b3JkcykuZXhhbWluZShbdGhpcy53b3JkXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oJy0tIHdvcmQgcGFyc2luZyBlcnJvcjonLCBlcnIpO1xuICAgICAgdGhpcy5lcnJvciA9ICdTb21lIG9mIHRoZXNlIGNoYXJhY3RlcnMgYXJlIG5vdCBhbGxvd2VkIGluIGEgd29yZC4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSAnJztcbiAgICB0aGlzLndvcmRzLnB1c2godGhpcy53b3JkKTtcbiAgICB0aGlzLndvcmQgPSAnJztcblxuICAgIC8vIFJlZnJlc2ggdGhlIGdlbmVyYXRvci5cbiAgICB0aGlzLmdlbiA9IG5ldyBUcmFpdHModGhpcy53b3JkcykuZ2VuZXJhdG9yKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJvcHMgYSB3b3JkIGZyb20gdGhlIHNvdXJjZSBhbmQgcmVmcmVzaGVzIHRoZSBnZW5lcmF0b3IuXG4gICAqL1xuICByZW1vdmUod29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy53b3Jkcy5pbmRleE9mKHdvcmQpO1xuICAgIGlmICh+aW5kZXgpIHRoaXMud29yZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAoIXRoaXMud29yZHMubGVuZ3RoKSB0aGlzLmFqYXgubG9hZCgpO1xuICAgIGVsc2UgdGhpcy5nZW4gPSBuZXcgVHJhaXRzKHRoaXMud29yZHMpLmdlbmVyYXRvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIHdvcmQgdG8gdGhlIHNvdXJjZSwgcmVtb3ZpbmcgaXQgZnJvbSB0aGUgZ2VuZXJhdGVkXG4gICAqIHJlc3VsdHMuIERvZXNuJ3QgcmVmcmVzaCB0aGUgZ2VuZXJhdG9yIGJlY2F1c2UgYWRkaW5nIGEgcHJldmlvdXNseVxuICAgKiBnZW5lcmF0ZWQgd29yZCB0byB0aGUgc2FtZSBzb3VyY2Ugc2V0IGhhcyBubyBlZmZlY3Qgb24gdGhlIHRvdGFsIG91dHB1dC5cbiAgICovXG4gIHBpY2sod29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKH50aGlzLndvcmRzLmluZGV4T2Yod29yZCkpIHJldHVybjtcbiAgICB0aGlzLndvcmRzLnB1c2god29yZCk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5yZXN1bHRzLmluZGV4T2Yod29yZCk7XG4gICAgaWYgKH5pbmRleCkgdGhpcy5yZXN1bHRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==