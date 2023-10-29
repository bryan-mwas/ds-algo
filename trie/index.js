// Trie is a tree based structure that helps performs prefix based search in linear time.

var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 * Space: O(n)
 * Time: O(n)
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let c of word) {
    if (node[c] === undefined) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};

/**
 * Space: O(1)
 * Time: O(n)
 */
Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (let c of word) {
    node = node[c];
    if (node === undefined) return null;
  }
  return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.traverse(word);
  return node !== null && node.isWord === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.traverse(prefix) != null;
};

let retriever = new Trie();

retriever.insert("apple");
retriever.insert("application");
console.log(retriever.startsWith("apple"));
console.log(retriever.startsWith("appli"));
console.log(retriever.startsWith("applic"));
console.log(retriever.startsWith("cation"));
console.log(JSON.stringify(retriever, null, 2));
