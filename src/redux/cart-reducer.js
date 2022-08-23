
const TOGGLE_CART_REVEAL = "TOGGLE-CART-REVEAL"

let initialState = {
   isToggleCartReveal: false
}


const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_CART_REVEAL:
         return {
            ...state,
            isToggleCartReveal: action.isCartRevealed
         }
      default:
         return state
   }
}

export const toggleCartRevealAC = (isCartRevealed) => ({
   type: TOGGLE_CART_REVEAL,
   isCartRevealed

})


export default cartReducer;