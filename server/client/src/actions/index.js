import axios from "axios";

export const FETCH_DATA = "fetch_data";

const ROOT_URL = "http://localhost:8000/products"

export function fetchData() {
  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_DATA,
    payload: request
  }
}