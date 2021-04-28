import axios from 'axios';

const { REACT_APP_API_COUNTRIES } = process.env;

export const getAll = () => axios.get(`${REACT_APP_API_COUNTRIES}/all`);

export const getAllByRegion = (region: string) =>
  axios.get(`${REACT_APP_API_COUNTRIES}/region${region}`);
