module.exports = function yearsAgo(years){
    var year = new Date();
    return year.getFullYear() - years;  
  }