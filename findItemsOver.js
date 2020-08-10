module.exports = function findItemsOver (items, treshold) {
    // console.log(treshold)
      var prod = []
      
      for (var i=0;i<items.length;i++) {
      if(items[i].qty>treshold) {
         prod.push(items[i])
         }
      
      }
      return prod
      console.log(prod)
    }
    