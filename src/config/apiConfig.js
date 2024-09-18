import axios from 'axios';
//const DEPLOYED='https://pear-poised-hen.cyclic.app/'
const LOCALHOST='http://localhost:5001'

export const API_BASE_URL = LOCALHOST;
const jwt = localStorage.getItem('jwt');

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
