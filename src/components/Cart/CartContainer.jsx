import Cart from "./Cart";
import { compose } from 'redux'
import React, { Component } from 'react'
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal
   }

}




const CartContainer = connect(mapStateToProps, {
   toggleCartReveal: toggleCartRevealAC
})(Cart)

export default CartContainer



