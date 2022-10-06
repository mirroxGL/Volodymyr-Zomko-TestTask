import Cart from "./Cart";
import { setTotalPrice, toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import { setTotalPriceLogic } from "../../util/object-helpers";

class CartContainer extends PureComponent {
   toggleFalseRevealCart = () => {
      this.props.toggleCartReveal(false)
   }
   setTotalPrice = (items = this.props.items, activeCurrency = this.props.activeCurrency) => {
      this.props.setTotalPrice(activeCurrency.symbol, setTotalPriceLogic(items, activeCurrency).toFixed(2))
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
      totalPrice: state.cart.totalPrice
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      toggleCartReveal: (isCartRevealed) => dispatch(toggleCartRevealAC(isCartRevealed)),
      setTotalPrice: (symbol, price) => dispatch(setTotalPrice(symbol, price)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)



