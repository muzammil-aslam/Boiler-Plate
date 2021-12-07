import fristData from "../redux/action";
import secondData from "../redux/action";

function numberReducer(state, action) {
  switch (action.type) {
    case "loginData":
      return { ...state };
    case "signupData":
      return { ...state };
  }
}

export default numberReducer;
