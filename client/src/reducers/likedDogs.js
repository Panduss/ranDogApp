import { FETCH_DOGS } from '../actions/page'
import { LIKED_DOG } from '../actions/page'

export default (state = [], action = {} ) => {
  switch(action.type) {
    case FETCH_DOGS && LIKED_DOG :
      return state.concat(action.payload);
    default :
      return state
    }
  }
