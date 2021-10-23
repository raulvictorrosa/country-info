/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useReducer } from 'react';
import * as CountriesApi from '../api/countries';
import { Country } from './country';

type InitialState = {
  countries: Country[];
  isLoading: boolean;
  error: any;
  search: string;
  filter: string;
};

const initialState = {
  countries: [],
  isLoading: true,
  error: null,
  search: '',
  filter: '',
};

type ReducerActionTypes =
  | {
      type: 'GET_COUNTRIES';
    }
  | {
      type: 'GET_COUNTRIES_SEARCH';
    }
  | {
      type: 'GET_COUNTRIES_BY_REGION';
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
    }
  | {
      type: 'SET_FILTER_TEXT';
      payload: { filter: string };
    };

const reducer = (
  state: InitialState = initialState,
  action: ReducerActionTypes
) => {
  switch (action.type) {
    case 'GET_COUNTRIES': {
      return { ...state, ...initialState };
    }
    case 'GET_COUNTRIES_SEARCH': {
      return {
        ...state,
      };
    }
    case 'GET_COUNTRIES_BY_REGION': {
      return {
        ...state,
      };
    }
    case 'GET_COUNTRIES_SUCCESS': {
      return {
        ...state,
        countries: action.payload.countries,
        isLoading: false,
        error: null,
      };
    }
    case 'GET_COUNTRIES_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case 'SET_SEARCH_TEXT': {
      return {
        ...state,
        isLoading: false,
        search: action.payload.search,
      };
    }
    case 'SET_FILTER_TEXT': {
      return {
        ...state,
        isLoading: false,
        filter: action.payload.filter,
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
      let countries: Country[] = [];
      try {
        if (state.search || !state.filter) {
          !state.search
            ? dispatch({ type: 'GET_COUNTRIES' })
            : dispatch({ type: 'GET_COUNTRIES_SEARCH' });

          const { data }: AxiosResponse<Country[]> = await CountriesApi.getAll(
            state.search
          );
          countries = data;
        }

        if (state.filter) {
          dispatch({ type: 'GET_COUNTRIES_BY_REGION' });
          const { data }: AxiosResponse<Country[]> =
            await CountriesApi.getAllByRegion(state.filter);
          countries = data;
        }

        dispatch({ type: 'GET_COUNTRIES_SUCCESS', payload: { countries } });
      } catch (e) {
        dispatch({ type: 'GET_COUNTRIES_ERROR', payload: { error: e } });
      }
    };

    fetchCountries();
  }, [dispatch, state.search, state.filter]);

  const setSearchText = useCallback(
    (text: string) => {
      dispatch({ type: 'SET_SEARCH_TEXT', payload: { search: text } });
    },
    [dispatch]
  );

  const setFilterText = useCallback(
    (text: string) => {
      dispatch({ type: 'SET_FILTER_TEXT', payload: { filter: text } });
    },
    [dispatch]
  );

  return { state, actions: { setSearchText, setFilterText } };
};
