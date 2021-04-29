import axios from 'axios';

const { REACT_APP_API_COUNTRIES } = process.env;

export const getAll = (text: string) =>
  !text
    ? axios.get(`${REACT_APP_API_COUNTRIES}/all`)
    : axios.get(`${REACT_APP_API_COUNTRIES}/name/${text}`);

export const getAllByRegion = (region: string) =>
  axios.get(`${REACT_APP_API_COUNTRIES}/region${region}`);
