import React from 'react'
import { PureComponent } from 'react';
import logo from '../.././assets/images/logo.svg'
import vectorDown from '../.././assets/images/vectorDown.svg'
import vectorUp from '../.././assets/images/vectorUp.svg'
import cart from '../.././assets/images/cart.svg'
import s from "./header.module.css"
import { NavLink } from 'react-router-dom';


class Header extends PureComponent {
   componentDidMount() {
      this.props.getCategories()
   }

   renderCategories = () => {
      return (
         <div className={s.categoriesBlock}>
            <div className={s.categories}>
               {this.props.categories?.map((category, i) => {
                  return <NavLink to={{ pathname: `/${category.name}` }} key={i} onClick={() => this.props.handleCategoryClick(category.name)} className={s.categories__item}><span className={this.props.activeCategory === category.name ? s.active : 0}>{category.name}</span></NavLink>
               })}
            </div>
         </div>
      )
   }

   renderLogo = () => {
      return (
         <div>
            <button onClick={() => this.props.handleLogoClick()} className={s.logoBlock}>
               <img src={logo} alt="logo" />
            </button>
         </div>
      )
   }

   renderCartAndCurrency = () => {
      return (
         <div className={s.cartNcurrency}>
            <button onClick={() => this.props.handleCurrencyMouseClick()} className={s.currencyBlock}>
               <div className={s.currency}>$<img className={s.vector} src={this.props.isToggleCurrencyReveal ? vectorUp : vectorDown} alt="" /> </div>
            </button>
            <button onClick={() => this.props.handleCartMouseClick()} className={s.cart}>
               <div style={{ display: !this.props.itemsSumCount && "none" }} className={s.itemsCount}><span>{this.props.itemsSumCount}</span></div>
               <div><img src={cart} alt="" /></div>
            </button>
         </div>
      )
   }

   render() {
      return (
         <header>
            <div className={s.flexNavBlock}>
               {this.renderCategories()}
               {this.renderLogo()}
               {this.renderCartAndCurrency()}
            </div>
         </header >
      )
   }
}


export default Header