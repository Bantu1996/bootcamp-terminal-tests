module.exports = function countRegNumber(regList){
    var counter = 0;
    const regNumbers = regList.split(",");
    for (var i=0;i<regNumbers.length;i++) {
        var regNumber = regNumbers[i].trim();
        if (regNumber.startsWith("CY")) {
          counter++;
        } else if (regNumber.startsWith("CJ")) {
          counter++;
        }
    }
    
    return counter;
  }