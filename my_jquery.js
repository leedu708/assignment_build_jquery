var jQuery = function(string) {
  var collection = []
  if (string[0] === '.') {
    collection = document.getElementsByClassName(string.substring(1, string.length));
  }

  else if (string[0] === '#') {
    collection = document.getElementById(string.substring(1, string.length));
  }

  else {
    collection = document.getElementsByTagName(string);
  }

  return collection;
}