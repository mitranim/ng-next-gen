import {Attribute, autoinject} from 'ng-decorate';

@Attribute({
  selector: '[drag-value]'
})
class VM {
  @autoinject static $parse: ng.IParseService;

  static link(scope: ng.IScope, $element: ng.IAugmentedJQuery) {
    var element: HTMLElement = $element[0];

    element.draggable = true;

    element.addEventListener('dragstart', (event: DragEvent) => {
      var expression = VM.$parse(element.getAttribute('drag-value'));
      event.dataTransfer.setData('any', expression(scope, {$event: event}));
    });
  }
}
