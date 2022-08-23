import { toggleCartRevealAC } from "./redux/cart-reducer";
import { connect } from 'react-redux'
import App from "./App";
import { toggleCurrencyRevealAC } from "./redux/currency-reducer";



const mapStateToProps = (state) => {
   return {
      isToggleCartReveal: state.cart.isToggleCartReveal,
      isToggleCurrencyReveal: state.currency.isToggleCurrencyReveal,
      currentItemId: state.pdp.currentItemId
   }

}




const AppContainer = connect(mapStateToProps, {
   toggleCartReveal: toggleCartRevealAC,
   toggleCurrencyReveal: toggleCurrencyRevealAC
})(App)

export default AppContainer

