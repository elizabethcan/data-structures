var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    // object with keys, 1, 2, 3, 4 = length 4 so we want to remove & return the key/value at Object.keys(storage).length
    var dequeued = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
