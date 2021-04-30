import axios from 'axios';

const { REACT_APP_API_COUNTRIES } = process.env;

export const initialFields: string[] = [
  'alpha2Code',
  'alpha3Code',
  'borders',
  'capital',
  'currencies',
  'flag',
  'languages',
  'name',
  'nativeName',
  'population',
  'region',
  'subregion',
  'topLevelDomain',
  'translations'
];

export const getAll = (text: string, fields = initialFields) =>
  !text
    ? axios.get(`${REACT_APP_API_COUNTRIES}/all?fields=${fields.join(';')}`)
    : axios.get(
        `${REACT_APP_API_COUNTRIES}/name/?fields=${text}${fields.join(';')}`
      );

export const getAllByRegion = (region: string, fields = initialFields) =>
  axios.get(
    `${REACT_APP_API_COUNTRIES}/region/?fields=${region}${fields.join(';')}`
  );
