import React, { PureComponent } from 'react'
import { addItem, substractItem } from '../../../../redux/cart-reducer'
import { connect } from 'react-redux'
import MainCartItem from './MainCartItem'
import { decrItem, incrItem, setPrices } from '../../../../util/object-helpers'

class MainCartItemContainer extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         itemCount: 1,
         currentImgIndex: 0,
         currentImg: undefined,
         isCartRevealed: this.props.isCartRevealed
      }
   }

   componentDidUpdate(prevProps) {
      const { itemCount } = this.props.item.activeAttributes
      const prevItemCount = prevProps.item.activeAttributes.itemCount

      if (prevItemCount !== this.state.itemCount) {
         this.setState({ itemCount: itemCount })
      }
   }

   setActiveImage = (img, index) => {
      this.setState({ currentImg: img })
      this.setState({ currentImgIndex: index })
   }
   nextImage = (item, currImgNumber) => {
      const { gallery } = item

      if (currImgNumber + 1 < gallery.length) {
         this.setActiveImage(gallery[currImgNumber + 1], currImgNumber + 1)
      }
      else if (currImgNumber + 1 === gallery.length) {
         this.setActiveImage(gallery[currImgNumber], currImgNumber)
      }
   }

   prevImage = (item, currImgNumber) => {
      const { gallery } = item

      if (currImgNumber - 1 > -1) {
         this.setActiveImage(gallery[currImgNumber - 1], currImgNumber - 1)
      }
      if (currImgNumber - 1 === gallery[0]) {
         this.setActiveImage(gallery[0], currImgNumber)
      }
   }

   render() {
      const { itemCount } = this.props.item.activeAttributes
      return (
         itemCount !== 0 && <MainCartItem {...this.props}
            itemCount={this.state.itemCount}
            currentImgIndex={this.state.currentImgIndex}
            currentImg={this.state.currentImg}
            setPrices={setPrices}
            incrItemHandler={incrItem.bind(this)}
            decrItem={decrItem.bind(this)}
            setActiveImage={this.setActiveImage}
            nextImage={this.nextImage}
            prevImage={this.prevImage} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      isCartRevealed: state.cart.isToggleCartReveal,
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