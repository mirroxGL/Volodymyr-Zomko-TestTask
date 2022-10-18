import React, { PureComponent } from 'react'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../../redux/pdp/actions'
import Attributes from './Attributes'
import { connect } from 'react-redux'

class AttributesContainer extends PureComponent {
   render() {
      const { item } = this.props

      return (
         <Attributes {...this.props} attributes={item?.product.attributes} />
      )
   }
}

const mapStateToProps = (state) => ({
   item: state.pdp.item,
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