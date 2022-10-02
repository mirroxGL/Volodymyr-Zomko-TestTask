import Header from "./Header";
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import { toggleCurrencyRevealAC } from "../../redux/currency-reducer";
import { getCategoriesTC, setActiveCategory } from "../../redux/header-reducer";
import { setActiveBodyCategory } from "../../redux/body-reducer";

import React, { Component } from 'react'

class HeaderContainer extends Component {
   setActiveCategories = (category) => {
      this.props.setActiveBodyCategory(category)
      this.props.setActiveCategory(category)
   }

   handleLogoClick = () => {
      this.props.toggleCartReveal(false)
      this.props.toggleCurrencyReveal(false)
      if (window.location.pathname.split("/")[1] !== "") {
         window.history.back()
         if (window.location.pathname === "/all" || window.location.pathname === "/clothes" || window.location.pathname === "/tech") {
            this.setActiveCategories(window.location.pathname.split("/")[1])
         }
      }
   }

   handleCartMouseClick = () => {
      this.props.toggleCurrencyReveal(false)
      this.props.toggleCartReveal(true)
      if (this.props.isToggleCartReveal) {
         this.props.toggleCartReveal(false)
      }
   }
   handleCurrencyMouseClick = () => {
      this.props.toggleCartReveal(false)
      this.props.toggleCurrencyReveal(true)
      if (this.props.isToggleCurrencyReveal) {
         this.props.toggleCurrencyReveal(false)
      }
   }

   handleCategoryClick = (category) => {
      this.setActiveCategories(category)
   }

   render() {
      return (
         <Header {...this.props}
            setActiveCategories={this.setActiveCategories}
            handleLogoClick={this.handleLogoClick}
            handleCategoryClick={this.handleCategoryClick}
            handleCurrencyMouseClick={this.handleCurrencyMouseClick}
            handleCartMouseClick={this.handleCartMouseClick} />
      )
   }
}


const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal,
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      itemsSumCount: state.cart.itemsSumCount,
      activeCategory: state.header.activeCategory,
      categories: state.header.categories,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleCartReveal: (isCartRevealed) => dispatch(toggleCartRevealAC(isCartRevealed)),
      toggleCurrencyReveal: (isCurrencyRevealed) => dispatch(toggleCurrencyRevealAC(isCurrencyRevealed)),
      setActiveCategory: (category) => dispatch(setActiveCategory(category)),
      setActiveBodyCategory: (category) => dispatch(setActiveBodyCategory(category)),
      getCategories: (categories) => dispatch(getCategoriesTC(categories)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)




