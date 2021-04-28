import { useEffect } from 'react';
import * as CountriesApi from '../api/countries';
import { useCancellablePromise } from '../hooks/useCancellablePromise';
import { useCountriesContext } from './useCountriesContext';

export const useGetCountries = () => {
  const { state, dispatch }: any = useCountriesContext(); // store
  const { cancellablePromise } = useCancellablePromise();

  // action
  useEffect(() => {
    const fetchCountries = async () => {
      const { data }: any = await cancellablePromise(CountriesApi.getAll());
      dispatch({
        type: 'FETCH_COUNTRIES',
        countries: data,
      });
    };

    fetchCountries();
  }, []);

  const { countries } = state;

  return {
    countries,
  };
};
