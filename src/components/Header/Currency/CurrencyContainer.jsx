import Currency from "./Currency";
import { setActiveCurrency, toggleCurrencyRevealAC } from "../../../redux/currency-reducer";
import { connect } from 'react-redux'
import { getCurrencies } from "../../../redux/currency-reducer";

const mapStateToProps = (state) => {
   return {
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      currencies: state.currency.currencies,
      activeCurrency: state.currency.activeCurrency
   }
}

const CurrencyContainer = connect(mapStateToProps, {
   toggleCurrencyReveal: toggleCurrencyRevealAC,
   getCurrencies: getCurrencies,
   setActiveCurrency: setActiveCurrency
})(Currency)

export default CurrencyContainer


