class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    let hash = this._hash(key);
    if(!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    this.keyMap[hash].push([key, value]); 
  }

  get(key) {
    let hash = this._hash(key);
    if(this.keyMap[hash]) {
      for(let i=0; i < this.keyMap[hash].length; i++) {
        if(this.keyMap[hash][i][0] === key) {
          return this.keyMap[hash][i][1];
        }
      }
    }
    return undefined;
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
     }
     return total;
  }
}

let HT = new HashTable();
HT.set("maroon", "#800000");
HT.set("yellow", "#FFFF00");
HT.set("olive", "#808000");
HT.set("salmon", "#FA8072");
HT.set("lightcoral", "#F08080");
HT.set("mediumvioletred", "#C71585");
HT.set("plum", "#DDA0DD");
console.log(HT.get("maroon"));
