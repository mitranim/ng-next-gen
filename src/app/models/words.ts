import {Service, autoinject} from 'ng-decorate';

export const wordsUrl = 'https://incandescent-torch-3438.firebaseio.com/foliant/defaults/words/eng.json';

@Service({
  serviceName: 'Words'
})
export class Words {
  @autoinject static $http: ng.IHttpService;
  [key: string]: string;

  constructor(fields?: {[key: string]: string}) {
    if (fields) for (let key in fields) this[key] = fields[key];
  }

  static readAll() {
    return this.$http({
      url: wordsUrl,
      method: 'GET'
    })
    .then(response => new Words(<{[key: string]: string}>response.data));
  }
}
