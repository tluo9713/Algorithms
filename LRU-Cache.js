//https://www.algoexpert.io/questions/LRU%20Cache
//https://leetcode.com/problems/lru-cache/

//Design and implement a data structure for Least Recently Used (LRU) cache. It
//should support the following operations: get and put.

//get(key) - Get the value (will always be positive) of the key if the key exists
//in the cache, otherwise return -1.
//put(key, value) - Set or insert the value if the key is not already present.
//When the cache reached its capacity, it should invalidate the least recently
//used item before inserting a new item.

//The cache is initialized with a positive capacity.

//Follow up:
//Could you do both operations in O(1) time complexity?

//To get O(1) time complexity seems impossible at first. Some thoughts is that
//a hash map is fast O(1) time complexity to get values from keys, however there
//isn't an easy way to keep track of recently used. You can' keep track of
//recently used by using a linked list, but retriving values from keys is not
//constant time complexity. The big brain play is to combine both of these data
//strutures, where we leverage the best parts of both. If we create a doubly
//linked list, we can easily re-attach nodes and thus achieve O(1) time
//complexity to get most recently use and remove least recently used. Then you
//can use a hashmap to store the nodes thus you can get values from keys in O(1)
//time complexity. Below is an implementation of an LRU-Cache.
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = this.next = null;
  }
}

class DLL {
  constructor(size) {
    this.limit = size;
    this.length = 0;
    this.head = this.tail = null;
  }

  addToHead(node) {
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  moveToHead(node) {
    if (this.head !== node) {
      let prev = node.prev;
      let next = node.next;
      node.prev = null;
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      if (prev) {
        prev.next = next;
      }
      if (next) {
        next.prev = prev;
      }
    }
  }

  removeFromTail() {
    const key = this.tail.key;
    if (this.tail === this.head) {
      this.tail = this.head = null;
    } else {
      const { prev } = this.tail;
      prev.next = null;
      this.tail.prev = null;
      this.tail = prev;
    }

    return key;
  }
}

class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.length = 0;
    this.DLL = new DLL(this.maxSize);
    this.cache = {};
  }

  insertKeyValuePair(key, value) {
    if (this.cache[key]) {
      let node = this.cache[key];
      node.value = value;
      this.DLL.moveToHead(node);
    } else {
      if (this.length === this.maxSize) {
        let deletedKey = this.DLL.removeFromTail();
        delete this.cache[deletedKey];
        this.length--;
      }
      let newNode = new Node(key, value);
      this.cache[key] = newNode;
      this.DLL.addToHead(newNode);
      this.length++;
    }
  }

  getValueFromKey(key) {
    if (this.cache[key]) {
      let node = this.cache[key];
      this.DLL.moveToHead(node);
      return node.value;
    }
    return null;
  }

  getMostRecentKey() {
    return this.DLL.head.key;
  }
}

//LeetCode variation
var LRUCache = function(capacity) {
  this.maxSize = capacity || 1;
  this.length = 0;
  this.DLL = new DLL(this.capacity);
  this.cache = {};
};

LRUCache.prototype.put = function(key, value) {
  if (this.cache[key]) {
    let node = this.cache[key];
    node.value = value;
    this.DLL.moveToHead(node);
  } else {
    if (this.length === this.maxSize) {
      let deletedKey = this.DLL.removeFromTail();
      delete this.cache[deletedKey];
      this.length--;
    }
    let newNode = new Node(key, value);
    this.cache[key] = newNode;
    this.DLL.addToHead(newNode);
    this.length++;
  }
};

LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    let node = this.cache[key];
    this.DLL.moveToHead(node);
    return node.value;
  }
  return -1;
};

var Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = this.next = null;
};

var DLL = function(size) {
  this.limit = size;
  this.length = 0;
  this.head = this.tail = null;
};

DLL.prototype.addToHead = function(node) {
  if (this.head === null) {
    this.head = this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

DLL.prototype.moveToHead = function(node) {
  if (this.head !== node) {
    let prev = node.prev;
    let next = node.next;
    node.prev = null;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    if (prev) {
      prev.next = next;
      if (this.tail === node) {
        this.tail = prev;
      }
    }
    if (next) {
      next.prev = prev;
    }
  }
};

DLL.prototype.removeFromTail = function() {
  const key = this.tail.key;
  if (this.tail === this.head) {
    this.tail = this.head = null;
  } else {
    const { prev } = this.tail;
    prev.next = null;
    this.tail.prev = null;
    this.tail = prev;
  }

  return key;
};
