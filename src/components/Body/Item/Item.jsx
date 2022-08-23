import React, { Component } from 'react'
import s from "./../body.module.css"
import { NavLink } from 'react-router-dom';
import cart from "../../../assets/images/whiteCart.svg"



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
         <NavLink className={s.redirectToPdp} onClick={this.setItemId} to={`/pdp/${this.props.data.id}`}>
            <div className={s.item}>
               <div className={s.cart}><img src={cart} alt="" /></div>
               <div className={s.item__img}><img src={this.props.data.gallery[0]} alt="" /></div>
               <div className={s.item__title}>{this.props.data.brand} {this.props.data.name}</div>
               <div className={s.item__price}>{this.props.data.prices ? this.setPrices(this.props.data.prices, this.props.activeCurrency) : ""}</div>
            </div>
         </NavLink>
      )
   }
}





