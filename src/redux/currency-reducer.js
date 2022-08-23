import { bodyAPI } from "../api/api"

const TOGGLE_CURRENCY_REVEAL = "TOGGLE-CURRENCY-REVEAL"
const SET_CURRENCIES = "SET-CURRENCIES"

const SET_ACTIVE_CURRENCY = "SET-ACTIVE-CURRENCY"

let initialState = {
   currencies: {},
   isToggleCurrencyReveal: false,
   activeCurrency: { label: "USD", symbol: "$" },

}


const currencyReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_CURRENCY_REVEAL:
         return {
            ...state,
            isToggleCurrencyReveal: action.isCurrencyRevealed
         }
      case SET_CURRENCIES:
         return {
            ...state,
            currencies: action.currencies
         }

      case SET_ACTIVE_CURRENCY:
         return {
            ...state,
            activeCurrency: { ...state.activeCurrency, label: action.label, symbol: action.symbol }
         }
      default:
         return state
   }
}

export const toggleCurrencyRevealAC = (isCurrencyRevealed) => ({
   type: TOGGLE_CURRENCY_REVEAL,
   isCurrencyRevealed

})

export const setCurrencies = (currencies) => ({
   type: SET_CURRENCIES,
   currencies
})

export const setActiveCurrency = (label, symbol) => ({
   type: SET_ACTIVE_CURRENCY,
   label,
   symbol
})

export const getCurrencies = () => async (dispatch) => {
   let data = await bodyAPI.getCurrencies()

   if (data != undefined) {
      dispatch(setCurrencies(data.currencies))
   }
}


export default currencyReducer;