import axios from "axios";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const loginUser = async (loginData, authDispatch, toast) => {
  try {
    const {
      status,
      data: { encodedToken, foundUser },
    } = await axios.post("api/auth/login", loginData);
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPES.SET_USER, payload: foundUser });
    }
  } catch (error) {
    console.log(error);
    toast.error(`${error.response.data.errors[0]}`);
  }
};

export const signupUser = async (loginData, authDispatch, toast) => {
  try {
    const {
      status,
      data: { encodedToken, createdUser },
    } = await axios.post("api/auth/signup", loginData);
    if (status === 201) {
      authDispatch({ type: ACTION_TYPES.SET_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPES.SET_USER, payload: createdUser });
    }
  } catch (error) {
    console.log(error);
    toast.error(`${error.response.data.errors[0]}`);
  }
};
