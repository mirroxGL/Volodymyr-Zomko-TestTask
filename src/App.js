import './App.css';
import { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import HeaderContainer from './components/Header/HeaderContainer';
import CartContainer from './components/Cart/CartContainer';
import BodyContainer from './components/Body/BodyContainer';
import MainCart from './components/MainCart/MainCart';
import CurrencyContainer from './components/Header/Currency/CurrencyContainer';
import PDP from './components/PDP/PDP.jsx';


class App extends Component {
  constructor(props) {
    super(props)
    this.hideAllWindows = this.hideAllWindows.bind(this)
  }
  hideAllWindows() {
    this.props.toggleCartReveal(false)
    this.props.toggleCurrencyReveal(false)
  }

  render() {
    return (
      <div className='wrapper'>
        {this.props.isToggleCartReveal ? <div onClick={this.hideAllWindows} className="deactivated"></div> : ""}
        <HeaderContainer />
        <CartContainer />
        <CurrencyContainer />
        <Routes>
          <Route path="/" element={<div onClick={this.hideAllWindows}><BodyContainer /></div>} />
          <Route path="/cart" element={<div onClick={this.hideAllWindows}><MainCart /></div>} />
          <Route path="/pdp/:itemId" element={<div onClick={this.hideAllWindows}><PDP /></div>} />
        </Routes>
      </div>
    )
  }
}


export default App;
