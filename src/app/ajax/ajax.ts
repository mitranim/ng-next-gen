import {Component, bindOneWay} from 'ng-decorate';

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
@Component({
  selector: 'ajax',
  templateUrl: null,
  inject: ['$http']
})
export class Ajax {
  // Bindable
  @bindOneWay() url: string;
  @bindOneWay() auto: boolean;

  // Injected
  private $http: ng.IHttpService;
  element: HTMLElement;

  // Fields.
  loading = false;

  static $inject = ['$element'];
  constructor($element: ng.IAugmentedJQuery) {
    this.element = $element[0];

    if (this.auto) this.load();
  }

  /**
   * Dispatches a custom DOM event with the given name and detail.
   */
  private dispatch(eventName: string, data: any = null) {
    if (this.element instanceof HTMLElement) {
      this.element.dispatchEvent(new CustomEvent(eventName, {
        detail: data
      }));
    }
  }

  /**
   * Loads or reloads the data.
   */
  load() {
    if (!this.url) {
      this.dispatch('error', new Error('no url provided'));
      return;
    }

    this.loading = true;

    this.$http({
      url: this.url,
      method: 'GET'
    })
    .then(response => {
      this.dispatch('load', response.data);
    })
    .catch(err => {
      this.dispatch('error', err);
    })
    .finally(() => {
      this.loading = false;
    });
  }
}
