import * as request from 'superagent'

export const FETCH_DOGS = 'FETCH_DOGS'
export const LOGIN = 'LOGIN'
export const LIKED_DOG = 'LIKED_DOG'
export const MATCH = 'MATCH'

export function login(DBUrl) {
  return {
    type: LOGIN,
    payload: DBUrl
  }
}

const DBUrl = 'http://localhost:4001'
const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const fetchDogs = (response) => (dispatch) => {
  request
    .get(`${baseUrl}`)
    .then(response => dispatch({
      type: FETCH_DOGS,
      // from the base url you getmessage back as response which is an object
      // if you see how it looks like, the object kind of split into keys and
      // we get back the 3rd and 4th key from it this way.
      payload: {name: response.body.message.split('\/')[4], pic: response.body.message.split('\/').join('/')}
    }))
    .catch(err => alert(err))

}

// export const dogLikes = (breed) => (dispatch) => {
//   request
//   .post(`${DBUrl}/doglikes`)
//   .send({breed: 'doog'})
//   .then(response => alert(JSON.stringify(response.body)))
// }
//
export const showMatches = (response) => (dispatch) => {

  request
  .get(`${DBUrl}/doglikes`)
  .then(result => {
    console.log(result.body);
      dispatch({
        type: MATCH,
        payload: result.body,
      })
    }
  )
}
