export const LOGIN = 'LOGIN'

export function login(dogURL) {
  return {
    type: LOGIN,
    payload: dogURL
  }
}
