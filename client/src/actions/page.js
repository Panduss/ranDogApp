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
      // from the base url you getmessage back as response which is an object
      // if you see how it looks like, the object kind of split into keys and
      // we get back the 3rd and 4th key from it this way.
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

  // const state = getState()
  // const userId = state.currentUser.id
  // const dogObject = state.dogObject

  request
  .get(`${DBUrl}/doglikes`)
  //.send({userID: dogObject.userId, kind: dogObject.breed })
  .then(result => {
    console.log(result.body);
      dispatch({
        type: MATCH,
        payload: result.body
      })
    }
  )
}

// export const showMatches = (response) => (dispatch) => {
//
//   // const state = getState()
//   // const userId = state.currentUser.id
//   // const dogObject = state.dogObject
//
//   request
//   .get(`${DBUrl}/doglikes`)
//   //.send({userID: dogObject.userId, kind: dogObject.breed })
//   .then(result => {
//     console.log(result.body);
//       dispatch({
//         type: MATCH,
//         payload: {userId: result.body.entries(doglikes.userid), breed: result.body.entries('breed')}
//       })
//     }
//   )
// }

// export const showMatches = (response) => (dispatch) => {
//
//   // const state = getState()
//   // const userId = state.currentUser.id
//   // const dogObject = state.dogObject
//
//   request
//   .get(`${DBUrl}/doglikes`)
//   //.send({userID: dogObject.userId, kind: dogObject.breed })
//   .then(result => {
//     console.log(result.body);
//       dispatch({
//         type: MATCH,
//         payload: {userId: result.body[1], breed: result.body[2]}
//       })
//     }
//   )
// }
