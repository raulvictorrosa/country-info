import { useEffect, useState } from 'react';
import * as CountriesApi from '../api/countries';

const fetchCountries = async (setCountries: any) => {
  const { data } = await CountriesApi.getAll();

  setCountries(data);
};

export const useGetCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);

  return countries;
};

const fetchCountriesByRegion = async (region: string, setCountries: any) => {
  const { data } = await CountriesApi.getAllByRegion(region);

  setCountries(data);
};

export const useGetCountriesByRegion = (region: string) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesByRegion(region, setCountries);
  }, []);

  return countries;
};
