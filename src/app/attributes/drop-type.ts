import {Attribute} from 'ng-decorate';

@Attribute({
  selector: '[drop-type]'
})
class VM {
  static link(s, $element: ng.IAugmentedJQuery) {
    var element: HTMLElement = $element[0];
    var type = element.getAttribute('drop-type');

    element.addEventListener('dragover', (event: DragEvent) => {
      event.dataTransfer.dropEffect = type;
    });
  }
}
