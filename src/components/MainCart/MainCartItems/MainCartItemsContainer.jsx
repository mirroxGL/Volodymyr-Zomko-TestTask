import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addItem, substractItem } from '../../../redux/cart-reducer'
import MainCartItems from './MainCartItems'

class MainCartItemsContainer extends PureComponent {
   render() {
      return (
         <MainCartItems {...this.props} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
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
      addItem: () => dispatch(addItem()),
      substractItem: () => dispatch(substractItem()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCartItemsContainer)