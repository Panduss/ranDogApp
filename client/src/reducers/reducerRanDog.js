import { FETCH_DOGS } from '../actions/page'

export default (state = [], action = {} ) => {
  switch(action.type) {
    case FETCH_DOGS :
      return action.payload
    default :
      return state
    }
  }
