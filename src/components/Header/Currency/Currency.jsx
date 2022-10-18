import s from "./Currency.module.css"
import classnames from 'classnames';
import React, { PureComponent } from 'react'

export default class Currency extends PureComponent {
   componentDidMount = () => {
      const { getCurrencies } = this.props

      getCurrencies()
   }

   render() {
      const {
         isToggleCurrencyReveal,
         activeCurrency: { label },
         currencies,
         clickHandler
      } = this.props
      return (
         isToggleCurrencyReveal ? < div className={s.currency} >
            {currencies?.map((value, i) => <button key={i} onClick={() => clickHandler(value.label, value.symbol)} className={classnames(s.currencyItem, label === value.label && s.activeCurrency)}><span>{value.symbol} {value.label}</span></button>)}
         </div > : ""
      )
   }
}
