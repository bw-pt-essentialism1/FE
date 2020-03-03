
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: "",
  email: "",
  password: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HELLO":
      return {
        ...state,

      }
    default: return state
  }
}