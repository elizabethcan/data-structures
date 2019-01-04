var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // if object is empty, set the key to the current length (0) and the value to the input value
    if (storage.size === 0) { 
      storage[storage.size] = value;
    } else {
    // for the second item we must first add a new key (can be set to anything to start)
    // now set object[size - 1] to the value from the object[size - 2]
    // next set object[size - 2] to the value from object[size - 3]
    // repeat this while (size - i) > 0
      storage[storage.size] = 'placeholder'
      var i = 1;
      while ((storage.size - i) > 1) {
        storage[storage.size - i] = storage[storage.size - i - 1]
        i--;
      } 
      // then do base case for object[0] = value
      storage[0] = value;
    }
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
