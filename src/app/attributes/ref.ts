import {Attribute, defaults} from 'ng-decorate';

/**
 * Looks for a component controller on the given element and assigns it to
 * the current scope on the given path.
 *
 * Example:
 *   <my-inner-element ref="self.inner"></my-inner-element>
 *   <my-loading-indicator ng-if="self.inner.loading"></my-loading-indicator>
 */
@Attribute({
  selector: '[ref]',
  injectStatic: ['$parse']
})
class VM {
  static $parse: ng.IParseService;

  static link(scope: ng.IScope, $element: ng.IAugmentedJQuery) {
    var element = $element[0];
    var path = VM.$parse(element.getAttribute('ref'));

    // Find the component's controller, if any.
    var isolatedScope = $element.isolateScope();
    if (!isolatedScope) return;
    var ctrl = isolatedScope[defaults.controllerAs];
    if (!ctrl) return;

    // Assign it to given path.
    path.assign(scope, ctrl);
  }
}
