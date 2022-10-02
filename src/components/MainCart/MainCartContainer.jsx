import { connect } from 'react-redux'
import { setSumCountItems, setTaxes, setTotalPrice } from '../../redux/cart-reducer';
import MainCart from './MainCart.jsx';
import React, { PureComponent } from 'react'

class MainCartContainer extends PureComponent {
   setFinalDigits = () => {
      this.setTotalPrice(this.props.items, this.props.activeCurrency)
      this.props.setTaxes(this.props.activeCurrency?.symbol, ((this.props.totalPrice?.price) * 0.21).toFixed(2))
   }

   setTotalPrice = (items, activeCurrency) => {
      let sum = 0
      let num = 0
      for (let i = 0; i < items.length; i++) {
         let price = items[i].prices.find(({ currency }) => currency.label === activeCurrency.label)
         num = price.amount * items[i].activeAttributes.itemCount
         sum += num
      }
      this.props.setTotalPrice(activeCurrency.symbol, sum.toFixed(2))
   }
   render() {
      return (
         <MainCart {...this.props} setFinalDigits={this.setFinalDigits} setTotalPrice={this.setTotalPrice} />
      )
   }
}


const mapStateToProps = (state) => {
   return {
      taxes: state.cart.taxes,
      itemsSumCount: state.cart.itemsSumCount,
      items: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
      totalPrice: state.cart.totalPrice
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      setTotalPrice: (symbol, price) => dispatch(setTotalPrice(symbol, price)),
      setSumCountItems: (count) => dispatch(setSumCountItems(count)),
      setTaxes: (symbol, amount) => dispatch(setTaxes(symbol, amount)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCartContainer)