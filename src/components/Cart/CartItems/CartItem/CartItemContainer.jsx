import React, { PureComponent } from 'react'
import { addItem, substractItem } from '../../../../redux/cart-reducer'
import { connect } from 'react-redux'
import CartItem from './CartItem'

class CartItemContainer extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         itemCount: 0
      }
   }
   incrItem = (item) => {
      item.activeAttributes.itemCount += 1
      this.setState({ itemCount: this.state.itemCount + 1 })
      this.props.addItem()
   }
   decrItem = (item) => {
      item.activeAttributes.itemCount -= 1
      this.setState({ itemCount: this.state.itemCount - 1 })
      this.props.substractItem()
   }
   render() {
      return (
         this.props.item.activeAttributes.itemCount !== 0 &&
         <CartItem {...this.props} decrItem={this.decrItem} incrItem={this.incrItem} setPrices={this.setPrices} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer)