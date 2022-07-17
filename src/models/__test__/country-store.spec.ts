import {CountryStore} from '../country-store';
import {CountryServices} from '@services';

jest.mock('../../services/country-services', () => {
  return {
    CountryServices: {
      queryCountries: jest.fn().mockResolvedValue({
        data: [
          {
            code: 'code1',
            name: 'name1',
            emoji: 'emoji1',
            capital: 'capital1',
          },
          {
            code: 'code2',
            name: 'name2',
            emoji: 'emoji2',
            capital: 'capital2',
          },
        ],
      }),
    },
  };
});

describe('Test Country Store', () => {
  let countryStore: CountryStore;

  beforeEach(() => {
    countryStore = new CountryStore();
  });

  it('Store creation', () => {
    expect(countryStore).not.toBeNull();
    expect(countryStore.countries).toHaveLength(0);
  });

  it('Load Countries from service', async () => {
    await countryStore.loadCountries();
    //
    expect(CountryServices.queryCountries).toHaveBeenCalledTimes(1);
    expect(countryStore.countries).toHaveLength(2);
    expect(countryStore.countries[0].code).toBe('code1');
  });

  it('Get country from store', async () => {
    await countryStore.loadCountries();
    const country = countryStore.getCounty('code2');
    //
    expect(country).not.toBeUndefined();
    expect(country?.name).toBe('name2');
  });
});
