let assert = require("assert")
let findItemsOver = require("../findItemsOver");

describe("The findItemsOver function ", function(items, treshold){
  
    it ("should return a fruit higher than the threshold qty", function() {
    var fruitTreshold = findItemsOver(25);
    ;
        assert.deepEqual(fruitTreshold, []);
    }); 

    it ("should not return a fruit less than the threshold qty", function() {
        var fruitTreshold = findItemsOver(10);
        ;
            assert.deepEqual(fruitTreshold, []);
        }); 

});

