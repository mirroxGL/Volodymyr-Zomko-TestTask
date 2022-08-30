import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPdpItemTC, clearItem, setActiveColor, setActiveSize, setActiveSecondOpt, setActiveFirstOpt } from '../../redux/pdp/actions';
import s from "./PDP.module.css"
import classnames from 'classnames';
import Attributes from './Attribute/Attributes';
import { setSumCountItems, setItemToCart } from '../../redux/cart-reducer';


class PDP extends Component {
   constructor(props) {
      super(props)

   }

   componentDidMount() {
      let id = window.location.href.split("http://localhost:3000/pdp/")[1]
      this.props.setPdpItem(id)


   }
   componentWillUnmount() {
      this.props.clearItem()
   }
   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol == activeCurrency.symbol) {
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

   //////////////!item?.inStock && /////////////
   setItemToCart = (item) => {
      this.props.setItemToCart({
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

      //////////////!item?.inStock && /////////////
      this.props.setSumCountItems(this.setTotalCount(this.props.items))

   }
   render() {
      return (
         <div className={s.PDP}>
            {/* {this.props.isPending && <h1 style={{ paddingTop: 200 }}>Hello World!</h1>} */}
            <div className={s.PDPWrapper} >
               <div className={s.PDP__smallImgs}>
                  <div className={s.PDP__smallImg}><img src={this.props.item?.product.gallery[2]} alt="" /></div>
                  <div className={s.PDP__smallImg}><img src={this.props.item?.product.gallery[3]} alt="" /></div>
                  <div className={s.PDP__smallImg}><img src={this.props.item?.product.gallery[4]} alt="" /></div>
               </div>
               <div className={s.PDP__mainImg}><img src={this.props.item?.product?.gallery[0]} alt="" /></div>
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
                     <a className={s.addToCartBtn}>ADD TO CART</a>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: this.props.item?.product?.description }} className={s.description}>
                  </div>
               </div>
            </div >
         </div>
      )
   }
}



const mapStateToProps = (state) => ({
   items: state.cart.items,
   item: state.pdp.item,
   isPending: state.pdp.isPending,
   activeCurrency: state.currency.activeCurrency,
   activeColor: state.pdp.activeColor,
   activeSize: state.pdp.activeSize,
   activeFirstOpt: state.pdp.activeFirstOpt,
   activeSecondOpt: state.pdp.activeSecondOpt,
})



export default connect(mapStateToProps, {
   setPdpItem: setPdpItemTC,
   clearItem: clearItem,
   setItemToCart: setItemToCart,
   setActiveColor: setActiveColor,
   setActiveSize: setActiveSize,
   setActiveSecondOpt: setActiveSecondOpt,
   setActiveFirstOpt: setActiveFirstOpt,
   setSumCountItems: setSumCountItems,
})(PDP)