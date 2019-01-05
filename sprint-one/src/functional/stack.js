var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = Object.keys(storage).length;
      storage[size] = value;
  };

  someInstance.pop = function() {
    var size = Object.keys(storage).length;
    if (size !== 0) {
      var popped = storage[size - 1];
      delete storage[size - 1];
      return popped;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
