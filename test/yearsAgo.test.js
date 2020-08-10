let assert = require("assert")
let yearsAgo = require("../yearsAgo");

describe("The yearsAgo function ", function(years){
  
    it ("should return how many years that was since 2016!", function() {
      var year = new Date();
        assert.equal(2016, yearsAgo(4));
    }); 

    it ("should return how many years that was since 2017!", function() {
      var year = new Date();
        assert.equal(2017, yearsAgo(3));
    }); 

    it ("should return how many years that was since 2018!", function() {
      var year = new Date();
        assert.equal(2018, yearsAgo(2));
    }); 
});

