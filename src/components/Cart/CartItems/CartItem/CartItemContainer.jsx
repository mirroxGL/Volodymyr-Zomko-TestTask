import React, { PureComponent } from 'react'
import { addItem, substractItem } from '../../../../redux/cart-reducer'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { decrItem, incrItem } from '../../../../util/object-helpers'

class CartItemContainer extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         itemCount: 1
      }
   }

   render() {
      const { itemCount } = this.props.item.activeAttributes

      return (
         itemCount !== 0 &&
         <CartItem {...this.props}
            decrItem={decrItem.bind(this)}
            incrItem={incrItem.bind(this)}
            itemCount={this.state.itemCount}
            setPrices={this.setPrices} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      activeColor: state.pdp.activeColor,
      activeSize: state.pdp.activeSize,
      activeFirstOpt: state.pdp.activeFirstOpt,
      activeSecondOpt: state.pdp.activeSecondOpt,
      activeCurrency: state.currency.activeCurrency,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addItem: () => dispatch(addItem()),
      substractItem: () => dispatch(substractItem()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer)