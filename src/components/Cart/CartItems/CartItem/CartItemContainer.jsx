import React, { PureComponent } from 'react'
import { addItem, substractItem } from '../../../../redux/cart-reducer'
import { connect } from 'react-redux'
import CartItem from './CartItem'
class CartItemContainer extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         itemCount: 1
      }
   }
   decrItem = (item) => {
      item.activeAttributes.itemCount -= 1
      this.setState({ itemCount: this.state.itemCount - 1 })
      this.props.substractItem()
   }
   incrItem = (item) => {
      item.activeAttributes.itemCount += 1
      this.setState({ itemCount: this.state.itemCount + 1 })
      this.props.addItem()

   }

   render() {
      return (
         this.props.item.activeAttributes.itemCount !== 0 &&
         <CartItem {...this.props}
            decrItem={this.decrItem}
            incrItem={this.incrItem}
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