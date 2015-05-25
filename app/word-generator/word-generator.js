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
