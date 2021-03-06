import * as request from 'superagent'

export const FETCH_DOGS = 'FETCH_DOGS'
export const LOGIN = 'LOGIN'
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
      payload: {name: response.body.message.split('\/')[4], pic: response.body.message.split('\/').join('/')}
    }))
    .catch(err => alert(err))

}


export const doglikes = (userId, breed) => (dispatch, getState) => {

  const state = getState()
  const userId = state.currentUser.id
  const breed = state.ranDog.name

  request
    .post(`${DBUrl}/doglikes`)
    .send({ userId, breed })
    .then()
}



export const showMatches = (response) => (dispatch) => {

  request
    .get(`${DBUrl}/doglikes`)
    .then(result => {
    console.log(result.body);
      dispatch({
        type: MATCH,
        payload: result.body
      })
    })
}
