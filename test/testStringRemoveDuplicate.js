const should = require("chai").should(),
expect= require("chai").expect,

removeDuplicate = require("../js/srtingRemoveDuplicate");
describe("A series of test for remove Duplicate charecters in word", function(err){
  it("should remove Duplicate charecters", function(done){
  	   var result=removeDuplicate("abccbdeebacf");
       result.should.be.equal("abcdef");
       done();
    });

    it("should remove Duplicate charecters with case insensitive", function(done){
    	   var result=removeDuplicate("abcCbdefBAa");
         result.should.be.equal("abcdef");
         done();
    });

    it("should remove Duplicate charecters even accept numerical charecters ", function(done){
    	   var result=removeDuplicate("acd546c5");
         result.should.be.equal("acd546");
         done();
    });

    it("should remove Duplicate charecters even accept special charecters ", function(done){
         var result=removeDuplicate("acc#fgh*#");
         result.should.be.equal("ac#fgh*");
         done();
    });

    it("should not accept empty value", function(done){
    	var result=removeDuplicate();
      expect(result).to.be.null;
      done();
      });

  });
