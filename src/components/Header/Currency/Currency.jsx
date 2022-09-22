import s from "./Currency.module.css"
import classnames from 'classnames';
import React, { PureComponent } from 'react'

export default class Currency extends PureComponent {
   componentDidMount = () => {
      this.props.getCurrencies()
   }

   clickHandler = (label, symbol) => {
      this.props.setActiveCurrency(label, symbol)
   }
   render() {
      const {
         isToggleCurrencyReveal,
         activeCurrency: { label },
         currencies
      } = this.props
      return (
         isToggleCurrencyReveal ? < div className={s.currency} >
            {currencies?.map((value, i) => <div key={i} onClick={() => this.clickHandler(value.label, value.symbol)} className={classnames(s.currencyItem, label === value.label ? s.activeCurrency : 1)}><span>{value.symbol} {value.label}</span></div>)}
         </div > : ""
      )
   }
}
