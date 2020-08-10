function countAllPaarl(regNumbers) {
    //console.log(regNumbers)
     //console.log(location)
     var plateNumbers = regNumbers.split(",");
     var allPaarl = [];
     for (var i=0;i<plateNumbers.length;i++){
         var trimNumbers = plateNumbers[i].trim();
       if (trimNumbers.startsWith("CJ")) {
         allPaarl.push(trimNumbers);
     //return allPaarl.length; 
    }
    }
     return allPaarl.length;
     
   }