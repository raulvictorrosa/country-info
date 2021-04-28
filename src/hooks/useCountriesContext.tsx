import { useContext } from 'react';
import { CountriesContext } from '../providers/countriesProvider';

export const useCountriesContext = () => {
  const countriesContext = useContext(CountriesContext);
  return {
    state: countriesContext[0],
    dispatch: countriesContext[1],
  };
};
