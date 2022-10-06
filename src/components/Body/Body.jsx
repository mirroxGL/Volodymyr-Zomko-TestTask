import s from "./body.module.css"
import classnames from 'classnames';
import { PureComponent } from "react";
import ItemContainer from "./Item/ItemContainer";

class Body extends PureComponent {
   componentDidMount() {
      this.props.setBodyItems(this.props.activeBodyCategory)
   }
   componentDidUpdate(prevProps) {
      const {
         activeBodyCategory,
         setBodyItems } = this.props

      if (prevProps.activeBodyCategory !== activeBodyCategory) {
         setBodyItems(activeBodyCategory)
      }
   }

   render() {
      const {
         activeCategory,
         items, } = this.props
      return (
         <div className={s.bodyBlock}>
            <div className={classnames(s.bodyWrapper)}>
               <div className={s.title}><span>{activeCategory}</span></div>
               <div className={s.items}>
                  {items.map((value, i) => <ItemContainer
                     item={value}
                     key={i} />)}
               </div>
            </div>
         </div>
      )
   }
}


export default Body