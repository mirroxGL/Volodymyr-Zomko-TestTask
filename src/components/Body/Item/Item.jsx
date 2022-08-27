import React, { Component } from 'react'
import s from "./../body.module.css"
import { NavLink } from 'react-router-dom';
import cart from "../../../assets/images/whiteCart.svg"
import classnames from 'classnames';



export default class Item extends Component {
   componentDidMount() {



   }

   setItemId = () => {


      this.props.setItemId(this.props.data.id)

   }

   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol == activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }

   }

   render() {
      return (

         <NavLink className={classnames(s.redirectToPdp)} to={`/pdp/${this.props.data.id}`}>

            <div className={s.item}>
               {this.props.data.inStock && <div className={s.outOfStock__label}>OUT OF STOCK</div>}
               <div style={{ display: this.props.data.inStock && "none" }} className={s.cart}><img src={cart} alt="" /></div>
               <div className={classnames(s.item__img, this.props.data.inStock && s.item__50opImg)}><img src={this.props.data.gallery[0]} alt="" /></div>
               <div className={s.item__title}>{this.props.data.brand} {this.props.data.name}</div>
               <div className={s.item__price}>{this.props.data.prices ? this.setPrices(this.props.data.prices, this.props.activeCurrency) : ""}</div>
            </div>
         </NavLink>
      )
   }
}





