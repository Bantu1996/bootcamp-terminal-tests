let assert = require("assert")
let transportFee = require("../transportFee");


  describe("The transportFee function ", function(){
    
    it ("should return R20 for morning shift", function() {
        var money = 'R20';

        assert.equal(money, transportFee("morning"));
    }); 
     it ("should return R10 for afternoon shift", function() {
        var money = 'R10';
        assert.equal(money, transportFee("afternoon"));
    });
    it ("should return free for any other shift", function() {
        var money = 'free';
        assert.equal(money, transportFee());
    }); 
});
