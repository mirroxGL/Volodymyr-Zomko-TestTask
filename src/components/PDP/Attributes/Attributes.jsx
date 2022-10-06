import { PureComponent } from 'react';

export default class Attribute extends PureComponent {
   componentDidMount() {
      const { attributes,
         setActiveColor,
         setActiveSize,
         setActiveFirstOpt,
         setActiveSecondOpt } = this.props

      attributes?.forEach((attr, i) => {
         let value = attr.items[0].value

         if (attr.type === "swatch") {
            setActiveColor(value);
         }
         else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
            setActiveSize(value)
         }
         else if (attr.type === "text" & attr.id === "With USB 3 ports") {
            setActiveFirstOpt(value)
         }
         else {
            setActiveSecondOpt(value)
         }
      })
   }

   render() {
      const {
         attributes
      } = this.props
      return (
         <div>
            {attributes?.map((attr, i) => {
               return this.props.PDPAttributesBuilder(attr, i)
            })}
         </div >
      )
   }
}
