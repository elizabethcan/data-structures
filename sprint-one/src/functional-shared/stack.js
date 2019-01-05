var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

var storage = {};

stackMethods.push = function(value) {
  storage[Object.keys(storage).length] = value;
}

stackMethods.pop = function() {
  if (Object.keys(storage).length !== 0) {
    var popped = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return popped;
  }
}

stackMethods.size = function() {
  return Object.keys(storage).length;
};

