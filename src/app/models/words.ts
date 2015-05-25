import {Service} from 'ng-decorate';

export const wordsUrl = 'https://incandescent-torch-3438.firebaseio.com/foliant/defaults/words/eng.json';

@Service({
  injectStatic: ['$http'],
  serviceName: 'Words'
})
export class Words {
  static $http: ng.IHttpService;
  [key: string]: string;

  constructor(fields?: StringMap) {
    if (fields) for (let key in fields) this[key] = fields[key];
  }

  static readAll() {
    return this.$http({
      url: wordsUrl,
      method: 'GET'
    })
    .then(response => new Words(<StringMap>response.data));
  }
}
