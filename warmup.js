function FooConstructor() {
  this.prop = 'foo!';
  this.age = function() {
    return Math.random();
  };
}

var BarConstructor = function() {
  return {
    prop: 'bar!',
    age: function() {
      return Math.random();
    }
  };
}

function SimpleObject() {
  this.collection = [];
  this.each = function(testFunc) {
    for(var i = 0; i < this.collection.length; i++) {
      testFunc(this.collection[i], i);
    };
  };
}