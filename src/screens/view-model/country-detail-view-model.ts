import {observable, makeObservable, runInAction, computed} from 'mobx';
import {buildServiceResult, CountryServices} from '@services';
import {DataModels} from '@types';
import {countryStore} from '@models';

class CountryDetailViewModel {
  code = '';

  country: DataModels.Country | undefined = undefined;

  constructor(code: string) {
    makeObservable(this, {
      country: observable,
      phone: computed,
      continentName: computed,
    });
    //
    this.code = code;
    this.country = countryStore.getCounty(code);
  }

  get phone() {
    return this.country?.phone ? `+${this.country?.phone}` : '-';
  }

  get continentName() {
    return this.country?.continent?.name || '-';
  }

  async loadCountry() {
    const result = await buildServiceResult<DataModels.Country>(() => {
      return CountryServices.queryCountry(this.code);
    });

    if (result.success) {
      runInAction(() => {
        this.country = result.data as DataModels.Country;
      });
    }

    return result;
  }
}

export {CountryDetailViewModel};
