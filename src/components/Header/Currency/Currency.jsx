import s from "./Currency.module.css"
import classNames from "classnames";

import classnames from 'classnames';
import React, { Component } from 'react'

export default class Currency extends Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.getCurrencies()
   }

   clickHandler = (label, symbol) => {
      this.props.setActiveCurrency(label, symbol)


   }



   render() {
      return (
         this.props.isToggleCurrencyReveal ? < div className={s.currency} >
            {this.props.currencies?.map((value, i) => <div onClick={() => this.clickHandler(value.label, value.symbol)} className={classnames(s.currencyItem, this.props.activeCurrency.label == value.label ? s.activeCurrency : 1)}><span>{value.symbol} {value.label}</span></div>)}
         </div > : ""
      )
   }
}
