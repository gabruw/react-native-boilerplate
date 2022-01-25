//#region Imports

import { API_URL } from '@env';
import axios, { AxiosInstance } from 'axios';

//#endregion

const useBaseAxios = (): AxiosInstance => axios.create({ baseURL: API_URL });

export default useBaseAxios;
