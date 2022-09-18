import Header from "./Header";
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import { toggleCurrencyRevealAC } from "../../redux/currency-reducer";
import { getCategoriesTC, setActiveCategory } from "../../redux/header-reducer";
import { setActiveBodyCategory } from "../../redux/body-reducer";
import { setPreviousUrl } from "../../redux/app-reducer";

const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal,
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      itemsSumCount: state.cart.itemsSumCount,
      activeCategory: state.header.activeCategory,
      categories: state.header.categories,
      previousUrl: state.app.previousUrl,
   }
}

const HeaderContainer = connect(mapStateToProps, {
   setPreviousUrl: setPreviousUrl,
   toggleCartReveal: toggleCartRevealAC,
   toggleCurrencyReveal: toggleCurrencyRevealAC,
   setActiveCategory: setActiveCategory,
   setActiveBodyCategory: setActiveBodyCategory,
   getCategories: getCategoriesTC,
})(Header)

export default HeaderContainer



