module.exports = function fromWhere(plates) {
    if(plates.startsWith('CY')) {
      return "Bellville"
    }else if(plates.startsWith('CJ')){
      return "Paarl"    
    }else if(plates.startsWith('CA')){
      return "Cape Town"      
    }else{
    return "Some other place!"
    }
    }
