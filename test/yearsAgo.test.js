let assert = require("assert")
let yearsAgo = require("../yearsAgo");

describe("The yearsAgo function ", function(years){
  
    it ("should return how many years that was!", function() {
      var year = new Date();
        assert.equal(2018, yearsAgo(2));
    }); 
});

