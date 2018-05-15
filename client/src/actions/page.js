//                      MAKING API REQUEST
//
//     check out action creater diagram in folder
//
// IN WORDS:
//          user does something
//          it calls the action creator
//          returns our action
//          action flows into our reducer
// ///////////////////////////////////////////////////////////////////
//          MIDDLEWARES ( Gatekeeper of sword :D )
//          middlewares are functions that take an action and
//          depending on the action type & payload the middleware
//          can choose to let the action through, manipulate it,
//          or stop it alltogether before they reach any reducer
// ///////////////////////////////////////////////////////////////////
//          the reducer assemble a new global application state
//          it gets injected back to our application
//
//
//             SO NOW MAKING AN API REQUEST FOR REAL
//
//  we need to install REDUX-PROMISE ? oh for handling ajax request in our application
//  still needs to find out if we need it or not
//
//
//  import axios from 'axios'
//
//
//  const API_KEY = '23yn4875oxwjefxwhjqgf273dsfwu28';
//  const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//
//
//  GO TO INDEX.JS to hook up middleware =>
//
//
//  this action is going to be responsibe for making the ajax (API??) request
//
//   export const FETCH_WEATHER = 'FETCH_WEATHER'
//
//   export function fetchWeather(cityName) {
//    const url = `${ROOT_URL}&q=${cityName},us`;
//    const request = axios.get(url)
//        => this will return a promise
//
//    return {
//      type: FETCH_WEATHER
//      payload: request   <= we pass the url request as the payload
//    }
//  }
//
// he uses axios for ajax requests but we also used something. WHAT IS THAT??
//
//
//    we can check if the request was successfull under network tab in browser
//  => CONTINUE WITH REDUX-PROMISE CONTINUED
//
//

 import * as request from 'superagent'

const baseUrl = 'https://dog.ceo/api'

export const FETCH_DOGS = 'FETCH_DOGS'

export const fetchDogs = (breed, image) => (dispatch) => {
  request
    .get(`${baseUrl}/${breed}/${image}/random`)
    .then(response => dispatch({
      type: FETCH_DOGS,
      payload: { breed, image }
    }))
    .catch(err => alert(err))
}

// export const fetchAllProducts = () => (dispatch) => {
//   request
//     .get(`${baseUrl}/products`)
//     .then(response => dispatch({
//       type: FETCHED_ALL_PRODUCTS,
//       payload: response.body
//     }))
//     .catch(err => alert(err))
//
// }
