const {
    findMean,
    findMedian,
    findMode,
  } = require("./helper");
  
  describe("#findMedian", function(){
    it("finds median of even set", function(){ 
      expect(findMedian([123, 213, 3232, 2])).toEqual(168)
    })
    it("finds median of odd set", function () { 
      expect(findMedian([12311, -99, 4441])).toEqual(4441)
    })
  })
  
  describe("#findMean", function () {
    it("finds mean of empty array", function () { 
      expect(findMean([])).toEqual(0)
    })
    it("finds mean of array", function () { 
      expect(findMean([123, 213, 3232, 2])).toEqual(892.5)
    })
  })
  
  describe("#findMode", function () {
    it("finds mode", function () { 
      expect(findMode([1,1,1,1,2,2,2,3])).toEqual(1)
    })
  })