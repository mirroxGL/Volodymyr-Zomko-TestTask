import React, { Component } from 'react'
import CartItems from "./CartItems";

export default class CartItemsContainer extends Component {
   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol === activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }
   }
   render() {
      return (
         <CartItems {...this.props} setPrices={this.setPrices} />
      )
   }
}








