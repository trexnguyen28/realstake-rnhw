import {observable, makeObservable, runInAction, computed} from 'mobx';
import {buildServiceResult, CountryServices} from '@services';
import {DataModels} from '@types';

class ContinentDetailViewModel {
  code = '';

  continent: DataModels.Continent | undefined = undefined;

  constructor(code: string) {
    makeObservable(this, {
      continent: observable,
      countries: computed,
    });
    //
    this.code = code;
  }

  get countries() {
    return this.continent?.countries || [];
  }

  async loadContinent() {
    const result = await buildServiceResult<DataModels.Continent>(() => {
      return CountryServices.queryContinent(this.code);
    });

    if (result.success) {
      runInAction(() => {
        this.continent = result.data as DataModels.Continent;
      });
    }

    return result;
  }
}

export {ContinentDetailViewModel};
