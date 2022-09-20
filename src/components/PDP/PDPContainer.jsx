import { connect } from 'react-redux'
import { setSumCountItems, setItemToCart } from '../../redux/cart-reducer';
import { setPdpItemTC, clearItem, setActiveColor, setActiveSize, setActiveSecondOpt, setActiveFirstOpt } from '../../redux/pdp/actions';
import PDP from './PDP';

const mapStateToProps = (state) => ({
   items: state.cart.items,
   item: state.pdp.item,
   isPending: state.pdp.isPending,
   activeCurrency: state.currency.activeCurrency,
   activeColor: state.pdp.activeColor,
   activeSize: state.pdp.activeSize,
   activeFirstOpt: state.pdp.activeFirstOpt,
   activeSecondOpt: state.pdp.activeSecondOpt,
})

const mapDispatchToProps = (dispatch) => {
   return {
      setPdpItem: (itemId) => dispatch(setPdpItemTC(itemId)),
      clearItem: () => dispatch(clearItem()),
      setItemToCart: (item) => dispatch(setItemToCart(item)),
      setActiveColor: (color) => dispatch(setActiveColor(color)),
      setActiveSize: (size) => dispatch(setActiveSize(size)),
      setActiveSecondOpt: (opt) => dispatch(setActiveSecondOpt(opt)),
      setActiveFirstOpt: (opt) => dispatch(setActiveFirstOpt(opt)),
      setSumCountItems: (count) => dispatch(setSumCountItems(count)),
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(PDP)