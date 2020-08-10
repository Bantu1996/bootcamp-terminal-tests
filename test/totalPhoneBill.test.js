let assert = require("assert")
let totalPhoneBill = require("../totalPhoneBill");

describe("The totalPhoneBill function ", function(phone){
  
    it ("should return 'R2.75' for call cost", function() {
    
        assert.equal('R2.75', totalPhoneBill('call'));
    }); 

    it ("should return 'R0.65' for call cost", function() {
    
        assert.equal('R0.65', totalPhoneBill('sms'));
    }); 

});

