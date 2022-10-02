import { connect } from 'react-redux'
import { setSumCountItems, setItemToCart, addItem } from '../../redux/cart-reducer';
import { setPdpItemTC, clearItem } from '../../redux/pdp/actions';
import PDP from './PDP';
import React, { Component } from 'react'
import { setPrices } from '../../util/object-helpers';

class PDPContainer extends Component {
   isDuplicate = (item) => {
      return item.id === this.props.item?.product.id &&
         item.activeAttributes.activeColor === this.props.activeColor &&
         item.activeAttributes.activeSize === this.props.activeSize &&
         item.activeAttributes.activeFirstOpt === this.props.activeFirstOpt &&
         item.activeAttributes.activeSecondOpt === this.props.activeSecondOpt
   }

   setItemToCart = (item) => {
      if (this.props.cartItems.some(this.isDuplicate)) {
         this.props.cartItems.forEach(i => {
            if (this.isDuplicate(i))
               (i.activeAttributes.itemCount += 1)
         }
         )
      }
      else {
         item?.inStock && this.props.setItemToCart({
            ...item, activeAttributes: {
               ...item.activeAttributes = {
                  activeColor: this.props.activeColor,
                  activeSize: this.props.activeSize,
                  activeFirstOpt: this.props.activeFirstOpt,
                  activeSecondOpt: this.props.activeSecondOpt,
                  itemCount: 1,
                  displayPrice: setPrices(this.props.item.product.prices, this.props.activeCurrency)
               }
            }
         })
      }
      item?.inStock && this.props.addItem()
   }
   render() {
      return (
         <PDP {...this.props} setPrices={setPrices} isDuplicate={this.isDuplicate} setItemToCart={this.setItemToCart} />
      )
   }
}

const mapStateToProps = (state) => ({
   cartItems: state.cart.items,
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
      addItem: () => dispatch(addItem()),
      setPdpItem: (itemId) => dispatch(setPdpItemTC(itemId)),
      clearItem: () => dispatch(clearItem()),
      setItemToCart: (item) => dispatch(setItemToCart(item)),
      setSumCountItems: (count) => dispatch(setSumCountItems(count)),
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(PDPContainer)