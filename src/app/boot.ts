import {app} from 'app';

// Pull the application together.
import 'views';
import 'models/all';
import 'word-generator/word-generator';

// Bootstrap the app.
angular.element(document).ready(() => {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true
  });
});
