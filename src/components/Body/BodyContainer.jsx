import { addItem, setItemToCart, setSumCountItems } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import Body from "./Body";
import { setBodyItemsTC } from "../../redux/body-reducer";

const mapStateToProps = (state) => {
   return {
      items: state.body.items,
      cartItems: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
      activeCategory: state.header.activeCategory,
      activeBodyCategory: state.body.activeBodyCategory
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      setBodyItems: (items, category) => dispatch(setBodyItemsTC(items, category)),
      setItemToCart: (item) => dispatch(setItemToCart(item)),
      setSumCountItems: (count) => dispatch(setSumCountItems(count)),
      addItem: () => dispatch(addItem()),
   }
}


const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body)

export default BodyContainer



