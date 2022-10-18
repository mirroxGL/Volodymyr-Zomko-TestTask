import { connect } from 'react-redux'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../../redux/pdp/actions'
import PDPAttributesBuilder from './PDPAttributesBuilder'
import React, { PureComponent } from 'react'

export class PDPAttributesBuilderContainer extends PureComponent {
   render() {
      return (
         <PDPAttributesBuilder {...this.props} />
      )
   }
}

const mapStateToProps = (state) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(PDPAttributesBuilderContainer)