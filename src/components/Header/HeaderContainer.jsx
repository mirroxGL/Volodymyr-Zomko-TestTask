import Header from "./Header";
import { compose } from 'redux'
import React, { Component } from 'react'
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import { toggleCurrencyRevealAC } from "../../redux/currency-reducer";



const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal,
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      itemsSumCount: state.cart.itemsSumCount,
   }

}




const HeaderContainer = connect(mapStateToProps, {
   toggleCartReveal: toggleCartRevealAC,
   toggleCurrencyReveal: toggleCurrencyRevealAC
})(Header)

export default HeaderContainer



