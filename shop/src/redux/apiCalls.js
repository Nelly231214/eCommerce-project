import { loginFailure, loginStart, loginSuccess,logoutStart,registerFailure, registerSuccess, registerStart} from "./userRedux";
import { publicRequest } from "../requestMethods";
//LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    
  } catch (err) {
    dispatch(loginFailure());
  }
  
};

export const logout = async (dispatch, user) => {
  console.log(222)
  dispatch(logoutStart());
};

//REGISTER

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res.data.accesToken)
  } catch (err) {
    dispatch(registerFailure());
  }
};