var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {}
  //var storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMehthods.enqueue = function(value) {
    this[Object.keys(this).length] = value;
}

queueMethods.dequeue = function() {
    var dequeued = this[0];
    delete this[0];
    for (var i = 0; i < Object.keys(this).length; i++) {
        this[i] = this[i + 1];
    }
    delete this[Object.keys(this).length - 1];
    return dequeued;
}

queueMethods.size = function() {
    return Object.keys(this).length;
}
