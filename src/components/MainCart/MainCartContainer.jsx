import { connect } from 'react-redux'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../redux/pdp/actions';
import { addItem, setSumCountItems, setTaxes, setTotalPrice, substractItem } from '../../redux/cart-reducer';
import MainCart from './MainCart.jsx';

const mapStateToProps = (state) => {
   return {
      taxes: state.cart.taxes,
      itemsSumCount: state.cart.itemsSumCount,
      items: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
      activeColor: state.pdp.activeColor,
      activeSize: state.pdp.activeSize,
      activeFirstOpt: state.pdp.activeFirstOpt,
      activeSecondOpt: state.pdp.activeSecondOpt,
      totalPrice: state.cart.totalPrice
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      setTotalPrice: (symbol, price) => dispatch(setTotalPrice(symbol, price)),
      setSumCountItems: (count) => dispatch(setSumCountItems(count)),
      addItem: () => dispatch(addItem()),
      substractItem: () => dispatch(substractItem()),
      setActiveColor: (color) => dispatch(setActiveColor(color)),
      setActiveSize: (size) => dispatch(setActiveSize(size)),
      setActiveSecondOpt: (opt) => dispatch(setActiveSecondOpt(opt)),
      setActiveFirstOpt: (opt) => dispatch(setActiveFirstOpt(opt)),
      setTaxes: (symbol, amount) => dispatch(setTaxes(symbol, amount)),
   }
}

export const MainCartContainer = connect(mapStateToProps, mapDispatchToProps)(MainCart)