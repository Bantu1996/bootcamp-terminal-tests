module.exports = function mostProfitableDepartment(salesData) {

    var mostDepartment = {};
    for (var i=0; i<salesData.length;i++) {
    var dep = salesData[i].department;
      //console.log(dep)
      if (mostDepartment[dep] === undefined){
          mostDepartment[dep] = 0;
      } 
       mostDepartment[dep] += salesData[i].sales;
    }
      var totalSales = 0;
      var depSales = '';
  // console.log(mostDepartment)
  for (var depa in mostDepartment) {
       if(mostDepartment[depa] > totalSales){
         totalSales = mostDepartment[depa];
         depSales  = depa
          }
      }
     //console.log(depa)
   return depSales
  }
   
  
  