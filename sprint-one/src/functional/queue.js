var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    // want to remove the element that has been in the queue the longest i.e. the one that was added first
    var dequeued = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
