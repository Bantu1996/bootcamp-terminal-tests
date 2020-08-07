let assert = require("assert");
let countRegNumber = require("../countRegNumber");



describe("The countRegNumber function ", function(regList) {
  
    it("should return 1 for 'CY 123-223'", function() {
      assert.equal(1, countRegNumber("CY 123-223"));
    });
    
    // it("should return 2 - but the parameter needs work'", function(regList) {
    //   var EXPECTED_COUNT = 1;

    //   assert.deepEqual(EXPECTED_COUNT, countRegNumber("CY 123, CA 123-123"));
    // });
    
    // it("should return 5 - but the parameter needs work'", function(regList) {
    //   var EXPECTED_COUNT = 5;
      
    //   assert.deepEqual(EXPECTED_COUNT, countRegNumber("CY 123-123", "CA 124-123", "CY 124-123", "CA 125-123", "CY 125-123", "CA 123-123"));
    // });
});