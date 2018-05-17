import { MATCH } from '../actions/page'

export default function(state = [], action) {
  switch (action.type) {
    case MATCH:
    if (action.payload.id === state.id) {
      return action.payload
    }

    default:
      return state
  }
}
