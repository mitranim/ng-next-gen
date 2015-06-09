import {Attribute, autoinject} from 'ng-decorate';

@Attribute({
  selector: '[drop-action]'
})
class VM {
  @autoinject static $parse: ng.IParseService;

  static link(scope: ng.IScope, $element: ng.IAugmentedJQuery) {
    var element: HTMLElement = $element[0];

    var statement = VM.$parse(element.getAttribute('drop-action'));

    element.addEventListener('dragover', event => {
      event.preventDefault();
      element.classList.add('dragover');
    });

    element.addEventListener('dragleave', () => {
      element.classList.remove('dragover');
    });

    element.addEventListener('drop', (event: DragEvent) => {
      element.classList.remove('dragover');
      statement(scope, {
        $event: event,
        $data: event.dataTransfer.getData('any')
      });
      scope.$applyAsync();
    });
  }
}
