let assert = require("assert");
let fromWhere = require("../fromWhere");


describe("The fromWhere function ", function() {
    
    it("should return Bellville for 'CY'", function() {
      assert.equal('Bellville', fromWhere('CY'));
    });

    it("should return Cape Town for 'CA'", function() {
        assert.equal('Cape Town', fromWhere('CA'));
      });

      it("should return Paarl for 'CJ'", function() {
        assert.equal('Paarl', fromWhere('CJ'));
      });
    
    it("should return 'Some other place!' for other plate numbers", function() {
      assert.equal('Some other place!', fromWhere(''));
    });
  });
  