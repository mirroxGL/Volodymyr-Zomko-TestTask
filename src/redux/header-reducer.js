import { headerAPI } from "../api/api"
const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY"
const SET_CATEGORIES = "SET_CATEGORIES"

const urlCategory = window.location.href.split("http://localhost:3000/")[1]

let initialState = {
   categories: undefined,
   activeCategory: urlCategory || "all"
}


const headerReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_CATEGORIES:
         return {
            ...state,
            categories: action.categories
         }
      case SET_ACTIVE_CATEGORY:
         return {
            ...state,
            activeCategory: action.category
         }
      default:
         return state
   }
}

export const setActiveCategory = (category) => ({
   type: SET_ACTIVE_CATEGORY,
   category
})

export const setCategories = (categories) => ({
   type: SET_CATEGORIES,
   categories
})

export const getCategoriesTC = () => async (dispatch) => {
   let data = await headerAPI.getCategories()
   if (data !== undefined) {
      dispatch(setCategories(data.categories))
   }
}

export default headerReducer;