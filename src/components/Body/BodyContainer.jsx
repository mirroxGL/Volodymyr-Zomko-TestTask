
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


const BodyContainer = connect(mapStateToProps, {
   setBodyItems: setBodyItemsTC,
   setItemToCart: setItemToCart,
   setSumCountItems: setSumCountItems,
   addItem: addItem,
})(Body)

export default BodyContainer



