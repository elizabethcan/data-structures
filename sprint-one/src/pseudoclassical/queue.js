var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
}

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];
  for (var i = 0; i < Object.keys(this.storage).length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return dequeued;
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}
