let assert = require("assert")
let findItemsOver20 = require("../findItemsOver20");

describe("The findItemsOver function ", function(items, treshold){
  
    it ("should return a fruit higher than the threshold qty", function() {
    var fruitTreshold = findItemsOver20(20);
    ;
        assert.deepEqual(fruitTreshold, []);
    }); 

    it ("should not return a fruit less than the threshold qty", function() {
        var fruitTreshold = findItemsOver20(19);
        ;
            assert.deepEqual(fruitTreshold, []);
        }); 

});

