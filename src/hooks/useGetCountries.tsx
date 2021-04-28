import { useEffect, useState } from 'react';
import CountriesApi from '../api/countries';

export const useGetCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await CountriesApi.getAll();

      setCountries(data);
    };

    fetchItems();
  }, []);

  return countries;
};
