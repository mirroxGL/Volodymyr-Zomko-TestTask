
import { toggleCartRevealAC } from "../../redux/cart-reducer";
import { connect } from 'react-redux'
import Body from "./Body";
import { setBodyItemsTC } from "../../redux/body-reducer";
import { setItemId } from "../../redux/pdp-reducer";



const mapStateToProps = (state) => {
   return {
      items: state.body.items,
      activeCurrency: state.currency.activeCurrency,
   }

}


const BodyContainer = connect(mapStateToProps, {
   setBodyItems: setBodyItemsTC,
   setItemId: setItemId,
})(Body)

export default BodyContainer



