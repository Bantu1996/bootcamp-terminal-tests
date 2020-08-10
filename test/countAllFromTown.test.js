let assert = require("assert")
let countAllFromTown = require("../countAllFromTown");

describe("The countAllFromTown function", function(regNumbers, loc) {
    
    it("should return all registration numbers from fromStellies", function() {
          
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CB');

assert.deepEqual(fromStellies, []);
    })
     
      it("should return all registration numbers from fromKuilsriver", function() {
          
          var fromKuilsriver = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
  
  assert.deepEqual(fromKuilsriver, []);
      })
  })


