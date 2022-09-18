const SET_PREVIOUS_URL = "SET_PREVIOUS_URL"


let initialState = {
   previousUrl: "/"
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PREVIOUS_URL:
         return {
            ...state,
            previousUrl: action.url
         }
      default:
         return state
   }
}

export const setPreviousUrl = (url) => ({
   type: SET_PREVIOUS_URL,
   url
})

export default appReducer;