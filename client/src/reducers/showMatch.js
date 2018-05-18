import { MATCH } from '../actions/page'

export default function(state = [], action = {} ) {
  switch (action.type) {
    case MATCH:
    if (action.payload.id === state.id) {
      const likeCount = action.payload.likes.filter(like => like.userid == action.payload.currentUser).length
      return {
        dogObject: action.payload,
        numberOfLikesCurrentUser: likeCount
      }
    }

    default:
      return state
  }
}
