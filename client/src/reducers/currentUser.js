import { USER_LOGIN_SUCCESS } from '../actions/users'

export default function(state = [], action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload

    default:
      return state
  }
}
