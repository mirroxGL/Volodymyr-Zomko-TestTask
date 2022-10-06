import React, { PureComponent } from 'react'
import { setPrices } from '../../../util/object-helpers';
import CartItems from "./CartItems";

export default class CartItemsContainer extends PureComponent {
   render() {
      return (
         <CartItems {...this.props} setPrices={setPrices} />
      )
   }
}








