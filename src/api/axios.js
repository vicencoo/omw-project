import AXIOS from 'axios';
import { Default_URL } from '../constants/config';

export const axios = AXIOS.create({
  baseURL: Default_URL,
});
