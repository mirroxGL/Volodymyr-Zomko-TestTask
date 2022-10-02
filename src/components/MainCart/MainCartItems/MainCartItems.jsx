import React, { PureComponent } from 'react'
import MainCartItemContainer from './MainCartItem/MainCartItemContainer';

export default class MainCartItems extends PureComponent {
   render() {
      const {
         items,
      } = this.props
      return (
         items.map((item, i) => item.activeAttributes.itemCount !== 0 &&
            <MainCartItemContainer key={i} item={item} />
         )
      )
   }
}
