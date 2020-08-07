let assert = require("assert")
let countAllFromTown = require("../countAllFromTown");

describe("The countAllFromTown function", function() {
    
//     it("should return all registration numbers from fromStellies", function(regNumbers, loc) {
       
//     var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//     console.log(fromStellies)  
//   assert.deepEqual(fromStellies,  ['CL 124', 'CL 345', 'CL 341' ])
     // })
      it("should return all registration numbers from fromKuilsriver", function() {
          
          var fromKuilsriver = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
  
  assert.deepEqual(fromKuilsriver, []);
      })
  })


