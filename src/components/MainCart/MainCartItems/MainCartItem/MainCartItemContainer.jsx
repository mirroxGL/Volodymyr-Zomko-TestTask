import React, { PureComponent } from 'react'
import { addItem, substractItem } from '../../../../redux/cart-reducer'
import { connect } from 'react-redux'
import MainCartItem from './MainCartItem'

class MainCartItemContainer extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         itemCount: 0,
         currentImgIndex: 0,
         currentImg: undefined
      }
   }

   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol === activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }
   }
   incrItemHandler = (item) => {
      item.activeAttributes.itemCount += 1
      this.setState({ itemCount: this.state.itemCount - 1 })
      this.props.addItem()

   }
   decrItem = (item) => {
      item.activeAttributes.itemCount -= 1
      this.setState({ itemCount: this.state.itemCount - 1 })
      this.props.substractItem()
   }
   setActiveImage = (img, index) => {
      this.setState({ currentImg: img })
      this.setState({ currentImgIndex: index })


   }
   nextImage = (item, currImgNumber) => {
      if (currImgNumber + 1 < item.gallery.length) {
         this.setActiveImage(item.gallery[currImgNumber + 1], currImgNumber + 1)
      }
      else if (currImgNumber + 1 === item.gallery.length) {
         this.setActiveImage(item.gallery[currImgNumber], currImgNumber)
      }
   }

   prevImage = (item, currImgNumber) => {
      if (currImgNumber - 1 > -1) {
         this.setActiveImage(item.gallery[currImgNumber - 1], currImgNumber - 1)
      }
      if (currImgNumber - 1 === item.gallery[0]) {
         this.setActiveImage(item.gallery[0], currImgNumber)
      }
   }

   render() {
      return (
         this.props.item.activeAttributes.itemCount !== 0 && <MainCartItem {...this.props}
            currentImgIndex={this.state.currentImgIndex}
            currentImg={this.state.currentImg}
            setPrices={this.setPrices}
            incrItemHandler={this.incrItemHandler}
            decrItem={this.decrItem}
            setActiveImage={this.setActiveImage}
            nextImage={this.nextImage}
            prevImage={this.prevImage} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainCartItemContainer)