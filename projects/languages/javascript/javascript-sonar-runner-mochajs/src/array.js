describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function() {
			chai.assert.equal(-1, [1,2,3].indexOf(5));
			chai.assert.equal(-1, [1,2,3].indexOf(0));
		})
	})
	describe('#forEach()', function(){
		it('should loop through the entire array', function() {

			var i = 0;
			[1,2,3].forEach(function() {
				i++;
			});

			chai.assert.equal(i, 3);

		});
	});
});

//construct cow name, set name
describe("Cow", function() {
  describe("#Constructor()", function() {
    it("should have a default name", function() {
      var cow = new Cow();
      chai.assert.equal(cow.name,"Anon cow");
    });

    it("should set cow's name if provided", function() {
      var cow = new Cow("Ruben");
      chai.assert.equal(cow.name,"Ruben");
    });
  });
});