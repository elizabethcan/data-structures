var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {}
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMehthods.enqueue = function(value) {
    this.storage[Object.keys(this.storage).length] = value;
}

queueMethods.dequeue = function() {
    var dequeued = this.storage[0];
    delete this.storage.storage[0];
    for (var i = 0; i < Object.keys(this.storage).length; i++) {
        this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[Object.keys(this.storage).length - 1];
    return dequeued;
}

queueMethods.size = function() {
    return Object.keys(this.storage).length;
}
