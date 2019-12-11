import axios from "axios";

export const FETCH_DATA = "fetch_data";
export const FETCH_INSULIN_DATA = "fetch_insulin_data"


const ROOT_URL = ""


export const fetchData = () => dispatch => {
  axios
    .get(`${ROOT_URL}/bgl`)
    .catch(function (error) {
      console.log("error: ", error);
    })
    .then(function (response) {
      dispatch({
        type: FETCH_DATA,
        payload: response

      })
    })
}

export const createPost = (values, callback) => dispatch => {
  axios.post(`${ROOT_URL}/newPost`, values, {
  })
    .then(function (response) {
      dispatch({
        type: FETCH_DATA,
        payload: response
      })
      if (callback) {
        callback();
      }

    })
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


export const fetchInsulinData = () => dispatch => {
  axios
    .get(`${ROOT_URL}/insulin`)
    .catch(function (error) {
      console.log("error: ", error);
    })
    .then(function (response) {
      dispatch({
        type: FETCH_INSULIN_DATA,
        payload: response
      })

    })
}

