import axios from "axios";

export const FETCH_DATA = "fetch_data";
export const SUBMIT_DATA = "submit_data"
export const FETCH_CARBS = "fetch_carbs";

const ROOT_URL = "http://localhost:8000/"
const CARB_URL = "http://trackapi.nutritionix.com/"
// app id - fa44ddb5
// api key - 5ce66a555740cc6569e880c980a80503

export function fetchData() {
  const request = axios
    .get(`${ROOT_URL}`)
    .catch(function (error) {
      console.log("error: ", error);
    });
  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function submitData(values) {
  const request = axios
    .post(`${ROOT_URL}`, values)
    .catch(function (error) {
      console.log("error", error);
    })
  return {
    type: SUBMIT_DATA,
    payload: request
  }

}

// export function fetchCarbs() {
//   const request = axios
//     .get(`${CARB_URL}` ?)
//     .catch(function (error) {
//       console.log('error: ', error);
//     })
//   return {
//     type: FETCH_CARBS,
//     payload: request
//   }
// }