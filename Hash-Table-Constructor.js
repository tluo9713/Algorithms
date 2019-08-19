//Created a hash table from scratch. There are certain limitations and
//weaknesses of this hashtable. For one thing, this hash table will insert
//any key, even if it already exists, and will not overwrite previous values.

class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }
  _hash(input) {
    let total = 0;
    let randomPrime = 21211;
    for (let i = 0; i < input.length; i++) {
      let value = input.charCodeAt(i) - 96;
      total = (total * randomPrime + value) % this.table.length;
    }
    return total;
  }
  get(key) {
    let hashedKey = this._hash(key);
    let { table } = this;
    let values = table[hashedKey];
    if (!values) return undefined;
    for (let i = 0; i < values.length; i++) {
      let keyValuePair = values[i];
      if (keyValuePair[0] === key) {
        return keyValuePair[1];
      }
    }
    return undefined;
  }
  set(key, value) {
    let hashedKey = this._hash(key);
    let { table } = this;
    if (!table[hashedKey]) table[hashedKey] = [];
    table[hashedKey].push([key, value]);
  }
  keys() {
    let { table } = this;
    let allKeys = [];
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        for (let j = 0; table[i].length; j++) {
          let key = table[i][j][0];
          if (!allKeys.includes(key)) allKeys.push(key);
        }
      }
    }
    return allKeys;
  }
  values() {
    let { table } = this;
    let allValues = [];
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        for (let j = 0; table[i].length; j++) {
          let key = table[i][j][1];
          if (!allValues.includes(key)) allValues.push(key);
        }
      }
    }
    return allValues;
  }
}
