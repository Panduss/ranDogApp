import { LIKE_DOG } from '../actions/addLike'

// const initialState = {
//   likes: []
// };

export default (state = [], { type, payload } = {} ) => {
  switch(type) {

    case LIKE_DOG :
      return state.concat(payload)

    default :
      return state
    }
  }
