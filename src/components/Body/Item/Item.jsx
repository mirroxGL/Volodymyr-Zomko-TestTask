import React, { PureComponent } from 'react'
import s from "./../body.module.css"
import { NavLink } from 'react-router-dom';
import cart from "../../../assets/images/whiteCart.svg"
import classnames from 'classnames';

export default class Item extends PureComponent {
   setItemId = () => {
      this.props.setItemId(this.props.item.id)
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
                  displayPrice: this.setPrices(this.props.item.prices, this.props.activeCurrency)
               }
            }
         })
      }
      this.props.addItem()
   }

   render() {
      return (
         <div className={s.item__wrapper}>
            <NavLink className={s.redirectToPdp} to={`/pdp/${this.props.item.id}`}>
               <div className={s.item}>
                  {this.props.item.inStock && <div className={s.outOfStock__label}>OUT OF STOCK</div>}
                  <div className={classnames(s.item__img, this.props.item.inStock && s.item__50opImg)}><img src={this.props.item.gallery[0]} alt="" /></div>
                  <div className={s.item__title}>{this.props.item.brand} {this.props.item.name}</div>
                  <div className={s.item__price}>{this.props.item.prices ? this.setPrices(this.props.item.prices, this.props.activeCurrency) : ""}</div>
               </div>
            </NavLink>
            <div onClick={() => this.setItemToCart(this.props.item)} style={{ display: this.props.item.inStock && "none" }} className={s.cart}><img src={cart} alt="" /></div>
         </div >
      )
   }
}





