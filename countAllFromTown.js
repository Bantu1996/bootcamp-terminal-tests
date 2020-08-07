module.exports = function countAllFromTown(regNumbers, loc) {

    var plateNumbers = regNumbers.split(",");
    var anyTown = [];
    for (var i=0;i<plateNumbers.length;i++) {
        var trimNumbers = plateNumbers[i].trim();
      if (trimNumbers.startsWith(loc)) {
         anyTown.push(trimNumbers)
          }
    }
    return anyTown;
  }