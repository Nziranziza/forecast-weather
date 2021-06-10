import axios from 'axios'
import { API_URL } from 'config';
import handleError from 'services/handleError';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: API_URL
    })
  }
  get(endpoint, params = {}, config = {}) {
    return this.instance
      .get(endpoint, {
        ...config,
        params
      })
      .catch((error) => handleError(error, config))
  }
}

export default new Api();
