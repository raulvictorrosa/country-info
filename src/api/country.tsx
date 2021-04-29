import axios from 'axios';

const { REACT_APP_API_COUNTRIES } = process.env;

export const getByAlpha = (alpha3: string) =>
  alpha3 && axios.get(`${REACT_APP_API_COUNTRIES}/alpha/${alpha3}`);
