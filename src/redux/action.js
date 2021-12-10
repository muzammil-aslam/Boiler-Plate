export function loginDa(data) {
  return (dispatch) => {
    dispatch({
      type: "loginData",
      data,
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
