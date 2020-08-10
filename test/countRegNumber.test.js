let assert = require("assert");
let countRegNumber = require("../countRegNumber");



describe("The countRegNumber function ", function(regList) {
  
    it("should return 1 for 'CY 123-223'", function() {
      assert.equal(1, countRegNumber("CY 123-223"));
    });
    
    it("should return 2 for 'CY 123-223' and 'CY 523-243'", function() {
      assert.equal(2, countRegNumber("CY 123-223, CY 523-243"));
    });
    
    it("should return 3 for 'CY 123-223', 'CY 523-243' and 'CY 623-743'", function() {
      assert.equal(3, countRegNumber("CY 123-223, CY 523-243, CY 623-743"));
    });
});