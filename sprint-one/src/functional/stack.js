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
    // create a variable assigned to the first value in the object
    // if size of the object is 0, delete object[0]
    // for this one we need to work from the 'lowest' key to the highest
    // otherwise, first reassign object[0] = object[1]
    // reassign object[1] = object[2]
    // continue until we get to object[object.size - 1]
    // delete object[size - 1]
    // return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
