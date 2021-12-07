export function fristData() {
  return (dispatch) => {
    dispatch({
      type: "loginData",
    });
  };
}
export function secondData() {
  return (dispatch) => {
    dispatch({
      type: "signupData",
    });
  };
}
