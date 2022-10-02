import { addItem, setItemToCart, setSumCountItems } from "../../../redux/cart-reducer"
import Item from "./Item"
import { connect } from 'react-redux'

import React, { Component } from 'react'
import { setPrices } from "../../../util/object-helpers"

class ItemContainer extends Component {
   setItemToCart = (item) => {
      if (this.props.cartItems.some(i => i.id === item.id)) {
         this.props.cartItems.forEach(i => { i.id === item.id && (i.activeAttributes.itemCount += 1) }
         )
      }
      else {
         this.props.setItemToCart({
            ...item, activeAttributes: {
               ...item.activeAttributes = {
                  activeColor: item.attributes.find(a => a.name === "Color")?.items[0].value,
                  activeSize: item.attributes.find(a => a.name === "Size" || a.name === "Capacity")?.items[0].value,
                  activeFirstOpt: item.attributes.find(a => a.name === "With USB 3 ports")?.items[0].value,
                  activeSecondOpt: item.attributes.find(a => a.name === "Touch ID in keyboard")?.items[0].value,
                  activeImage: { img: undefined, index: 0 },
                  itemCount: 1,
                  displayPrice: setPrices(this.props.item.prices, this.props.activeCurrency)
               }
            }
         })
      }
      this.props.addItem()
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

