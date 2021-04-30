import axios from 'axios';
import { initialFields } from '../api/countries';

const { REACT_APP_API_COUNTRIES } = process.env;

export const getByAlpha = (alpha3: string, fields = initialFields) =>
  alpha3 &&
  axios.get(
    `${REACT_APP_API_COUNTRIES}/alpha/${alpha3}?fields=${fields.join(';')}`
  );
