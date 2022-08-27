import Cart from "./Cart";
import { compose } from 'redux'
import React, { Component } from 'react'
import { addItem, setSumCountItems, setItemToCart, substractItem, toggleCartRevealAC, setTotalPrice } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from "../../redux/pdp/actions";




const mapStateToProps = (state) => {
   return {
      totalPrice: state.cart.totalPrice,
      isToggleCartReveal: state.cart.isToggleCartReveal,
      itemsSumCount: state.cart.itemsSumCount,
      items: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
      activeColor: state.pdp.activeColor,
      activeSize: state.pdp.activeSize,
      activeFirstOpt: state.pdp.activeFirstOpt,
      activeSecondOpt: state.pdp.activeSecondOpt,
   }

}




const CartContainer = connect(mapStateToProps, {
   setTotalPrice: setTotalPrice,
   setSumCountItems: setSumCountItems,
   addItem: addItem,
   substractItem: substractItem,
   toggleCartReveal: toggleCartRevealAC,
   setItemToCart: setItemToCart,
   setActiveColor: setActiveColor,
   setActiveSize: setActiveSize,
   setActiveSecondOpt: setActiveSecondOpt,
   setActiveFirstOpt: setActiveFirstOpt,
})(Cart)

export default CartContainer



