var jQuery = function(input) {
  function jQuery() {

    if (typeof input === 'object') {
      this.collection = [input]
    }
    
    // find by class
    else if (input[0] === '.') {
      this.collection = document.getElementsByClassName(input.substring(1, input.length));
    }

    // find by ID
    else if (input[0] === '#') {
      this.collection = document.getElementById(input.substring(1, input.length));
    }

    // find by element
    else {
      this.collection = document.getElementsByTagName(input);
    }

    this.length = function() {
      return this.collection.length;
    }

    this.idx = function(index) {
      return this.collection[index];
    }
  }

  return new jQuery();
};

var $ = jQuery