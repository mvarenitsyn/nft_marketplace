export const makeId = (length) => {
  let result = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const alphabetLenght = alphabet.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor((Math.random() * alphabetLenght)));
  }
  return result;
};
