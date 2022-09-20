import Currency from "./Currency";
import { setActiveCurrency, toggleCurrencyRevealAC, getCurrencies } from "../../../redux/currency-reducer";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      currencies: state.currency.currencies,
      activeCurrency: state.currency.activeCurrency
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleCurrencyReveal: (isCurrencyRevealed) => dispatch(toggleCurrencyRevealAC(isCurrencyRevealed)),
      getCurrencies: () => dispatch(getCurrencies()),
      setActiveCurrency: (label, symbol) => dispatch(setActiveCurrency(label, symbol))
   }
}

const CurrencyContainer = connect(mapStateToProps, mapDispatchToProps)(Currency)

export default CurrencyContainer


