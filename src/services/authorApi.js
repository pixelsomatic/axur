import axios from 'axios';

const authorApi = axios.create({baseURL: 'http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6'});

export default authorApi;