import { connect } from 'react-redux'
import { setSumCountItems, setItemToCart, addItem } from '../../redux/cart-reducer';
import { setPdpItemTC, clearItem } from '../../redux/pdp/actions';
import PDP from './PDP';
import React, { PureComponent } from 'react'
import { setPrices } from '../../util/object-helpers';

class PDPContainer extends PureComponent {
   isDuplicate = (item) => {
      const { activeAttributes: { activeColor,
         activeSize,
         activeSecondOpt,
         activeFirstOpt } } = item

      return item.id === this.props.item?.product.id &&
         activeColor === this.props.activeColor &&
         activeSize === this.props.activeSize &&
         activeFirstOpt === this.props.activeFirstOpt &&
         activeSecondOpt === this.props.activeSecondOpt
   }

   setItemToCart = (item) => {
      const { cartItems,
         setItemToCart,
         activeColor,
         activeSize,
         activeFirstOpt,
         activeSecondOpt,
         activeCurrency,
         item: { product: { prices } },
         addItem } = this.props

      if (cartItems.some(this.isDuplicate)) {
         cartItems.forEach(i => {
            if (this.isDuplicate(i))
               (i.activeAttributes.itemCount += 1)
         }
         )
      }
      else {
         item?.inStock && setItemToCart({
            ...item, activeAttributes: {
               ...item.activeAttributes = {
                  activeColor: activeColor,
                  activeSize: activeSize,
                  activeFirstOpt: activeFirstOpt,
                  activeSecondOpt: activeSecondOpt,
                  itemCount: 1,
                  displayPrice: setPrices(prices, activeCurrency)
               }
            }
         })
      }
      item?.inStock && addItem()
   }

   render() {
      return (
         <PDP {...this.props
         } setPrices={setPrices} isDuplicate={this.isDuplicate} setItemToCart={this.setItemToCart} />
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