module.exports = function findItemsOver20 (items) {
    var products = []
    
    for (i=0;i<items.length;i++) {
      if(items[i].qty>20) {
        products.push(items[i]) }
      
    }
      return products
    }