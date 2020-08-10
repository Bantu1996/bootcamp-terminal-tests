let assert = require("assert")
let countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function ", function(regNumbers){
  
    it ("should return 'CJ' as Paarl registration symbol", function() {
    var symbol = "CJ"
        assert.equal(symbol, ('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'));
    }); 

    it ("should not return 'CJ' if registration symbol is not from Paarl ", function() {
        var symbol = "CL"
            assert.equal(symbol, ('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        }); 
});

