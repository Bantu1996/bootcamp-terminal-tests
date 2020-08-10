let assert = require("assert")
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe("The mostProfitableDepartment function", function(salesData) {
    
      it("should return all most profitable department", function() {
          
  assert.equal("", mostProfitableDepartment("outdoor"));
      })

      it("should return all most profitable department in sales", function() {
          
        assert.equal(0, mostProfitableDepartment(18007));
  })

});
