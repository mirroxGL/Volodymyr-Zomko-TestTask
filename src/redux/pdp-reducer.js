import { pdpAPI } from "../api/api"
import c from "../../src/assets/images/Product B.png"

const SET_ITEM_ID = "SET-ITEM-ID"

const SET_ITEM = "SET-ITEM"

const CLEAR_ITEM = "CLEAR-ITEM"

let initialState = {
   currentItemId: "",
   item: {}
}


const pdpReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ITEM_ID:
         return {
            ...state,
            currentItemId: action.currentItemId
         }

      case SET_ITEM:
         return {
            ...state,
            item: action.item
         }

      case CLEAR_ITEM:
         return {
            ...state,
            item: {}
         }


      default:
         return state
   }
}

export const setItemId = (currentItemId) => ({
   type: SET_ITEM_ID,
   currentItemId

})

export const setItem = (item) => ({
   type: SET_ITEM,
   item

})

export const clearItem = () => ({
   type: CLEAR_ITEM,


})


export const setPdpItemTC = (itemId) => async (dispatch) => {
   let data = await pdpAPI.getPdpItem(itemId)
   if (data != undefined) {
      dispatch(setItem(data))

   }


}




export default pdpReducer;