import { addItem, setItemToCart, setSumCountItems } from "../../../redux/cart-reducer"
import Item from "./Item"
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import { setPrices } from "../../../util/object-helpers"

class ItemContainer extends PureComponent {
   setItemToCart = (item) => {
      const { cartItems,
         setItemToCart,
         activeCurrency,
         addItem,
         item: { prices, attributes }
      } = this.props

      if (cartItems.some(i => i.id === item.id)) {
         cartItems.forEach(i => { i.id === item.id && (i.activeAttributes.itemCount += 1) }
         )
      }
      else {
         setItemToCart({
            ...item, activeAttributes: {
               ...item.activeAttributes = {
                  activeColor: attributes.find(a => a.name === "Color")?.items[0].value,
                  activeSize: attributes.find(a => a.name === "Size" || a.name === "Capacity")?.items[0].value,
                  activeFirstOpt: attributes.find(a => a.name === "With USB 3 ports")?.items[0].value,
                  activeSecondOpt: attributes.find(a => a.name === "Touch ID in keyboard")?.items[0].value,
                  activeImage: { img: undefined, index: 0 },
                  itemCount: 1,
                  displayPrice: setPrices(prices, activeCurrency)
               }
            }
         })
      }
      addItem()
   }
   render() {
      return (
         <Item {...this.props} setPrices={setPrices} setItemToCart={this.setItemToCart} />
      )
   }
}


const mapStateToProps = (state) => {
   return {
      items: state.body.items,
      cartItems: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      setItemToCart: (item) => dispatch(setItemToCart(item)),
      setSumCountItems: (count) => dispatch(setSumCountItems(count)),
      addItem: () => dispatch(addItem()),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)

