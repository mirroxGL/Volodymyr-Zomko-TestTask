import { bodyAPI } from "../api/api"
const SET_BODY_ITEMS = "SET-BODY-ITEMS"

let initialState = {
   items: []
}


const bodyReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_BODY_ITEMS:
         return {
            ...state,

            items: action.items.categories[0].products
         }
      default:
         return state
   }
}

export const setBodyItems = (items) => ({
   type: SET_BODY_ITEMS,
   items
})

export const setBodyItemsTC = () => async (dispatch) => {
   let data = await bodyAPI.getBodyItems()
   if (data != undefined) {
      dispatch(setBodyItems(data))
   }


}




export default bodyReducer;