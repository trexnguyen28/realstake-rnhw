import {observable, makeObservable, runInAction, computed, action} from 'mobx';
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
      continentCode: computed,
      setCode: action,
    });
    //
    this.code = code?.toUpperCase() || '';
    this.country = countryStore.getCounty(code);
  }

  setCode(code: string) {
    if (code) {
      this.code = code?.toUpperCase() || '';
    }
  }

  get phone() {
    return this.country?.phone
      ? this.country.phone
          .split(',')
          .map(x => `+${x}`)
          .join(', ')
      : '-';
  }

  get continentName() {
    return this.country?.continent?.name || '-';
  }

  get continentCode() {
    return this.country?.continent?.code;
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
