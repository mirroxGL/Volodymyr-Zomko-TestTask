import Currency from "./Currency";
import { setActiveCurrency, toggleCurrencyRevealAC, getCurrencies } from "../../../redux/currency-reducer";
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'

class CurrencyContainer extends PureComponent {
   clickHandler = (label, symbol) => {
      const { setActiveCurrency } = this.props

      setActiveCurrency(label, symbol)
   }
   render() {
      return (
         <Currency {...this.props} clickHandler={this.clickHandler} />
      )
   }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer)



