import classnames from "classnames"

export const setPrices = (prices, activeCurrency) => {
   for (let i = 0; i < prices.length; i++) {
      if (prices[i].currency.symbol === activeCurrency.symbol) {
         return prices[i].currency.symbol + " " + prices[i].amount
      }
   }
}

const sizeClasses = (activeAttr, size, s) => {
   return classnames(s.sizeGrid, activeAttr === size && s.activeSizeGrid)
}

export const cartAttributesBuilder = (attr, i, item, s) => {
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
               return <div key={i} className={sizeClasses(item.activeAttributes.activeSize, size.value, s)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
   else if (attr.type === "text" & attr.id === "With USB 3 ports") {
      return <div key={i} className={s.item__sizeBlock}>
         <span>{attr.name}:</span>
         <div className={s.size__gridsBlock}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeFirstOpt, size.value, s)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
   else {
      return <div key={i} className={s.item__sizeBlock}>
         <span>{attr.name}:</span>
         <div className={s.size__gridsBlock}>
            {attr.items.map((size, i) => {
               return <div key={i} className={sizeClasses(item.activeAttributes.activeSecondOpt, size.value, s)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
}