import { bodyAPI } from "../api/api"
const SET_BODY_ITEMS = "SET-BODY-ITEMS"
const SET_ACTIVE_BODY_CATEGORY = "SET_ACTIVE_BODY_CATEGORY"

const urlCategory = window.location.href.split("http://localhost:3000/")[1]

let initialState = {
   items: [],
   activeBodyCategory: urlCategory || "all"
}


const bodyReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_BODY_ITEMS:
         return {
            ...state,
            items: action.items.categories.filter(c => c.name === action.category)[0]?.products
         }
      case SET_ACTIVE_BODY_CATEGORY:
         return {
            ...state,
            activeBodyCategory: action.category
         }
      default:
         return state
   }
}

export const setBodyItems = (items, category) => ({
   type: SET_BODY_ITEMS,
   items,
   category
})
export const setActiveBodyCategory = (category) => ({
   type: SET_ACTIVE_BODY_CATEGORY,
   category
})

export const setBodyItemsTC = (index) => async (dispatch) => {
   let data = await bodyAPI.getBodyItems()
   if (data !== undefined) {
      dispatch(setBodyItems(data, index))
   }


}




export default bodyReducer;