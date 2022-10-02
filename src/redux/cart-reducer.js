const TOGGLE_CART_REVEAL = "TOGGLE_CART_REVEAL"
const SET_ITEM_TO_CART = "SET_ITEM_TO_CART"
const SET_SUM_COUNT_ITEMS = "SET_SUM_COUNT_ITEMS"
const ADD_ITEM = "ADD_ITEM"
const SUBSTRACT_ITEM = "SUBTRACT_ITEM"
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
const SET_TAXES = "SET_TAXES"


let initialState = {
   isToggleCartReveal: false,
   items: [],
   itemsSumCount: 0,
   totalPrice: undefined,
   taxes: undefined
}


const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_CART_REVEAL:
         return {
            ...state,
            isToggleCartReveal: action.isCartRevealed
         }
      case SET_ITEM_TO_CART:
         return {
            ...state,
            items: [...state.items, action.item]
         }
      case SET_SUM_COUNT_ITEMS:
         return {
            ...state,
            itemsSumCount: action.count
         }
      case ADD_ITEM:
         return {
            ...state,
            itemsSumCount: state.itemsSumCount + 1
         }
      case SUBSTRACT_ITEM:
         if (state.itemsSumCount <= 0) {
            return { ...state, itemsSumCount: 0 }
         }
         return {
            ...state,
            itemsSumCount: state.itemsSumCount - 1
         }
      case SET_TOTAL_PRICE:
         return {
            ...state,
            totalPrice: { price: action.price, symbol: action.symbol }
         }
      case SET_TAXES:
         return {
            ...state,
            taxes: { symbol: action.symbol, amount: action.amount }
         }


      default:
         return state
   }
}

export const toggleCartRevealAC = (isCartRevealed) => ({
   type: TOGGLE_CART_REVEAL,
   isCartRevealed

})

export const setItemToCart = (item) => ({
   type: SET_ITEM_TO_CART,
   item

})

export const setSumCountItems = (count) => ({
   type: SET_SUM_COUNT_ITEMS,
   count

})

export const setTotalPrice = (symbol, price) => ({
   type: SET_TOTAL_PRICE,
   symbol,
   price,

})

export const setTaxes = (symbol, amount) => ({
   type: SET_TAXES,
   symbol,
   amount,

})

export const addItem = () => ({
   type: ADD_ITEM,

})
export const substractItem = () => ({
   type: SUBSTRACT_ITEM,

})




export default cartReducer;