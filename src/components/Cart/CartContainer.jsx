import Cart from "./Cart";
import { addItem, substractItem, toggleCartRevealAC, setTotalPrice } from "../../redux/cart-reducer";
import { connect } from 'react-redux'

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
const mapDispatchToProps = (dispatch) => {
   return {
      setTotalPrice: (symbol, price) => dispatch(setTotalPrice(symbol, price)),
      addItem: () => dispatch(addItem()),
      substractItem: () => dispatch(substractItem()),
      toggleCartReveal: (isCartRevealed) => dispatch(toggleCartRevealAC(isCartRevealed)),
   }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer



