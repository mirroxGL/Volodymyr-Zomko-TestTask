import { PureComponent } from 'react';

export default class Attribute extends PureComponent {
   componentDidMount() {
      this.props.attributes?.forEach((attr, i) => {
         if (attr.type === "swatch") {
            this.props.setActiveColor(attr.items[0].value);
         }
         else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
            this.props.setActiveSize(attr.items[0].value)
         }
         else if (attr.type === "text" & attr.id === "With USB 3 ports") {
            this.props.setActiveFirstOpt(attr.items[0].value)
         }
         else {
            this.props.setActiveSecondOpt(attr.items[0].value)
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
