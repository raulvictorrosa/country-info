import axios from 'axios';

const { REACT_APP_API_COUNTRIES } = process.env;

const getAll = () => axios.get(`${REACT_APP_API_COUNTRIES}/all`);

export default { getAll };
