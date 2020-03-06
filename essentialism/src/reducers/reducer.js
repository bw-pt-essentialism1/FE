import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../components/Login"
import { USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from "../components/Register"
import { GET_VALUES_START, GET_VALUES_SUCCESS, GET_VALUES_FAILURE } from "../components/Values"
import { POST_VALUES_START, POST_VALUES_SUCCESS, POST_VALUES_FAILURE } from "../components/Values"
import { POST_FAVORITE_VALUES_START, POST_FAVORITE_VALUES_SUCCESS, POST_FAVORITE_VALUES_FAILURE } from "../components/PickValues"

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: "",
  message: "",
  user_id: null,
  token: null
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
        message: action.payload,
        user_id: action.user_id,
        token: action.token
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
    case POST_VALUES_START:
      return {
        ...state,
        isLoading: true
      }
    case POST_VALUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
      }
    case POST_VALUES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "error adding value."
      }
    case POST_FAVORITE_VALUES_START:
      return {
        ...state,
        isLoading: true
      }
    case POST_FAVORITE_VALUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
      }
    case POST_FAVORITE_VALUES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "error adding favorite value."
      }
    default: return state
  }
}