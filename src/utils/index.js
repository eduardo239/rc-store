// check if passwords match and if they are long enough
export const checkPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return false;
  }
  if (password.length < 3) {
    return false;
  }
  return true;
};
