import s from "../../Cart.module.css"
import classnames from 'classnames';

const sizeClasses = (activeAttr, size) => {
   return classnames(s.sizeGrid, activeAttr === size && s.activeSizeGrid)
}

const cartAttributesBuilder = (attr, i, item) => {
   if (attr.type === "swatch") {
      return <div key={i} className={s.item__colorBlock}>
         <span>{attr.name}:</span>
         <div className={s.chooseColorBlock}>
            {attr.items.map((color, i) => {
               return <div key={i} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.color}>
                  {item.activeAttributes.activeColor === color.value && <div key={i} className={s.activeColor}></div>}
               </div>
            })}
         </div>
      </div>
   }
   else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
      return <div key={i} className={s.item__sizeBlock}>
         <span>{attr.name}:</span>
         <div className={s.size__gridsBlock}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeSize, size.value)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
   else if (attr.type === "text" & attr.id === "With USB 3 ports") {
      return <div key={i} className={s.item__sizeBlock}>
         <span>{attr.name}:</span>
         <div className={s.size__gridsBlock}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeFirstOpt, size.value)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
   else {
      return <div key={i} className={s.item__sizeBlock}>
         <span>{attr.name}:</span>
         <div className={s.size__gridsBlock}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeSecondOpt, size.value)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
}

export default cartAttributesBuilder