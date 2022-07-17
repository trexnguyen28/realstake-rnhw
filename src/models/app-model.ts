import {CountryStore} from './country-store';

class AppModel {
  countryStore: CountryStore;
  //
  constructor() {
    this.countryStore = new CountryStore();
  }
}

const instance = new AppModel();
export {instance as appModel};
