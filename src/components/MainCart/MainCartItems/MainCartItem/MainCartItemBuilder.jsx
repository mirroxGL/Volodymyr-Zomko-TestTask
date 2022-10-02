import s from "../.././MainCart.module.css"
import classnames from "classnames"

const sizeClasses = (activeAttr, size) => {
   return classnames(s.mainCart__sizeGrid, activeAttr === size && s.sizeGridActive)
}

const mainCartItemBuilder = (attr, i, item) => {
   if (attr.type === "swatch") {
      return <div key={i} className={s.mainCart__color}>
         <span>{attr.name}:</span>
         <div className={s.mainCart__colorGrids}>
            {attr.items.map((color, i) => {
               return <div key={i} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.mainCart__colorGrid}>
                  {item.activeAttributes.activeColor === color.value && <div key={i} className={s.colorGridActive}></div>}
               </div>
            })}
         </div>
      </div>
   }
   else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
      return <div key={i} className={s.mainCart__size}>
         <span>{attr.name}:</span>
         <div className={s.mainCart__sizeGrids}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeSize, size.value)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
   else if (attr.type === "text" & attr.id === "With USB 3 ports") {
      return <div key={i} className={s.mainCart__size}>
         <span>{attr.name}:</span>
         <div className={s.mainCart__sizeGrids}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeFirstOpt, size.value)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
   else {
      return <div key={i} className={s.mainCart__size}>
         <span>{attr.name}:</span>
         <div className={s.mainCart__sizeGrids}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeSecondOpt, size.value)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
}

export default mainCartItemBuilder