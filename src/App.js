import './App.css';
import { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import HeaderContainer from './components/Header/HeaderContainer';
import CartContainer from './components/Cart/CartContainer';
import BodyContainer from './components/Body/BodyContainer';
import CurrencyContainer from './components/Header/Currency/CurrencyContainer';
import { MainCartContainer } from './components/MainCart/MainCartContainer';
import PDPContainer from './components/PDP/PDPContainer';

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
          <Route path={"/"} element={<div onClick={this.hideAllWindows}><BodyContainer /></div>} />
          <Route path={"/tech"} element={<div onClick={this.hideAllWindows}><BodyContainer /></div>} />
          <Route path={"/all"} element={<div onClick={this.hideAllWindows}><BodyContainer /></div>} />
          <Route path={"/clothes"} element={<div onClick={this.hideAllWindows}><BodyContainer /></div>} />
          <Route path="/cart" element={<div onClick={this.hideAllWindows}><MainCartContainer /></div>} />
          <Route path="/pdp/:itemId" element={<div onClick={this.hideAllWindows}><PDPContainer /></div>} />
        </Routes>
      </div>
    )
  }
}


export default App;
