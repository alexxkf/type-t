import axios from "axios";

export const FETCH_DATA = "fetch_data";
export const FETCH_INSULIN_DATA = "fetch_insulin_data"


const ROOT_URL = ""


export function fetchData() {
  const request = axios
    .get(`${ROOT_URL}/bgl`)
    .catch(function (error) {
      console.log("error: ", error);
    });
  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/newPost`, values, {
  });
  return {
    type: FETCH_DATA,
    payload: request
  };
}

// export function selectWeek() {
//   const request = axios
//     .get(`${ROOT_URL}/`)
//     .catch(function (error) {
//       console.log("error: ", error);
//     });
//   return {
//     type: FETCH_DATA,
//     payload: request
//   }
// }


export function fetchInsulinData() {
  const request = axios
    .get(`${ROOT_URL}/insulin`)
    .catch(function (error) {
      console.log("error: ", error);
    });
  return {
    type: FETCH_INSULIN_DATA,
    payload: request
  }
}

