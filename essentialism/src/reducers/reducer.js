import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../components/Login"
import { USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from "../components/Register"
import { GET_VALUES_START, GET_VALUES_SUCCESS, GET_VALUES_FAILURE } from "../components/Values"

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: "",
  message: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: "",
        message: action.payload
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Your username or your password is incorrect."
      }
    case USER_REGISTER_START:
      return {
        ...state,
        isLoading: true
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
      }
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "There was an error registering."
      }
    case GET_VALUES_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_VALUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
      }
    case GET_VALUES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "error getting values."
      }
    default: return state
  }
}