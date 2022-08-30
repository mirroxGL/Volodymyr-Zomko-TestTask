import Header from "./Header";
import { compose } from 'redux'
import React, { Component } from 'react'
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import { toggleCurrencyRevealAC } from "../../redux/currency-reducer";
import { getCategoriesTC, setActiveCategory } from "../../redux/header-reducer";
import { setActiveBodyCategory } from "../../redux/body-reducer";



const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal,
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      itemsSumCount: state.cart.itemsSumCount,
      activeCategory: state.header.activeCategory,
      categories: state.header.categories
   }

}




const HeaderContainer = connect(mapStateToProps, {
   toggleCartReveal: toggleCartRevealAC,
   toggleCurrencyReveal: toggleCurrencyRevealAC,
   setActiveCategory: setActiveCategory,
   setActiveBodyCategory: setActiveBodyCategory,
   getCategories: getCategoriesTC,
})(Header)

export default HeaderContainer



