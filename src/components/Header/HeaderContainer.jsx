import Header from "./Header";
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import { toggleCurrencyRevealAC } from "../../redux/currency-reducer";
import { getCategoriesTC, setActiveCategory } from "../../redux/header-reducer";
import { setActiveBodyCategory } from "../../redux/body-reducer";
import React, { PureComponent } from 'react'

class HeaderContainer extends PureComponent {
   setActiveCategories = (category) => {
      const { setActiveBodyCategory, setActiveCategory } = this.props

      setActiveBodyCategory(category)
      setActiveCategory(category)
   }

   handleLogoClick = () => {
      const { toggleCartReveal, toggleCurrencyReveal } = this.props
      const { pathname } = window.location

      toggleCartReveal(false)
      toggleCurrencyReveal(false)
      if (pathname.split("/")[1] !== "") {
         window.history.back()
         if (pathname === "/all" || pathname === "/clothes" || pathname === "/tech") {
            this.setActiveCategories(pathname.split("/")[1])
         }
      }
   }

   handleCartMouseClick = () => {
      const { toggleCurrencyReveal, toggleCartReveal, isToggleCartReveal } = this.props

      toggleCurrencyReveal(false)
      toggleCartReveal(true)
      if (isToggleCartReveal) {
         toggleCartReveal(false)
      }
   }
   handleCurrencyMouseClick = () => {
      const { toggleCurrencyReveal, toggleCartReveal, isToggleCurrencyReveal } = this.props
      toggleCartReveal(false)
      toggleCurrencyReveal(true)
      if (isToggleCurrencyReveal) {
         toggleCurrencyReveal(false)
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




