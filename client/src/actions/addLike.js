export const LIKE_DOG = 'LIKE_DOG';

export default (name) => {
  return {
    type: LIKE_DOG,
    payload: {name}
  }
}
