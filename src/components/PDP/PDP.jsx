import React, { PureComponent } from 'react'
import s from "./PDP.module.css"
import Attributes from './Attribute/Attributes';


class PDP extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         mainImage: undefined,
         isFirstImageReavealed: true
      }
   }
   async componentDidMount() {
      let id = window.location.href.split("http://localhost:3000/pdp/")[1]
      this.props.setPdpItem(id)
   }

   componentDidUpdate() {
      if (this.state.isFirstImageReavealed && this.state.mainImage !== this.props.item?.product.gallery[0]) {
         this.setState({ mainImage: this.props.item?.product.gallery[0], isFirstImageReavealed: false })
      }
   }

   componentWillUnmount() {
      this.props.clearItem()
   }

   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol === activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }
   }

   setTotalCount = (items) => {
      let sum = 1
      for (let i = 0; i < items.length; i++) {
         let num = items[i].activeAttributes.itemCount
         sum += num
      }
      return sum
   }

   setMainImage = (image) => {
      this.setState({ mainImage: image })
   }

   setItemToCart = (item) => {
      !item?.inStock && this.props.setItemToCart({
         ...item, activeAttributes: {
            ...item.activeAttributes = {
               activeColor: this.props.activeColor,
               activeSize: this.props.activeSize,
               activeFirstOpt: this.props.activeFirstOpt,
               activeSecondOpt: this.props.activeSecondOpt,
               activeImage: { img: undefined, index: 0 },
               itemCount: 1,
               displayPrice: this.setPrices(this.props.item.product.prices, this.props.activeCurrency)
            }
         }
      })
      !item?.inStock && this.props.setSumCountItems(this.setTotalCount(this.props.items))
   }
   render() {
      return (
         this.props.isPending ? <h1>Loading...</h1> :
            <div className={s.PDP}>
               <div className={s.PDPWrapper} >
                  <div className={s.PDP__smallImgs}>
                     {this.props.item?.product.gallery.map((img, i) => {
                        return <div key={i} onClick={() => this.setMainImage(img)} className={s.PDP__smallImg}><img src={img} alt="" /></div>
                     })}
                  </div>
                  <div className={s.PDP__mainImg}><img src={this.state.mainImage} alt="" /></div>
                  <div className={s.PDP__info}>
                     <div className={s.info__title_firm}><span>{this.props.item?.product.brand}</span></div>
                     <div className={s.info__title_type}><span>{this.props.item?.product.name}</span></div>
                     <Attributes
                        setActiveSize={this.props.setActiveSize}
                        setActiveColor={this.props.setActiveColor}
                        setActiveFirstOpt={this.props.setActiveFirstOpt}
                        setActiveSecondOpt={this.props.setActiveSecondOpt}
                        activeColor={this.props.activeColor}
                        activeSize={this.props.activeSize}
                        activeFirstOpt={this.props.activeFirstOpt}
                        activeSecondOpt={this.props.activeSecondOpt}
                        attributes={this.props.item?.product.attributes} />
                     <div className={s.priceBlock}>
                        <span>PRICE:</span>
                        <br />
                        <span>{this.props.item?.product.prices ? this.setPrices(this.props.item.product.prices, this.props.activeCurrency) : ""}</span>
                     </div>
                     <div onClick={() => this.setItemToCart(this.props.item?.product)} className={s.addToCart}>
                        <div className={s.addToCartBtn}>ADD TO CART</div>
                     </div>
                     <div dangerouslySetInnerHTML={{ __html: this.props.item?.product?.description }} className={s.description}>
                     </div>
                  </div>
               </div >
            </div >
      )
   }
}

export default PDP