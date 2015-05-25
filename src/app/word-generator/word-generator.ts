import Traits from 'foliant';
import {Component} from 'ng-decorate';
import {Words} from 'models/all';

@Component({
  selector: 'word-generator'
})
class VM {
  // Source words.
  words: string[];
  // Input.
  word: string = '';
  // Error.
  error: string = null;
  // True when the generator is out of words.
  depleted: boolean = false;
  // Words generator.
  gen: () => string;
  // Generated words.
  results: string[] = [];

  constructor() {
    this.reload().then(this.generate.bind(this));
  }

  /**
   * Reloads the example words from the backend.
   */
  reload() {
    return Words.readAll().then(words => {
      this.words = Object.keys(words).map(key => words[key]);
    });
  }

  /**
   * Word count limit.
   */
  get limit(): number {return 12}

  /**
   * Generates a group of words.
   */
  generate(): void {
    // Remove error, if any.
    this.error = '';

    // Regenerate the generator, if necessary.
    if (!this.gen) this.gen = new Traits(this.words).generator();
    var words = [];

    while (words.length < this.limit) {
      var word = this.gen();
      if (!word) break;
      // Skip source words.
      if (~this.words.indexOf(word)) continue;
      words.push(word);
    }

    if (words.length < this.limit) this.depleted = true;
    else this.depleted = false;

    this.results = words;
  }

  /**
   * Adds a word to the source or displays an error message.
   */
  add(word: string): void {
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
      new Traits(this.words).examine([this.word]);
    } catch (err) {
      console.warn('-- word parsing error:', err);
      this.error = 'Some of these characters are not allowed in a word.';
      return;
    }

    this.error = '';
    this.words.push(this.word);
    this.word = '';

    // Refresh the generator.
    this.gen = new Traits(this.words).generator();
  }

  /**
   * Drops a word from the source and refreshes the generator.
   */
  remove(word: string): void {
    var index = this.words.indexOf(word);
    if (~index) this.words.splice(index, 1);
    if (!this.words.length) {
      this.reload().then(() => {
        this.gen = new Traits(this.words).generator();
        this.generate();
      });
    } else {
      this.gen = new Traits(this.words).generator();
    }
  }

  /**
   * Adds the given word to the source, removing it from the generated
   * results. Doesn't refresh the generator because adding a previously
   * generated word to the same source set has no effect on the total output.
   */
  pick(word: string): void {
    if (~this.words.indexOf(word)) return;
    this.words.push(word);
    var index = this.results.indexOf(word);
    if (~index) this.results.splice(index, 1);
  }
}
