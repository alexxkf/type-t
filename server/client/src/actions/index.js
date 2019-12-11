import axios from "axios";

export const FETCH_DATA = "fetch_data";
// export const FETCH_CARBS = "fetch_carbs";

const ROOT_URL = "http://localhost:8000"
// const CARB_URL = "http://trackapi.nutritionix.com/"
// const ID = 'fa44ddb5'
// const KEY = '5ce66a555740cc6569e880c980a80503'

export function fetchData() {
  const request = axios
    .get(`${ROOT_URL}/`)
    .catch(function (error) {
      console.log("error: ", error);
    });
  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/newPost`, values, {
  });
  // request.then(() => callback());
  return {
    type: FETCH_DATA,
    payload: request
  };
}

export function selectWeek() {
  const request = axios
    .get(`${ROOT_URL}/`)
    .catch(function (error) {
      console.log("error: ", error);
    });
  return {
    type: FETCH_DATA,
    payload: request
  }
}

// export function fetchCarbs() {
//   const request = axios
//     .get(`${CARB_URL}?nf_total_carbohydrate=${ID}${KEY}`)
//     .catch(function (error) {
//       console.log('error: ', error);
//     })
//   return {
//     type: FETCH_CARBS,
//     payload: request
//   }
// }