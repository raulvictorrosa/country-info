import { useCallback, useEffect, useReducer } from 'react';
import * as CountryApi from '../api/country';

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
  country: object;
  isLoading: boolean;
  error: any;
  alpha3: string;
};

const initialState = {
  country: {},
  isLoading: true,
  error: null,
  alpha3: ''
};

type ReducerActionTypes =
  | {
      type: 'GET_COUNTRY';
    }
  | {
      type: 'GET_COUNTRY_SUCCESS';
      payload: { country: Country };
    }
  | {
      type: 'SET_ALPHA_3';
      payload: { alpha3: string };
    }
  | {
      type: 'GET_COUNTRY_ERROR';
      payload: { error: any };
    };

const reducer = (
  state: InitialState = initialState,
  action: ReducerActionTypes
) => {
  switch (action.type) {
    case 'GET_COUNTRY': {
      return { ...state, ...initialState };
    }
    case 'SET_ALPHA_3': {
      return {
        ...state,
        isLoading: false,
        alpha3: action.payload.alpha3
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const useGetCountry = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        dispatch({ type: 'GET_COUNTRY' });

        const { data: country }: any = await CountryApi.getByAlpha(
          state.alpha3
        );
        console.log(country);
        dispatch({ type: 'GET_COUNTRY_SUCCESS', payload: { country } });
      } catch (e) {
        dispatch({ type: 'GET_COUNTRY_ERROR', payload: { error: e } });
      }
    };

    fetchCountry();
  }, [dispatch, state.alpha3]);

  const setAlpha3 = useCallback(
    (alpha3: string) => {
      dispatch({ type: 'SET_ALPHA_3', payload: { alpha3 } });
    },
    [dispatch]
  );

  return { state, actions: { setAlpha3 } };
};
