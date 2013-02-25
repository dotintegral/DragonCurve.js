var org = org || {};
org.siery = org.siery || {};
org.siery.dragon = org.siery.dragon || (function () {

	var dragonVectors = [],
		vectors = {};
	
	function Vector(chords) {
		var that = this,
			rotated = {};
		
		that.chords = chords;
		
		that.setRotation = function(vect) {
			that.rotated = vect;
		}
		
		that.rotate = function() {
			return that.rotated;
		}
	}
	
	function init() {
		vectors = {
			up: new Vector([0,-1]),
			down: new Vector([0,1]),
			left: new Vector([1,0]),
			right: new Vector([-1,0])
		};
		vectors.up.setRotation(vectors.left);
		vectors.left.setRotation(vectors.down);
		vectors.down.setRotation(vectors.right);
		vectors.right.setRotation(vectors.up);
		
		dragonVectors = [vectors.left];
	}
	
	function doIteration() {
		for(var i = dragonVectors.length; i--;) {
			dragonVectors.push(dragonVectors[i].rotate());
		}
	}
	
	function iterate(n) {
		for(;n--;) {
			doIteration();
		}
	}
	
	function path() {
		var result = [];
		for(var i = dragonVectors.length; i--;) {
			result.push( dragonVectors[i].chords );
		}
		
		return result;
	}
	
	return {
		init: init,
		iterate: iterate,
		path: path
	};
}());
