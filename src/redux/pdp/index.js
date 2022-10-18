import {
   SET_ITEM,
   SET_PENDING,
   CLEAR_ITEM,
   SET_ACTIVE_COLOR,
   SET_ACTIVE_SIZE,
   SET_ACTIVE_FIRST_OPT,
   SET_ACTIVE_SECOND_OPT,
} from "./types.js"

let initialState = {
   item: undefined,
   activeColor: undefined,
   activeSize: undefined,
   activeFirstOpt: undefined,
   activeSecondOpt: undefined,
   isPending: false,
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
            item: undefined,
            activeColor: undefined,
            activeSize: undefined,
            activeFirstOpt: undefined,
            activeSecondOpt: undefined,
            activeImage: undefined,
         }
      case SET_PENDING:
         return {
            ...state,
            isPending: action.payload
         }
      case SET_ACTIVE_COLOR:
         return {
            ...state,
            activeColor: action.payload
         }
      case SET_ACTIVE_SIZE:
         return {
            ...state,
            activeSize: action.payload
         }
      case SET_ACTIVE_FIRST_OPT:
         return {
            ...state,
            activeFirstOpt: action.payload
         }
      case SET_ACTIVE_SECOND_OPT:
         return {
            ...state,
            activeSecondOpt: action.payload
         }
      default:
         return state
   }
}

export default pdpReducer
