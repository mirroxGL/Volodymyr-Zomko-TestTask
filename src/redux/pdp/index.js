import {
   SET_ITEM,
   SET_PENDING,
   CLEAR_ITEM
} from "./types.js"

let initialState = {
   item: undefined,
   isPending: false
}

const pdpReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ITEM:
         return {
            ...state,
            item: action.payload
         }
      case CLEAR_ITEM:
         return {
            ...state,
            item: undefined
         }
      case SET_PENDING:
         return {
            ...state,
            isPending: action.payload
         }
      default:
         return state
   }
}

export default pdpReducer
