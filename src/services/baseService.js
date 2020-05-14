import axios from "axios";
import { handle } from "../utils/handle";

export class BaseService {
  async post(url, data, config = {}) {
    const payload = { data };
    const [result, error] = await handle(axios.post(url, payload, config));
    if (error) {
      throw new Error(error);
    }
    return [result, error];
  }

  async get(url, query, config = {}) {
    if (query) {
      config = { ...config, params: query };
    }

    const [result, error] = await handle(axios.get(url, config));
    if (error) {
      throw new Error(error);
    }
    return [result, error];
  }
}
