import {app} from 'app';

// Pull the application together.
import 'views';
import 'attributes/all';
import 'models/all';
import 'word-generator/word-generator';

// Bootstrap the app.
angular.element(document).ready(() => {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true
  });
});
