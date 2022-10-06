import { connect } from 'react-redux'
import { setSumCountItems, setTaxes, setTotalPrice } from '../../redux/cart-reducer';
import MainCart from './MainCart.jsx';
import React, { PureComponent } from 'react'
import { setTotalPriceLogic } from '../../util/object-helpers';

class MainCartContainer extends PureComponent {
   setFinalDigits = () => {
      const { items,
         activeCurrency,
         totalPrice,
         setTaxes } = this.props
      this.setTotalPrice(items, activeCurrency)
      setTaxes(activeCurrency?.symbol, ((totalPrice?.price) * 0.21).toFixed(2))
   }

   setTotalPrice = (items, activeCurrency) => {
      this.props.setTotalPrice(activeCurrency.symbol, setTotalPriceLogic(items, activeCurrency).toFixed(2))
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