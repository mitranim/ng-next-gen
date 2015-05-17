System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "foliant": "npm:foliant@0.0.1",
    "ng-decorate": "npm:ng-decorate@0.0.8",
    "stylific": "npm:stylific@0.0.9",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:foliant@0.0.1": {
      "lodash": "npm:lodash@3.8.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ng-decorate@0.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stylific@0.0.9": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

