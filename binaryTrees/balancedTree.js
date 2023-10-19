const { generateTree } = require("./tree");

const root = generateTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4]);

console.log(JSON.stringify(root, null, 2));
