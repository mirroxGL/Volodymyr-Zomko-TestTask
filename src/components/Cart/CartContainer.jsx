import Cart from "./Cart";
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'

import React, { Component } from 'react'

class CartContainer extends Component {
   toggleFalseRevealCart = () => {
      this.props.toggleCartReveal(false)
   }
   setTotalPrice = (items, activeCurrency) => {
      let sum = 0
      let num = 0
      for (let i = 0; i < items.length; i++) {
         let price = items[i].prices.find(({ currency }) => currency.label === activeCurrency.label)
         num = price.amount * items[i].activeAttributes.itemCount
         sum += num
      }
      return <span>{activeCurrency.symbol} {sum.toFixed(2)}</span>
   }
   render() {

      return (
         <Cart {...this.props} setTotalPrice={this.setTotalPrice} toggleFalseRevealCart={this.toggleFalseRevealCart} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal,
      itemsSumCount: state.cart.itemsSumCount,
      items: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      toggleCartReveal: (isCartRevealed) => dispatch(toggleCartRevealAC(isCartRevealed)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)



