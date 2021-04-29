import { useCallback, useEffect, useReducer } from 'react';
import * as CountriesApi from '../api/countries';

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type RegionalBlocs = {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
};

type Country = {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  gini: number;
  languages: Language[];
  latlng: number[];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: RegionalBlocs[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: { [key: string]: string };
};

type InitialState = {
  countries: Country[];
  isLoading: boolean;
  error: any;
  search: string;
};

const initialState = {
  countries: [],
  isLoading: true,
  error: null,
  search: ''
};

type ReducerActionTypes =
  | {
      type: 'GET_COUNTRIES';
    }
  | {
      type: 'GET_COUNTRIES_SUCCESS';
      payload: { countries: Country[] };
    }
  | {
      type: 'GET_COUNTRIES_ERROR';
      payload: { error: any };
    }
  | {
      type: 'SET_SEARCH_TEXT';
      payload: { search: string };
    };

const reducer = (
  state: InitialState = initialState,
  action: ReducerActionTypes
) => {
  switch (action.type) {
    case 'GET_COUNTRIES': {
      return { ...state, ...initialState };
    }
    case 'GET_COUNTRIES_SUCCESS': {
      return {
        ...state,
        countries: action.payload.countries,
        isLoading: false,
        error: null
      };
    }
    case 'GET_COUNTRIES_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case 'SET_SEARCH_TEXT': {
      return {
        ...state,
        isLoading: false,
        search: action.payload.search
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const useGetCountries = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        dispatch({ type: 'GET_COUNTRIES' });
        const { data: countries }: any = await CountriesApi.getAll();
        console.log('data:', countries);
        dispatch({ type: 'GET_COUNTRIES_SUCCESS', payload: { countries } });
      } catch (e) {
        dispatch({ type: 'GET_COUNTRIES_ERROR', payload: { error: e } });
      }
    };

    fetchCountries();
  }, [dispatch]);

  const setSearchText = useCallback(
    (text: string) => {
      dispatch({ type: 'SET_SEARCH_TEXT', payload: { search: text } });
    },
    [dispatch]
  );

  return { state, actions: { setSearchText } };
};
