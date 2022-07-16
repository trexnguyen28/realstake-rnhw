import {observable, makeObservable, runInAction} from 'mobx';
import {DataModels} from '@types';
import {buildServiceResult, CountryServices} from '@services';

class CountryStore {
  countries: DataModels.Country[] = [];

  constructor() {
    makeObservable(this, {
      countries: observable,
    });
  }

  getCounty(code: string) {
    const iCountry = this.countries.findIndex(x => x.code === code);

    return iCountry > -1 ? this.countries[iCountry] : undefined;
  }

  async loadCountries() {
    const result = await buildServiceResult<DataModels.Country[]>(() => {
      return CountryServices.queryCountries();
    });

    if (result.success) {
      runInAction(() => {
        this.countries = result.data as DataModels.Country[];
      });
    }

    return result;
  }
}

export {CountryStore};
