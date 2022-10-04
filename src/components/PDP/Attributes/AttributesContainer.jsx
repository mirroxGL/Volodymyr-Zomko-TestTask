import React, { Component } from 'react'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../../redux/pdp/actions'
import Attributes from './Attributes'
import { connect } from 'react-redux'

class AttributesContainer extends Component {
   render() {
      return (
         <Attributes {...this.props} attributes={this.props.item?.product.attributes} />
      )
   }
}

const mapStateToProps = (state) => ({
   item: state.pdp.item,
   activeColor: state.pdp.activeColor,
   activeSize: state.pdp.activeSize,
   activeFirstOpt: state.pdp.activeFirstOpt,
   activeSecondOpt: state.pdp.activeSecondOpt,
})

const mapDispatchToProps = (dispatch) => {
   return {
      setActiveColor: (color) => dispatch(setActiveColor(color)),
      setActiveSize: (size) => dispatch(setActiveSize(size)),
      setActiveSecondOpt: (opt) => dispatch(setActiveSecondOpt(opt)),
      setActiveFirstOpt: (opt) => dispatch(setActiveFirstOpt(opt)),
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesContainer)