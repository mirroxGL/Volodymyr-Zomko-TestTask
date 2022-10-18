import { connect } from 'react-redux'
import Body from "./Body";
import { setBodyItemsTC } from "../../redux/body-reducer";

const mapStateToProps = (state) => {
   return {
      items: state.body.items,
      activeCategory: state.header.activeCategory,
      activeBodyCategory: state.body.activeBodyCategory
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      setBodyItems: (items, category) => dispatch(setBodyItemsTC(items, category)),
   }
}

const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body)

export default BodyContainer



