module.exports = function totalPhoneBill(phone) {
    var phoneBills = phone.split(",");
    var cost = 0;
    for (var i=0;i<phoneBills.length;i++){
        var trimNumbers = phoneBills[i].trim();
      if (trimNumbers.startsWith("ca")) {
      cost += 2.75
        //poBills.push(trimNumbers);
      }
      else if(trimNumbers.startsWith("sm")) {
        cost += 0.65
      }
       }
    return "R" + cost.toFixed(2);
    
  }
  